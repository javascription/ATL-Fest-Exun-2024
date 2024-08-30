import Heading from "./ui/Heading";
import TextMotion from "./ui/TextMotion";

export default function About() {
    return (
        <>
            <div className="teddy top-[39.9rem] absolute w-screen h-[35rem]" id="about">
                <TextMotion className="flex justify-center items-center">
                    <Heading className="absolute top-[5rem] sm:top-[6rem] md:top-[7rem] mi:text-5xl text-6xl sm:text-7xl md:text-8xl">About</Heading>
                    <p className="p-about font-normal mi:text-sm sm:text-base md:text-lg text-center text-neutral-300 mx-auto w-80% 
                    absolute top-[10rem] sm:top-[11rem] md:top-[15rem]">
                        NuxeCorps Private Limited is a multinational company dedicated to pioneering innovative solutions that enhance the quality of life for individuals worldwide.
                        With a strong focus on leveraging advanced technology for societal benefit, NuxeCorps has a track record of developing products that address real-world challenges.
                        Our mission is to create a better, more compassionate world through technology-driven solutions that cater to the needs of the most vulnerable among us, particularly children undergoing medical treatment.
                    </p>
                </TextMotion>
            </div>
        </>
    )
}