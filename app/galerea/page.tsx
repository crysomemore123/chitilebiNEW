import SectionHeader from "../_components/SectionHeader";
import Gallery from "./Gallery";

function GalereaPage() {
  return (
    <section className="mx-auto max-w-[70rem]">
      {/* First Title */}
      <SectionHeader>გალერეა</SectionHeader>
      <Gallery section="first" />

      {/* Second Title (Correct Images Displayed) */}
      <SectionHeader>საჩითილე მეურნეობა</SectionHeader>
      <Gallery section="second" />
    </section>
  );
}

export default GalereaPage;
