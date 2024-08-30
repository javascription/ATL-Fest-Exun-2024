"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

export const metadata =  {
    title: "500 | Server Error"
}

export default function Custom404() {
    return (
        <>
            <div className="blog">
                <div id="cComingSoon">500 | Server Error <FontAwesomeIcon icon={faMagnifyingGlass} id="search"/></div>
            </div>
        </>
    )
}