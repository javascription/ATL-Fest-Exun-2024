"use client"

import Card from './Card'

export default function Merch() {
    const items = [
        {
            image: 'black tshirt',
            alt: 'Black Tee Image',
            title: 'Black Tee',
            description: '$9.99',
            badge: '5',
        },
        {
            image: 'cup',
            alt: 'Buddy Cup Image',
            title: 'Buddy Cup',
            description: '$3.99',
            badge: '17',
        },
        {
            image: 'Hoodie1',
            alt: 'Hoodie Image',
            title: 'Teddy Hoodie',
            description: '$19.99',
            badge: '12',
        },
        {
            image: 'Hoodie2',
            alt: 'Limited TeddyHoodie Image',
            title: 'Limited TeddyHoodie',
            description: '$24.99',
            badge: '3',
        },
        {
            image: 'mug',
            alt: 'TeddyCup',
            title: 'Teddy Cup',
            description: '$6.99',
            badge: '10',
        },
        {
            image: 'plasticbottle',
            alt: "Water Bottle Image",
            title: 'Buddy Bottle',
            description: '$9.99',
            badge: '1',
        },
        {
            image: 'SpiralNotebook',
            alt: 'Spiral Notebook Image',
            title: 'Spiral Notebook',
            description: '$4.99',
            badge: '9',
        },
    ];

    return (
        <div className="relative top-10 w-screen flex justify-center items-center">
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-2 xl:p-5">
                {items.map((item, index) => (
                    <Card
                        key={index}
                        image={item.image}
                        alt={item.alt}
                        title={item.title}
                        description={item.description}
                        badge={item.badge}
                    />
                ))}
            </div>
        </div>
    );
}
