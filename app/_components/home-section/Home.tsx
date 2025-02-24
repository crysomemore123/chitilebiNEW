import Image from "next/image";
import afterNav from "@/public/afterNav.webp";

function Home() {
  return (
    <section>
      <div className="relative md:hidden lg:block h-[40rem] sm:h-[78.2rem]">
        <Image
          src={afterNav}
          alt="image of plants"
          fill
          className="-z-20 w-full md:h-[782px] object-cover brightness-75"
        />
        <h1 className="text-white text-center sm:leading-[5rem] font-bold xss:text-nowrap xss:text-lg xs:text-[1.3rem] sm:text-3xl md:text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="block mb-4">მაღალხარისხიანი ჩითილები</span>
          თქვენი უხვი მოსავლის წინაპირობაა
        </h1>
      </div>

      <div className="xss:mx-5 px-5 sm:mx-10 sm:px-10 md:mx-20 md:px-20 my-14 py-14 shadow-bottom-right flex flex-col gap-5">
        <h2 className="font-bold text-slate-800 text-lg">
          „ევროპული ჩითილები“ გთავაზობთ ბოსტნეულის და ყვავილების საუკეთესო ჩითილებს.
        </h2>
        <p className="text-sm leading-relaxed">
          ჩვენი უპირატესობაა - ევროპული ტექნოლოგია და მეთოდიკა, სპეციალიზებული
          საჩითილე სათბურები, მაღალკვალიფიციური სპეციალისტების გუნდი, მრავალწლიანი გამოცდილება,
          მხოლოდ უმაღლესი ხარისხის ევროპული დანადგარები და მასალები.
        </p>
      </div>
    </section>
  );
}

export default Home;