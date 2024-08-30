"use client";

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
                <header className="relative pt-[2rem] pr-0 pb-[2rem] pl-0 bg-[#ffffff3d]">
                    <div className="bg-[#ffffff3d] fixed flex flex-wrap justify-between w-[100%] items-center z-[100]" ref={navbarRef}>
                        <div className="text-2xl ml-[3rem]">
                            <Link href="/" className=" ml-[6rem] mo:text-[2.5rem] mi:text-[1.8rem] flex flex-row items-center text-primary font-[900]">
                                <Image alt="logo" width={26.7558} height={55.199999999999996} src="/logo.svg"/>
                                Kisaan
                            </Link>
                        </div>
                        <ul className="relative flex gap-12 mo:hidden items-center">
                            <li><Link href="/forecast" className="relative">Weather</Link></li>
                            <li><Link href="/track" className="relative">Learn</Link></li>
                            <li><Link href="/dashboard" className="relative">Dashboard</Link></li>
                            <li><Link href="/contact" className="relative">Contact</Link></li>
                            <li>
                                <Link href="/login" className="relative mr-[3.6rem] login">
                                    {session && session.user ? session.user.name.split(" ")[0] : "Login"}
                                </Link>
                            </li>
                        </ul>
                        <FontAwesomeIcon icon={faBars} id="bars" onClick={() => openWrapper()} ref={barsIconRef}
                            className="cursor-pointer mr-[4rem] hidden mo:block mo:text-5xl mi:text-3xl" />
                        
                        <FontAwesomeIcon icon={faXmark} onClick={() => closeWrapper()} ref={closeIconRef}
                            className="hidden text-[3.3rem] border-4 rounded-2xl mr-12 px-5" />
                    </div>
                </header>
                <div ref={wrapperRef}
                    className="hidden flex-col top-[0%] fixed w-[100%] h-screen
                                p-13-percent backdrop-blur-[15px]
                                text-center items-center z-[1]">
                    <ul className="gap-8 flex flex-col">
                        <li><Link className="text-[2.3rem] mx:text-[1.9rem]" href="/forecast">Weather</Link></li>
                        <li><Link className="text-[2.3rem] mx:text-[1.9rem]" href="/track">Learn</Link></li>
                        <li><Link className="text-[2.3rem] mx:text-[1.9rem]" href="/dashboard">Dashboard</Link></li>
                        <li><Link className="text-[2.3rem] mx:text-[1.9rem]" href="/contact">Contact</Link></li>
                        <li><Link className="text-[2.3rem] mx:text-[1.9rem] login" href="/login">{session && session.user ? session.user.name.split(" ")[0] : "Login"}</Link></li>
                    </ul>
                </div>
            </section>
        </>
    );
}
