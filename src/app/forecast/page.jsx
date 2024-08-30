"use client"

import { useSession } from "next-auth/react"

export default function Forecast() {
    const { data: session } = useSession()
    return (
        <>
            {session ? (
                <section className="h-screen w-screen absolute top-0 left-0">
                    <img src="/temp.png" className="absolute top-[8rem] left-[8rem]"/>
                    <img src="/temp1.png" className="absolute top-[8rem] right-[14rem]" />
                </section>
            ) : (
                <>
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Weather
                        </h2>
                        <p className=" text-left text-gray-500 dark:text-gray-400">
                            You need to be logged in to view the forecast. Please log in to access this page.
                        </p>
                    </div>
                </>
            )}
        </>
    )
}

/* 
                   

*/