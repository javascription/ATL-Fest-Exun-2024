import { Poppins } from "next/font/google";
import './static/fortawesome.css' // remove unused classes after prod
import './globals.css';

// Components

import dynamic from 'next/dynamic';
import SessionWrapper from "../components/SessionWrapper";
import LoginNav from '@/components/LoginNav'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', "900"]
});

// Metadata - SEO

const url = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
    title: "kisaan",
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
          {children}
          </body>
      </html>
    </SessionWrapper>
  );
}
