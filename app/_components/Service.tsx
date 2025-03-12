import Image from "next/image";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import first from "@/public/Service/1.jpg";
import second from "@/public/Service/2.jpg";
import third from "@/public/Service/3.jpg";
import fourth from "@/public/Service/4.jpg";
import fifth from "@/public/Service/5.jpg";
import sixth from "@/public/Service/6.jpg";
import Link from "next/link";

function Service() {
  const images = [first, second, third, fourth, fifth, sixth] as const;

  return (
    <Section className="bg-gray-100" idName="servisi">
      <SectionHeader>ჩვენი სერვისი</SectionHeader>

      <h3 className="flex justify-center text-lg tracking-tighter font-extrabold mb-10 mt-8">
        ჩვენ მოგაწვდით იმ ჩითილს, რომელიც გსურთ, როდესაც გსურთ და როგორი
        ფორმითაც გსურთ!
      </h3>

      <div className="text-[0.925rem] tracking-[-0.03em] leading-6">
        <p>
          „ევროპული ჩითილები“ დასპეციალიზებულია მხოლოდ მაღალხარისხიანი ჩითილების
          მოყვანაზე. ასორტიმენტშია – წიწაკა, პომიდორი, კიტრი, სალათა, ნესვი,
          საზამთრო, ბადრიჯანი, ბროკოლი, ყვავილოვანი კომბოსტო და მრავალი სხვა.
        </p>
        <p>
          გამოგიყვანთ პრაქტიკულად ნებისმიერი ბოსტნეულის ჩითილს. ფასი
          დამოკიდებულია მცენარის სახეობაზე, მოყვანის პერიოდზე, კასეტის ზომაზე და
          რიგ სხვა დეტალზე.
        </p>
        <p>
          ჩითილებს ვზრდით წინასწარი შეკვეთით, მაგრამ მაის-ივნისში გვაქვს
          გასაყიდად გამზადებული ჩითილებიც.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-5">
        {images.map((img, index) => (
          <Link href={img.src} key={index} className="relative block">
            <div
              className={`relative w-full ${
                index === 0 || index === 1 || index === 2 ? "aspect-[3/4]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={img}
                alt="Image of plants"
                fill
                className={`rounded-lg object-cover ${index === 2 ? "object-[center_55%]" : "object-top"}`}
              />
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

export default Service;