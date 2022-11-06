'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function Search() {
    const [search, setSearch] = useState('');
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch('');
        router.push(`/search?q=${search}`);
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type='text'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search here...'
            />
            <button
                type='submit'
                className='bg-blue-500 text-white font-bold py-2 px-4 rounded-lg'>
                Search
            </button>
        </form>
    );
}
