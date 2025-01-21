import Link from 'next/link'
import React from 'react';
import { FilmIcon } from 'lucide-react';

const Header = () => {
    return (
        <header className="flex flex-row gap-2 py-5 px-5 bg-slate-900 text-white items-center">
            <FilmIcon />
            <Link href="/" className="text-xl font-bold">
                <h1>Our Favourite Movies</h1>
            </Link>{' '}

            <Link href="/add" className="text-xl font-light">
                Add A Movie
            </Link>
        </header>
    )
}

export default Header
