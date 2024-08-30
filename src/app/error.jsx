"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons/faTriangleExclamation";

export const metadata =  {
    title: "500 | Server Error"
}

export default function Custom404() {
    return (
        <>
            <div className="blog">
                <div id="cComingSoon">500 | Server Error <FontAwesomeIcon icon={faTriangleExclamation} /></div>
            </div>
        </>
    )
}