"use client"

import { signIn, signOut, useSession } from "next-auth/react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from "@fortawesome/free-brands-svg-icons/faGoogle";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function Login () {
    const {data: session} = useSession();
    return (
        <>
            <section className="absolute top-0 h-screen w-screen flex items-center justify-center flex-col">
                {session ? (
                    <div className="flex flex-col items-center justify-center">
                        <Image src={session.user.image} width={150} height={150} className="rounded-full" alt="UserProfile Picture" />
                        <br />
                        <h1 className={`text-3xl ${inter.className} font-bold mo:text-2xl`}>{session.user?.name}</h1>
                        <br />
                        <button onClick={() => signOut({callbackUrl: '/'})}
                            className="border-2 border-[#ffffff34] text-[1.3rem] bg-[#2b3137] text-primary px-4 py-2 rounded-lg transition-all duration-300 hover:bg-[#d42e2e] hover:shadow-lg"
                        >Log Out</button>
                    </div>
                   
                ) : (
                    
                    <div className="flex items-center justify-center flex-col border-2 border-[#ffffff34] w-[50%] h-[60%] relative bg-[#02070f] rounded-[20px] font-medium">
                        <div className={`${inter.className} text-5xl absolute top-[2rem]`}><span className="gradient-text">Sign In!</span></div>
                        <button onClick={() => signIn('github')}
                            className="w-[70%] h-[15%] border-2 border-[#ffffff34] text-[1.3rem]
                            mt-20 bg-[#2b3137] text-primary px-4 py-2 rounded-lg transition-all duration-300 hover:bg-[#0f1214] hover:shadow-lg"
                        >
                            <FontAwesomeIcon icon={faGithub}/> Continue with GitHub
                        </button>
                        <button onClick={() => signIn('google')}
                            className="w-[70%] h-[15%] border-2 text-[1.3rem]
                            mt-8 bg-[var(--text)] border-[#00000034] text-secondary px-4 py-2 rounded-lg transition-all duration-300 hover:bg-[var(--secondary)] hover:border-primary hover:text-primary hover:shadow-lg"
                        >
                            <FontAwesomeIcon icon={faGoogle}/> Continue with Google
                        </button>
                        
                    </div>
                    
                
                    )
                }
            </section>
        </>
    )
}