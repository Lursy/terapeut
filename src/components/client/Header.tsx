"use client"

import { useEffect } from "react";
import { MenuToggle } from "./MenuToggle";
import { Anchor } from "./NavButton";
import { signOut, useSession } from "next-auth/react";

export const Header = () => {
    const {data: session, status } = useSession();

    if(status === "loading"){
        return(<div></div>);
    }
    
    useEffect(() => {
        window.onclick = function (event) {
            let drop = document.getElementById('navbar-dropdown');
            let name = (event.target as any).tagName;
    
            if (drop && !drop.classList.contains("hidden")) {
                if (event.target != drop && name != "BUTTON" && name != "sgv") {
                    drop.classList.add("hidden");
                }
            }
        }
    }, []);

    return (
        <header className="flex flex-row border-b-4 h-16 border-cyan-500">
        <h1 className="content-center text-4xl ml-6">Terapeut</h1>
        <nav className="flex ml-auto items-center border-gray-200">
          <MenuToggle />
          <div className="flex justify-end relative hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul className="absolute flex md:relative mr-2 md:mr-0 md:block justify-center items-end md:bg-transparent md:dark:bg-transparent bg-gray-100 dark:bg-gray-800 font-medium p-4 w-auto md:px-2 border border-gray-100 rounded-lg md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 border-gray-700">
              <div className="md:flex justify-center items-center">
                <li className="mr-2">
                  <Anchor href="/">
                    Home
                  </Anchor>
                </li>
                {session?(<li className="mr-2">
                  <Anchor href="/chat">
                    Chats
                  </Anchor>
                </li>):null}
                {
                    session?.user?(
                        <li className="mr-2 border rounded-lg">
                            <button onClick={() => { signOut() }} className="flex justify-center whitespace-nowrap py-2 px-5 rounded md:border-0 md:px-2 dark:text-white hover:bg-gray-200 hover:text-black transition-colors">
                                Sair
                            </button>
                        </li>
                    ):(
                        <li className="mr-2 border rounded-lg">
                            <Anchor href="/login">
                                Entrar
                            </Anchor>
                        </li>
                    )
                }
              </div>
            </ul>
          </div>
        </nav>
      </header>
    )
}