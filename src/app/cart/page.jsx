
"use client"

import { useSession } from "next-auth/react"

export default function Page() {
    const {data: session} = useSession();
    return (
        <>
            
            {session ? (
                <section>
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Waitlist
                        </h2>
                        <p className=" text-left text-gray-500 dark:text-gray-400">
                            Due to exceptionally high demand, your order has been placed on our waitlist.
                            We appreciate your patience as we work to fulfill your request.
                            If you have any concerns or need assistance, please contact our support team.
                        </p>
                    </div>
                </section>
            ) : ( 
                <section>
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Your Cart
                        </h2>
                        <p className=" text-left text-gray-500 dark:text-gray-400">
                            You need to be logged in to view your cart. Kindly log in to access this page.
                        </p>
                    </div>
                </section>
                )
            }

        </>
    )
}