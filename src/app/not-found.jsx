"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

export const metadata =  {
    title: "404 | NotFound"
}

export default function Custom404() {
    return (
        <>
            <div className="blog">
                <div id="cComingSoon">404 | Not Found <FontAwesomeIcon icon={faMagnifyingGlass} id="search"/></div>
            </div>
        </>
    )
}