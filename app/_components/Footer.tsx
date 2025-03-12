import Image from "next/image";
import logo from "@/public/logo.png";
import FlexBox from "./FlexBox";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gray-300 pb-5 pt-3 sm:pb-10 sm:pt-8">
      <FlexBox className="pb-1 mx-5 xs:mx-10 sm:mx-20 border-b-2 justify-between border-green-700 flex-col gap-5 lg:gap-0 lg:flex-row">
        <FlexBox className="justify-between flex-col sm:flex-row lg:gap-20 xl:gap-48">
          <Image src={logo} alt="ევროპული ჩითილების ლოგო" width={350} />

          <FlexBox className=" sm:justify-center items-center gap-5">
            <Link
              target="_blank"
              href="https://www.facebook.com/evropulichitilebi"
            >
              <Icon
                icon="basil:facebook-solid"
                width={30}
                height={30}
                className=" text-green-700"
              />
            </Link>

            <Link
              target="_blank"
              href="https://www.facebook.com/evropulichitilebi"
            >
              <Icon
                icon="mdi:instagram"
                width={250}
                height={25}
                className=" text-green-700"
              />
            </Link>
          </FlexBox>
        </FlexBox>

        <FlexBox className="gap-6 flex-col font-semibold text-lg">
          <FlexBox className=" items-center gap-6">
            <Icon
              icon="f7:phone-circle-fill"
              width={30}
              height={30}
              className="text-green-700 cursor-pointer"
            />
            <FlexBox className="justify-center items-center gap-3 hover:text-green-700">
              <Icon
                icon="fa-solid:phone-volume"
                width={30}
                height={30}
                className="text-green-700"
              />
              <p>555 000 975</p>
            </FlexBox>
          </FlexBox>

          <FlexBox className="lg:justify-center items-center gap-3 hover:text-green-700">
            <Icon
              icon="flowbite:map-pin-alt-solid"
              className="text-green-700"
              width={30}
              height={30}
            />
            <p>ნატახტარი, მცხეთის რაიონი</p>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </footer>
  );
}

export default Footer;
