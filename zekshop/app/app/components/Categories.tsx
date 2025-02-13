import For from "./Category";

export default function Categories() {
  return (
    <section className="py-20 bg-[#000000] text-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-10">
          <For text="FOR HER" imageSrc="/11.png" event={event as any} />
          <For text="FOR HIM" imageSrc="/12.png" event={event as any} />
          <For text="FOR COUPLES" imageSrc="/22.png" event={event as any} />
          <For text="FOR MASSAGE" imageSrc="/24.png" event={event as any} />
          <For text="FOR TOYS" imageSrc="/25.png" event={event as any} />
        </div>
      </div>
    </section>
  );
}
