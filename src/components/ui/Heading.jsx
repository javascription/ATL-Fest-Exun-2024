import { Inter } from "next/font/google"

const inter = Inter({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export default function Heading({children, className}) {
    return <div className={`${inter.className} text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 ${className}`}>{children}</div>
}