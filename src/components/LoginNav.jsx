"use client";

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

export default function LoginNav() {
    const { data: session } = useSession();
    const navbarRef = useRef(null);
    const wrapperRef = useRef(null);
    const barsIconRef = useRef(null);
    const closeIconRef = useRef(null);

    function openWrapper() {
        wrapperRef.current.style.display = 'flex';
        closeIconRef.current.style.display = 'flex';
        barsIconRef.current.style.display = 'none';
        navbarRef.current.style.zIndex = '3';
    }

    function closeWrapper() {
        wrapperRef.current.style.display = 'none';
        closeIconRef.current.style.display = 'none';
        barsIconRef.current.style.display = 'flex';
    }

    function resizeWindow() {
        wrapperRef.current.style.display = 'none';
        closeIconRef.current.style.display = 'none';
        barsIconRef.current.style.display = 'flex';
        const windowWidth = window.innerWidth;
        if (windowWidth >= 992) {
            barsIconRef.current.style.display = 'none';
        } else {
            barsIconRef.current.style.display = 'flex';
        }
    }

    useEffect(() => {
        window.addEventListener('resize', resizeWindow);
        return () => window.removeEventListener('resize', resizeWindow); // Cleanup on unmount
    }, []);

    return (
        <>
            <section>
                <header className="relative pt-[2rem] pr-0 pb-[2rem] pl-0">
                    <div className="fixed flex flex-wrap justify-between w-[100%] items-center z-[100]" ref={navbarRef}>
                        <div className="text-2xl ml-[3rem]">
                            <Link href="/" className="mo:text-[2.5rem] mi:text-[1.8rem]">kisaan</Link>
                        </div>
                        <ul className="relative flex gap-12 mo:hidden items-center">
                            <li><Link href="/#about" className="relative">About</Link></li>
                            <li><Link href="/demo" className="relative">Demo</Link></li>
                            <li><Link href="/merchandise" className="relative">Merchandise</Link></li>
                            <li><Link href="/contact" className="relative">Contact</Link></li>
                            <li>
                                <Link href="/login" className="relative mr-[3.6rem] login">
                                    {session && session.user ? session.user.name.split(" ")[0] : "Login"}
                                </Link>
                            </li>
                        </ul>
                        <FontAwesomeIcon icon={faBars} id="bars" onClick={() => openWrapper()} ref={barsIconRef}
                            className="color-primary cursor-pointer mr-[4rem] hidden mo:block mo:text-5xl mi:text-3xl" />
                        
                        <FontAwesomeIcon icon={faXmark} onClick={() => closeWrapper()} ref={closeIconRef}
                            className="hidden text-primary text-[3.3rem] border-4 rounded-2xl mr-12 px-5" />
                    </div>
                </header>
                <div ref={wrapperRef}
                    className="hidden flex-col top-[0%] fixed w-[100%] h-screen
                                p-13-percent backdrop-blur-[15px]
                                text-center items-center z-[1]">
                    <ul className="gap-8 flex flex-col">
                        <li><Link className="text-[2.3rem] mx:text-[1.9rem]" href="/">About</Link></li>
                        <li><Link className="text-[2.3rem] mx:text-[1.9rem]" href="/demo">Demo</Link></li>
                        <li><Link className="text-[2.3rem] mx:text-[1.9rem]" href="/merchandise">Merchandise</Link></li>
                        <li><Link className="text-[2.3rem] mx:text-[1.9rem]" href="/contact">Contact</Link></li>
                        <li><Link className="text-[2.3rem] mx:text-[1.9rem] login" href="/login">{session && session.user ? session.user.name.split(" ")[0] : "Login"}</Link></li>
                    </ul>
                </div>
            </section>
        </>
    );
}
