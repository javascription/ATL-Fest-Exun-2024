import Image from 'next/image';
import Link from 'next/link'

export default function Card({ image, alt, title, description, badge }) {
    return (
        <div className="relative bg-gray-900 border border-gray-700 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
            {badge && (
                <div className="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200 w-6 h-6 text-center">
                    {badge}
                </div>
            )}
            <div className="p-2 flex justify-center">
                <Link href="/cart">
                    <Image
                        src={`/merch/${image}.png`}
                        alt={alt}
                        width={300}
                        height={300}
                        className="w-[7rem] h-[7rem]"
                        loading='lazy'
                    />
                </Link>
            </div>
            <div className="px-4 pb-3">
                <div>
                    <Link href="/cart">
                        <h5 className="text-xl font-semibold tracking-tight hover:text-violet-300">
                            {title}
                        </h5>
                    </Link>
                    <p className="antialiased text-gray-400 text-sm break-all">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
