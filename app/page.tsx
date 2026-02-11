"use client";

import Image from "next/image";
import { useState } from "react";
import Header from "./header";

export default function Home() {
  return (
    <div>
      <main>
        <section className="KeyVisual">
          <div className="relative w-full h-128">
            <Image
              src="/top.jpg"
              alt="Key Visual"
              fill
              className="object-cover"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
