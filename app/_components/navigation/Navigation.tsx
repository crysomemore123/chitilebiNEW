"use client";

import Image from "next/image";
import Link from "next/link"; // ✅ Make sure this import is here
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

import FlexBox from "../FlexBox";
import NavText from "./NavText";
import logo from "@/public/logo.png";

function Navigation() {
  const [isPhoneNavOpen, setIsPhoneNavOpen] = useState(false);

  return (
    <>
      <nav className="mx-auto px-10 w-full lg:px-10 xl:px-36 2xl:px-48 flex py-2 font-bold tracking-tighter border-b border-green-700">
        <Link href="/">
          <Image
            src={logo}
            alt="ევროპული ჩითილების ლოგო"
            className="mr-auto w-[150px] xs:w-[220px] 2xl:w-[300px]"
          />
        </Link>

        <FlexBox className="text-green-800 items-center hidden lg:flex">
          <Link href="/#servisi">
            <NavText>ჩვენი სერვისი</NavText>
          </Link>
          <Link href="/#chven">
            <NavText>ჩვენ შესახებ</NavText>
          </Link>
          <Link href="/rchevebi-mebostneebs">
            <NavText>რჩევები მებოსტნეებს</NavText>
          </Link>
          <Link href="/galerea">
            <NavText>გალერეა</NavText>
          </Link>
          <Link href="/kontaqti">
            <NavText>კონტაქტი</NavText>
          </Link>
        </FlexBox>

        <button className="lg:hidden" onClick={() => setIsPhoneNavOpen(!isPhoneNavOpen)}>
          <Icon
            icon="mingcute:menu-fill"
            height={40}
            className="bg-green-700/25 text-green-700 p-1"
          />
        </button>
      </nav>

      <div className="absolute right-0 top-24 z-20">
        <FlexBox
          className={`text-green-800 flex-col items-center lg:hidden bg-gray-200/90 ${
            isPhoneNavOpen ? "flex" : "hidden"
          }`}
        >
          <Link href="/#servisi" onClick={() => setIsPhoneNavOpen(false)}>
            <NavText>ჩვენი სერვისი</NavText>
          </Link>
          <Link href="/#chven" onClick={() => setIsPhoneNavOpen(false)}>
            <NavText>ჩვენ შესახებ</NavText>
          </Link>
          <Link href="/rchevebi-mebostneebs" onClick={() => setIsPhoneNavOpen(false)}>
            <NavText>რჩევები მებოსტნეებს</NavText>
          </Link>
          <Link href="/galerea" onClick={() => setIsPhoneNavOpen(false)}>
            <NavText>გალერეა</NavText>
          </Link>
          <Link href="/kontaqti" onClick={() => setIsPhoneNavOpen(false)}>
            <NavText>კონტაქტი</NavText>
          </Link>
        </FlexBox>
      </div>
    </>
  );
}

export default Navigation;
