
"use client"

import { useSession } from "next-auth/react";

export default function Progress() {
    const { data: session } = useSession()

    return (
        <> 
            {session ? (<section className="relative h-screen w-screen">
                <div className="absolute top-0 left-0 h-full w-full">
                    <img 
                        src="/learn.png" 
                        alt="videos" 
                        className="absolute top-[7rem] left-[10rem]" 
                    />
                    <img 
                        src="/species.png" 
                        alt="search" 
                        className="absolute top-[6rem] right-[9rem]" 
                    />
                    <img 
                        src="/menu.png" 
                        alt="search" 
                        className="fixed top-[25rem] right-6" 
                    />
                </div>
            </section>) : (
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Learn
                    </h2>
                    <p className=" text-left text-gray-500 dark:text-gray-400">
                        You need to be logged in to view your learning modules. Please log in to access this page.
                    </p>
                </div>
            )}
        </> 
    );
}