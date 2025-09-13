import React from "react";
import Link from "next/link";
import { User, Settings, Pi } from "lucide-react";

function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4 px-8 bg-gray-100 border-b border-gray-300 text-black">
            <div className="flex gap-4">
                <Link href="/settings" className="group relative">
                    <Settings size={24} className="cursor-pointer"/>
                </Link>
            </div>
            <div className="font-bold text-3xl">
                <Link href="/" className="group relative">
                    <span className="cursor-pointer">DevGPA</span>
                </Link>
            </div>
            <div className="flex gap-4">
                <Link href="/profile" className="group relative">
                    <User size={24} className="cursor-pointer"/>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;