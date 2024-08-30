"use client"
import TextMotion from "./ui/TextMotion";
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons/faArrowLeftLong";
import { faComment } from '@fortawesome/free-regular-svg-icons/faComment';
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";

export default function Hero() {
    return (
        <div className="absolute top-0 left-0  flex flex-col items-center justify-center px-4 z-10 bg-white w-[50vw] h-screen">
            
            <TextMotion className="flex flex-col">
                <div className="mi:text-3xl text-4xl md:text-7xl font-bold dark:text-white text-center">
                720+ <span className="text-primary">Sown</span>
                </div>
                <div className="mi:text-3xl text-4xl md:text-7xl font-[900] dark:text-white text-center py-4">
                yesterday.
                </div>
                <div className="relative left-0 flex">
                    <button className="bg-black dark:bg-white rounded-full w-16 text-white dark:text-black px-4 py-2">
                        <FontAwesomeIcon icon={faArrowLeftLong} />
                    </button>
                    <div className="px-4 flex flex-col font-bold">
                        <div className="text-primary">Alert!</div>
                        <div>3x than January!</div>
                    </div>
                </div>
            </TextMotion>
            <img src="/harvesting.png" className="absolute top-[30rem] left-[9rem] transform scale-[1.3]" />
            <img src="/circle.svg" className="absolute top-[8rem] left-[29rem] transform scale-[0.9]" />
            <img src="/star.svg" className="absolute top-[13rem] left-[34rem]"/>
        </div>
    )
}