import Link from "next/link";

export default function Header() {
    return (
        <div className="p-5 bg-blue-500">
            <Link href="/" className="m-1 px-2 py-1 bg-white text-blue-500 rounded-lg">Home</Link>

            <Link href="/todos" className="m-1 px-2 py-1 bg-white text-blue-500 rounded-lg">Todos</Link>
            <Link href="/search" className="m-1 px-2 py-1 bg-white text-blue-500 rounded-lg">Search</Link>
        </div>
    );
}
