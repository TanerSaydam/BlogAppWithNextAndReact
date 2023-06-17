import Link from "next/link";

export default function Layout({children}){
    return(
        <>
        <nav>
        <h1>Logo</h1>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About Me</Link>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
        </nav>
        {children}
        </>
    )
}