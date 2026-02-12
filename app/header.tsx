import Image from "next/image";
import Link from "next/link";
import { Button } from "./components/button";

export default function Header() {
    return (
        <header className="flex items-center justify-between h-25.5 relative border-b-2 border-[#ffd068] bg-white/90 backdrop-blur-md">
            <div className="p-6.5 h-25 bg-[#12523c] " id="logo">
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
                <div className="flex pb-3 pr-1 [&>*]:space-x-3 justify-end">
                <ul className="my-auto [&>*]:pl-1 text-sm text-[#12523c] [&>*]:transition-opacity [&>*]:hover:opacity-60">
                    <Link href="https://www.pen-kanagawa.ed.jp/kanagawasogosangyo-h/zennichi/seikatsu/bunkabu/electronics.html" target="_blank">部活ホームページ（外部）</Link>
                    <Link href="/">お知らせ</Link>
                    <Link href="/">会員様向けページ</Link>
                </ul>
                </div>
                <div className="flex [&>*]:space-x-3">
                <ul className="mr-4 my-auto [&>*]:pl-3 [&>*]:[&:not(:first-child)]:border-l font-bold text-[#12523c] [&>*]:transition-opacity [&>*]:hover:opacity-60">
                    <Link href="/greet">ごあいさつ</Link>
                    <Link href="/about">もえぎ会とは</Link>
                    <Link href="/report">活動報告</Link>
                    <Link href="/gallery">卒業生ギャラリー</Link>
                </ul>
                    <Button variant="moegi_1-fill" className="!px-3 !py-1.5 rounded-md font-semibold"><Link href="/contact" className="">お問い合わせ</Link></Button>
                </div>
            </div>
        </header>
    );
}