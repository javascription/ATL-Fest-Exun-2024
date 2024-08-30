import dynamic from 'next/dynamic';
import Image from 'next/image'

import Hero from '@/components/Hero';
// const About = dynamic(() => import('@/components/About'));


export default function Home() {
    return (
        <main className="top-0 absolute h-screen w-screen flex flex-row items-center justify-center">
            <Hero />
            <Image
                src="/bg.png"
                alt="Background"
                layout="fill"
                objectFit="contain"
                objectPosition='right center'
                className="right-0"
            />
        </main>
    );
}
