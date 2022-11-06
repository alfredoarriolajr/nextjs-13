import Search from './Search';

export default function RootLayout({ children }) {
    return (
        <main className='flex divide-x-2 p-5 space-x-4'>
            <div>
                <h1>Search</h1>
            </div>
            <div className='flex-1 pl-5'>
                <Search />
                <div>{children}</div>
            </div>
        </main>
    );
}
