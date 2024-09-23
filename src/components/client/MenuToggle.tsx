"use client"

import { useEffect } from "react";

export const MenuToggle = () => {
    useEffect(() => {
        window.onclick = function (event) {
            let drop = document.getElementById('navbar-dropdown');
            let button = document.getElementById('buttonNav');
            let name = (event.target as any).tagName;
            console.log(name);
    
            if (drop && !drop.classList.contains("hidden")) {
                if (event.target != drop && name != "BUTTON" && name != "sgv") {
                    drop.classList.add("hidden");
                }
            }
        }
    }, []);

    return (
        <button id="buttonNav" onClick={ () => {
            let items = document.getElementById("navbar-dropdown");
            let is_hidden = items?.classList.contains("hidden");
            
            if(is_hidden){
                items?.classList.remove("hidden");
                return;
            }

            items?.classList.add("hidden");

        }  } data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex m-4 items-center p-2 right-0 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600 transition" aria-controls="navbar-dropdown" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
        </button>
    )
}