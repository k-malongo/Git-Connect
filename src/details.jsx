import React from "react";

export default function CardComponent() {
    return (
        <div className="w-full p-4 shadow-md lg:max-w-1xl bg-white drop-shadow-lg rounded-xl grid grid-cols-4 gap-4">
            <div>
                <img src="https://avatars.githubusercontent.com/u/36006542?v=4" alt="img" className="rounded-full h-28 w-28 ml-4" />
            </div>
            <div className="space-y-2 col-span-3">
                <h3 className="text-2xl font-semibold">
                    React Tailwind Card Title
                </h3>
                <p className="text-gray-600">
                    react with tailwind css simple card It is a long established
                    fact that a reader will be distracted.
                </p>
            </div>

        </div>
    );
}