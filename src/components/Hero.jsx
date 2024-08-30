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
                    NuxeCorps
                    </div>
                    <div className="mi:text-xs font-extralight text-base md:text-[2rem] md:leading-[40px] dark:text-neutral-200 py-4">
                    A Friend in Every Hug, Comfort in Every Word.
                    </div>
                    <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
                    About Us
                    </button>
                </TextMotion>
            </section>
        </>
    )
}