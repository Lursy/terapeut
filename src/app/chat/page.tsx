"use client"

import { Header } from "@/components/client/Header";
import { Bot, User } from "@/components/client/Messages";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";


export default function Chat() {
  const {data: session, status }: any = useSession()
  const [chat, setChat] = useState([] as { role: string, content: string }[]);

  useEffect(() => {
    const scrollable = document.getElementById('chat');

    if (!scrollable) return;

    scrollable.scrollTop = scrollable.scrollHeight;
  }, [chat]);

  const send = async () => {
    const message: any = document.getElementById("message");

    if (!message) return;

    let text = message.value;

    if(text == "") return;

    let templateMessage = {
      role: "user",
      content: `${session?.user?.username}: '${text}'`
    };

    console.log(templateMessage)

    // Atualize o chat imediatamente para exibir a mensagem do usuário
    setChat((prevChannels: any) => {
      return [...prevChannels, { role: "user", content: text }, {role: "assistant", content: ""}];
    });

    message.value = "";

    // Crie uma cópia do chat atualizado para enviar ao servidor
    let messageContext = [...chat, templateMessage];

    let response = await fetch("/api/terapeut", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(messageContext)
    });

    let data = await response.json();

    let responseMessage = {
      role: "assistant",
      content: data.message
    };

    // Atualize o chat com a resposta do bot
    setChat((prevChannels: any) => {
      const updateMessageBot = prevChannels.slice(0, -1);
      return [...updateMessageBot, responseMessage];
    });
  };

  return (
    <div className="flex flex-col min-h-screen min-w-screen p-4 w-full h-auto">
      <Header/>
      <main className="flex w-full flex-grow h-full">
        <div className="flex w-full h-auto m-6 bg-gray-500">
          <div className="flex flex-col h-auto bg-gray-600 w-96 m-4">
            <div className="flex flex-col flex-grow justify-between items-center h-full p-2">
              <div className="text-xl">Chats</div>
              <button className="rounded-lg bg-green-500 p-2">Novo chat</button>
            </div>
          </div>
          <div className="flex h-auto bg-gray-600 w-full m-4">
            <div className="flex flex-col flex-grow justify-between items-center h-full p-2">
              <div className="flex-grow overflow-y-scroll w-full h-2" id="chat">
                {
                  chat.map((messages: { role: string, content: string }, index: any) => (
                    <div key={index}>
                      {
                        messages.role == "user" ? (
                          <User>{messages.content}</User>
                        ) : (
                          <Bot>{messages.content}</Bot>
                        )
                      }
                    </div>
                  ))
                }
              </div>
              <div className="flex w-full flex-row justify-center m-2">
                <input type="text" className="w-96 text-black p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-s-lg" id="message" autoComplete="off" onKeyDown={(e) => { if (e.key == "Enter") send() }} />
                <button className="p-2 bg-green-500 hover:bg-green-700 rounded-e-lg" id="send" onClick={send}>Enviar</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
