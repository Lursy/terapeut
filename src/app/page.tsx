import { MenuToggle } from "@/components/client/MenuToggle";
import { Anchor } from "@/components/client/NavButton";
import Image from "next/image";
import brain from "@/images/PSICOLOGIA.png";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen p-4 w-full h-auto">
      <header className="flex flex-row border-b-4 h-16 border-cyan-500">
        <h1 className="content-center text-4xl ml-6">Terapeut</h1>
        <nav className="flex ml-auto items-center border-gray-200">
          <MenuToggle />
          <div className="flex justify-end relative hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul className="absolute flex md:relative mr-2 md:mr-0 md:block justify-center items-end md:bg-transparent md:dark:bg-transparent bg-gray-100 dark:bg-gray-800 font-medium p-4 w-auto md:px-2 border border-gray-100 rounded-lg md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 border-gray-700">
              <div className="md:flex justify-center items-center">
                <li className="mr-2">
                  <Anchor>
                    Home
                  </Anchor>
                </li>
                <li className="mr-2">
                  <Anchor href="/chat">
                    Chats
                  </Anchor>
                </li>
                <li className="mr-2 border rounded-lg">
                  <Anchor href="/login">
                    Login
                  </Anchor>
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </header>
      <main className="relative w-full flex-grow h-auto">
          <div className="flex absolute w-full h-full justify-center items-center">
            <Image src={brain} className="w-96" alt=""></Image>
          </div>
          <div className="flex absolute w-full h-full justify-center items-center">
            <h1 className="animate-pulse font-black text-4xl">É importante cuidar de sí mesmo!</h1>
          </div>
          <div className="flex absolute w-full h-full justify-start items-end">
            <Anchor className="bg-blue-500 pl-6 pr-6 m-4 text-2xl" href="register">
              Registrar
            </Anchor>
          </div>
      </main>
    </div>
  );
}
