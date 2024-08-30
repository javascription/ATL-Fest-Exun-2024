
"use client"

import { useSession } from "next-auth/react"

export default function Products() {
    const {data: session} = useSession()
    return (
        <>
            {session ? (
                <>
                <section>
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-lg">

                        <h2 className="mb-5 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Drone
                        </h2>
                        <h2 className="text-2xl text-left text-tertiary font-[700]">
                            Overview
                        </h2>
                        <img src="/field.png" className="top-[5rem] mb-10" alt="farm" />
                        <h2 className="text-2xl text-left text-tertiary font-[700] mb-5">
                            Updates
                        </h2>
                        <div className="flex flex-row gap-14 font-bold text-tertiary mb-[4rem]">
                            <div className="w-[900px] h-[60px] bg-[#f6eafe] rounded-full flex items-center justify-center text-center">No Pests Detected! All Safe<br />Tap to see more</div>
                            <div className="w-[800px] h-[60px] bg-[#f6eafe] rounded-full flex items-center justify-center text-center">Sustainable Land Management<br />in place!</div>
                            <div className="w-[800px] h-[60px] bg-[#f6eafe] rounded-full flex items-center justify-center text-center">Area 24 to be left fallow<br />after the next harvest.</div>
                        </div>


                        <h2 className="mb-5 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Tag
                        </h2>
                        <h2 className="text-2xl text-left text-tertiary font-[700]">
                            Health Metrics
                        </h2>
                        <img src="/metrix.png" className="mb-10" alt="health metrics" />
                    </div>
                </section>
                </>
            ) : (
                <>
                <section>
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Products
                        </h2>
                        <p className=" text-left text-gray-500 dark:text-gray-400">
                            You need to be logged in to view the Products Dashboard. Please log in to access the contact form.
                        </p>
                    </div>
                </section>
                </>
            )}
        </>
    )
}