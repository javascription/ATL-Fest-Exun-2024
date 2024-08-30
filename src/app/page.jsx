import dynamic from 'next/dynamic';

import Hero from '@/components/Hero';
const About = dynamic(() => import('@/components/About'));


export default function Home() {
    return (
        <main>
            <Hero />
            <About />
        </main>
    );
}
