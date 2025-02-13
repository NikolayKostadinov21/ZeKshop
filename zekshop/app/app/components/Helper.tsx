import For from "./For";

export default function Helper() {
  return (
    <section className="py-20 bg-[#000000] text-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-10">
          <For text="FOR HER" imageSrc="/11.png" />
          <For text="FOR HIM" imageSrc="/12.png" />
          <For text="FOR COUPLES" imageSrc="/22.png" />
          <For text="FOR MASSAGE" imageSrc="/24.png" />
          <For text="FOR TOYS" imageSrc="/25.png" />
        </div>
      </div>
    </section>
  );
}
