"use client"
import TextMotion from "./ui/TextMotion";

export default function Hero() {
    return (
        <>
            <section className="top-0 absolute h-[40rem] w-screen flex flex-col items-center justify-center">
                <TextMotion
                    className="relative flex flex-col gap-4 items-center justify-center px-4"
                >
                    <div className="mi:text-3xl text-4xl md:text-7xl font-bold dark:text-white text-center">
                    720+ Sown
                    </div>
                    <div className="mi:text-3xl text-4xl md:text-7xl font-[900] dark:text-white text-center py-4">
                    yesterday.
                    </div>
                    <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
                     Harvest
                    </button>
                </TextMotion>
            </section>
        </>
    )
}