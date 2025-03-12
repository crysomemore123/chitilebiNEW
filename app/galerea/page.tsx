import SectionHeader from "../_components/SectionHeader";
import Gallery from "./Gallery";

function GalereaPage() {
  return (
    <section className="mx-auto max-w-[70rem]">
      <SectionHeader>გალერეა</SectionHeader>
      <Gallery section="first" />

      <SectionHeader>საჩითილე მეურნეობა</SectionHeader>
      <Gallery section="second" />

      <SectionHeader>ყვავილები</SectionHeader>
      <Gallery section="third" />
    </section>
  );
}

export default GalereaPage;
