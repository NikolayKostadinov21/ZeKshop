import Category from "./Category";

export default function Categories() {
  return (
    <section className="py-20 bg-[#000000] text-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-10">
          <Category text="FOR HER" imageSrc="/11.png" />
          <Category text="FOR HIM" imageSrc="/12.png" />
          <Category text="FOR COUPLES" imageSrc="/22.png" />
          <Category text="FOR MASSAGE" imageSrc="/24.png" />
          <Category text="FOR TOYS" imageSrc="/25.png" />
        </div>
      </div>
    </section>
  );
}
