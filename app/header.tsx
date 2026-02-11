import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center justify-between h-21 relative bg-[#12523c] border-b-4 border-[#94ab29]">
            <div className="p-5 h-20" id="logo">
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
                <ul className="flex space-x-4 text-white [&>*]:transition-opacity [&>*]:hover:opacity-60">
                    <Link href="/greet">ごあいさつ</Link>
                    <Link href="/about">もえぎ会とは</Link>
                </ul>
            </div>
        </header>
    );
}