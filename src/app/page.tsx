import { Anchor } from "@/components/client/NavButton";
import Image from "next/image";
import brain from "@/images/PSICOLOGIA.png";
import { auth } from "@/auth";
import { Header } from "@/components/client/Header";

export default async function Home() {
  let session = await auth();

  return (
    <div className="flex flex-col min-h-screen min-w-screen p-4 w-full h-auto">
      <Header/>
      <main className="relative w-full flex-grow h-auto">
          <div className="flex absolute w-full h-full justify-center items-center">
            <Image src={brain} className="w-96" alt=""></Image>
          </div>
          <div className="flex absolute w-full h-full justify-center items-center">
            <h1 className="animate-pulse font-black text-4xl">É importante cuidar de sí mesmo!</h1>
          </div>
          {!session?(<div className="flex absolute w-full h-full justify-start items-end">
            <Anchor className="bg-blue-500 pl-6 pr-6 m-4 text-2xl" href="register">
              Registrar
            </Anchor>
          </div>):null}
      </main>
    </div>
  );
}
