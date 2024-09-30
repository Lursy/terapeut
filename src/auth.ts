import { User } from "@/database/functions/manageUser";
import { IUser } from "@/database/interfaces/IUser";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            async authorize(credentials: any): Promise<IUser | null> {

                const user = new User();
                const data = await user.get(credentials.email);

                if (!data) return null;

                // Valida a senha
                if (credentials.password === data.password) {
                    return data; // Retorna todos os dados do usuário
                } else {
                    throw new Error('Invalid credentials');
                }
            },
        }),
    ],
    pages: {
        signIn: '/login',
    },
    callbacks: {
        // Callback de sessão para incluir todos os dados do usuário na sessão
        async session({ session, token }: any) {
            // O token contém os dados do usuário retornados na função authorize
            if(session){
                session.user = token.user; // Adiciona os dados do usuário à sessão
            }
            return session;
        },
        // Callback de JWT para armazenar os dados do usuário no token
        async jwt({ token, user }) {
            if (user) {
                token.user = user; // Armazena os dados do usuário no token
            }
            return token;
        }
    },
    session: {
        strategy: "jwt", // Usando JWT para sessões
    }
});
