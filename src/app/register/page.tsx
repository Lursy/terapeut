"use client";

import { useSession } from "next-auth/react";
import React, { useState } from "react";

interface FormData {
    username: string;
    email: string;
    password: string;
    n_password: string;
}

export default function Register() {
    const {data: session, status } = useSession();

    if(status === "authenticated") return document.location.href = "/";


    const [formData, setFormData] = useState<FormData>({
        username: '',
        email: '',
        password: '',
        n_password: ''
    });

    async function register(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        let user = await fetch("/api/user/create", {
            method: "POST",
            body: JSON.stringify({...formData})
        })

        if(user){
            window.location.href = "/"
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="bg-slate-950 min-h-screen flex items-center justify-center">
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-slate-800 text-white rounded-lg shadow-lg w-full max-w-md p-8">
                    <h2 className="text-2xl font-bold mb-6 text-center">Registro</h2>
                    <form onSubmit={register}>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2" htmlFor="username">
                                Nome
                            </label>
                            <input
                                id="username"
                                name="username" // Adicionei o atributo name
                                type="text"
                                value={formData.username}
                                onChange={handleChange}
                                className="w-full p-3 focus:outline-none bg-slate-700 rounded-lg border border-slate-600 text-white"
                                placeholder="Digite seu nome"
                                autoComplete="off"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email" // Adicionei o atributo name
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 focus:outline-none bg-slate-700 rounded-lg border border-slate-600 text-white"
                                placeholder="Digite seu email"
                                autoComplete="off"
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
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full p-3 focus:outline-none bg-slate-700 rounded-lg border border-slate-600 text-white"
                                placeholder="Digite sua senha"
                                autoComplete="off"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2" htmlFor="n_password">
                                Confirme a Senha
                            </label>
                            <input
                                id="n_password"
                                name="n_password" // Adicionei o atributo name
                                type="password"
                                value={formData.n_password}
                                onChange={handleChange}
                                className="w-full p-3 bg-slate-700 focus:outline-none rounded-lg border border-slate-600 text-white"
                                autoComplete="off"
                                placeholder="Confirme sua senha"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 rounded-lg mt-6 transition duration-300"
                        >
                            Registrar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
