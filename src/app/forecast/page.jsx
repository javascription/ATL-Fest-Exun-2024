
"use client"


export default function Forecast() {
    return (
        <>
            <section>
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Weather
                    </h2>
                    <p className=" text-left text-gray-500 dark:text-gray-400">
                        You need to be logged in to view the forecast. Please log in to access this page.
                    </p>
                </div>
            </section>
        </>
    )
}