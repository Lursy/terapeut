"use client"

import { Header } from '@/components/client/Header';
import { signIn, useSession } from 'next-auth/react';
import { useState } from 'react';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { data: session, status } = useSession();

    if (status === "authenticated") return document.location.href = "/";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = await signIn('credentials', {
            redirect: false,
            email,
            password,
        });

        if (result?.error) {
            let email = document.getElementById("email");
            let password = document.getElementById("password");

            email?.classList.remove("border-slate-600");
            email?.classList.add("border-[#FF0000]");

            password?.classList.remove("border-slate-600");
            password?.classList.add("border-[#FF0000]");
        } else {
            // Redirecionar para a página inicial ou onde desejar
            window.location.href = '/';
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name == "email") {
            setEmail(value)
        }
        if (name == "password") {
            setPassword(value)
        }
    };

    return (
        <div className="flex flex-col min-h-screen min-w-screen p-4 w-full h-auto">
            <Header />
            <main className="flex w-full flex-grow h-full">
                <div className="bg-slate-950 min-h-screen flex items-center justify-center">
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-slate-800 text-white rounded-lg shadow-lg w-full max-w-md p-8">
                            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-sm font-semibold mb-2" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email" // Adicionei o atributo name
                                        type="email"
                                        value={email}
                                        onChange={handleChange}
                                        className="w-full p-3 focus:outline-none bg-slate-700 rounded-lg border border-slate-600 text-white"
                                        placeholder="Digite seu email"
                                        autoComplete='off'
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-semibold mb-2" htmlFor="password">
                                        Senha
                                    </label>
                                    <input
                                        id="password"
                                        name="password" // Adicionei o atributo name
                                        type="password"
                                        value={password}
                                        onChange={handleChange}
                                        className="w-full p-3 focus:outline-none bg-slate-700 rounded-lg border border-slate-600 text-white"
                                        placeholder="Digite sua senha"
                                        autoComplete='off'
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 rounded-lg mt-6 transition duration-300"
                                >
                                    Entrar
                                </button>
                                <button
                                    onClick={() => document.location.href = "/register"}
                                    className="w-full bg-green-500 hover:bg-cyan-600 text-black font-semibold py-3 rounded-lg mt-6 transition duration-300"
                                >
                                    Registrar
                                </button>
                            <button
                                onClick={() => document.location.href = "/"}
                                className="w-full p-2 bg-gray-600 hover:bg-gray-400 text-black font-semibold py-3 rounded-lg mt-6 transition duration-300"
                            >
                                Voltar
                            </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SignIn;
