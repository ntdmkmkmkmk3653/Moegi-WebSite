import Image from "next/image";
import Link from "next/link";
import { Button } from "./components/button";

export default function Header() {
    return (
        <header className="flex items-center justify-between h-20.5 relative border-b-2 border-[#ffd068] bg-white/80 dark:bg-black/80 backdrop-blur-md">
            <div className="p-5 h-20 bg-[#12523c] " id="logo">
                <Link href="/">
                <Image
                    className="!object-contain !relative transition-opacity hover:opacity-60"
                    src="/moegikai_logo-text_mono-wh.svg"
                    alt="Moegikai logo"
                    fill
                />
                </Link>
            </div>
            <div className="p-5 !pr-8" id="nav">
                <div className="flex [&>*]:space-x-3">
                <ul className="mr-4 my-auto [&>*]:pl-3 [&>*]:[&:not(:first-child)]:border-l font-bold text-[#12523c] dark:text-white [&>*]:transition-opacity [&>*]:hover:opacity-60">
                    <Link href="/greet">ごあいさつ</Link>
                    <Link href="/about">もえぎ会とは</Link>
                    <Link href="/report">活動報告</Link>
                    <Link href="/gallery">卒業生ギャラリー</Link>
                </ul>
                    <Link href="/contact" className="transition-opacity hover:opacity-60">
                        <Button variant="moegi_2-fill" className="px-4 py-2 rounded-md font-semibold">お問い合わせ</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}