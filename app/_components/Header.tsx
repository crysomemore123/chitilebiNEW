import { Icon } from "@iconify/react/dist/iconify.js";
import FlexBox from "./FlexBox";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-black  text-white justify-between px-32 py-5 text-lg font-medium hidden lg:flex">
      <FlexBox className="gap-6">
        <FlexBox className="justify-center items-center gap-3 hover:text-yellow-400">
          <Icon icon="fa-solid:phone" width={15} height={15} />
          <p>555 000 975</p>
        </FlexBox>

        <FlexBox className="justify-center items-center gap-3 hover:text-yellow-400">
          <Icon icon="flowbite:map-pin-alt-solid" />
          <p className="text-base">ნატახტარი, მცხეთის რაიონი</p>
        </FlexBox>
      </FlexBox>

      <FlexBox className="gap-5 justify-center items-center ">
        <Link target="_blank" href="https://www.facebook.com/evropulichitilebi">
          <Icon
            icon="basil:facebook-solid"
            width={40}
            height={40}
            className="hover:text-yellow-400 transition duration-300 hover:scale-110"
          />
        </Link>
        <Link target="_blank" href="https://www.facebook.com/evropulichitilebi">
          <Icon
            icon="mdi:instagram"
            width={30}
            height={30}
            className="hover:text-yellow-400 transition duration-300 hover:scale-110"
          />
        </Link>
      </FlexBox>
    </header>
  );
}

export default Header;
