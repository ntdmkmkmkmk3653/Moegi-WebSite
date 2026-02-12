"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./components/button";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-10">

        <section id="KeyVisual" className="pl-50">
          <div className="relative w-full h-192">
            <div className="relative w-full h-full overflow-hidden rounded-l-[40px]">
              <Image
                src="/top.jpg"
                alt="Key Visual"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-10 -left-50 z-5 bg-[#12523c] p-4 px-5 pl-8 rounded-r-3xl">
              <h1 className="mt-2 text-4xl font-bold text-white">もえぎ会が発足しました。</h1>
              <p className="mt-1 text-sm text-gray-300">2026/02/11</p>
              <p className="mt-2 text-md text-white">神奈川総合産業高等学校 エレクトロニクス部 OB/OG会（もえぎ会）が発足しました。<br/>発足に際し、会長からのあいさつを掲載しております。</p>
              <Button variant="kuchinashi-fill" className="mt-3 mb-1 mr-4 rounded-md font-semibold"><Link href="/" className="">会長あいさつ</Link></Button>
              <Button variant="kuchinashi-border" className="mt-3 mb-1 rounded-md font-semibold"><Link href="/" className="">もえぎ会の由来</Link></Button>
            </div>
          </div>
        </section>

        <section id="news">
          <span className="flex justify-center text-sm text-gray-500">News</span>
          <span className="mt-2 flex justify-center text-5xl font-bold">ニュース</span>
        </section>

      </main>
    </div>
  );
}
