import Image from "next/image";

export default function TitleSection() {
  return (
    <section className="flex gap-2 justify-between">
      <div className="w-1/2 flex justify-center items-center">
        <div className=" max-w-md ">
          <div className="slide-in-right animate-slide-in-right">
            <blockquote className="text-gray-700 text-lg font-semibold">
              <p className="text-lg">
                &ldquo;Coding is not just about writing lines of code it&apos;s
                about nurturing growth and unlocking endless possibilities.
                It&apos;s the art of development that empowers us to shape the
                future and create meaningful innovations.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <Image
          src={"/dashboard/coding.jpg"}
          width={400}
          height={500}
          alt="coding.jpg"
        />
      </div>
    </section>
  );
}
