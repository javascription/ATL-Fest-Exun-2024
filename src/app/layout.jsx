import { Poppins } from "next/font/google";
import './static/fortawesome.css' // remove unused classes after prod
import './globals.css';

import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from '@fortawesome/free-regular-svg-icons/faComment';
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

// Components

import dynamic from 'next/dynamic';
import SessionWrapper from "../components/SessionWrapper";
import LoginNav from '@/components/LoginNav'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', "900"]
});

// Metadata - SEO

export const metadata = {
    title: "Kisaan",
    description: "ATL TinkerFest Hackathon Submission by Exun (Made by: Gauransh Saini)",
};

export default function RootLayout({ children }) {
  return (
    
    <SessionWrapper>
      <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
        <body className={`${poppins.className} m-0 p-0 w-screen h-screen scroll-smooth overflow-x-hidden bg-background`}>
          <LoginNav />
            <div className="text-white fixed left-6 top-[4.5rem] z-20 text-[0.9rem]">
                <div className="bg-black rounded-full py-2 px-3 mb-2"><FontAwesomeIcon icon={faComment} /></div>
                <div className="bg-black rounded-full py-2 px-3 "><FontAwesomeIcon icon={faPhone} /></div>
            </div>
            <div className="fixed left-6 top-[22rem] z-20 flex flex-col gap-4 justify-center items-center">
                <div className="flex items-center justify-center w-5 h-5 border-2 border-black rounded-full">
                    <Image src={`/dot.svg`} width={6} height={6} aria-hidden="true" />
                </div>
                 
                
                <Image src={`/dot.svg`} width={6} height={6} aria-hidden="true"/> 
                <Image src={`/dot.svg`} width={6} height={6} aria-hidden="true"/> 
                <Image src={`/dot.svg`} width={6} height={6} aria-hidden="true"/> 
                <Image src={`/dot.svg`} width={6} height={6} aria-hidden="true"/> 
                <Image src={`/dot.svg`} width={6} height={6} aria-hidden="true"/> 
                <Image src={`/dot.svg`} width={6} height={6} aria-hidden="true"/> 
                <Image src={`/dot.svg`} width={6} height={6} aria-hidden="true"/> 
                <Image src={`/dot.svg`} width={6} height={6} aria-hidden="true"/> 
            </div>

          {children}
          </body>
      </html>
    </SessionWrapper>
  );
}
