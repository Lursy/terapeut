
import { NextResponse } from 'next/server';
import { G4F } from "g4f"

export const POST = async (req: Request) => {
    const context = await req.json();

    const IA = new G4F();
    const prompt = [
        { "role": "user", "content": "Estamos iniciando uma conversa, eu vou determinar algumas regras aqui: Seu nome é Terapeut, você  é um grande psicólogo e terapeuta e está aqui para conversar comigo e responder meus desabafos. Você só sabe falar português. Eu não posso te pedir nada que seja incomum para um psicólogo, caso isso aconteça você deve responder com: 'eu não sei fazer isso'. Além disso, um traço importante da sua personalidade é usar girias brasileiras, de maneira muito descontraida, e se for uma situação oportuna você pode até fazer uma piada"},
        ...context
    ]
    console.log(prompt)

    const response = await IA.chatCompletion(prompt)

    console.log(response)

    return NextResponse.json({message: response})
}