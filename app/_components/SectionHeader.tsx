function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="flex py-8 justify-center max-w-[40rem] mx-auto  text-green-800  font-medium text-3xl border-b border-b-green-700"
      style={{ textShadow: "0px 0px 10px rgba(22, 101, 52, 0.4)" }}
    >
      {children}
    </h2>
  );
}

export default SectionHeader;
