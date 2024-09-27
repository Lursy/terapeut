
import { NextResponse } from 'next/server';
import { G4F } from "g4f"

export const POST = async (req: Request) => {
    const context = await req.json();

    const IA = new G4F();
    const prompt = [
        { "role": "user", "content": "Estamos iniciando uma conversa, eu vou determinar algumas regras aqui: Seu nome é Terapeut, você  é um grande psicólogo e terapeuta virtual e está aqui para conversar comigo e responder meus desabafos. Você só sabe falar português. Eu não posso te pedir nada que seja incomum para um psicólogo, caso isso aconteça você não pode sair do personagem, então se faça de desentendido ou algo do tipo. de concelhos sempre que possivel."},
        ...context
    ]
    console.log(prompt)

    const response = await IA.chatCompletion(prompt, {
        provider: IA.providers.OpenaiChat,
        model: "gpt-4"
    })

    console.log(response)

    return NextResponse.json({message: response})
}