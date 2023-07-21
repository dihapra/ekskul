import Image from "next/image";

export default function TitleSection() {
  return (
    <section className="flex md:gap-2 justify-between flex-col md:flex-row gap-4">
      <div className="md:w-1/2 flex justify-center items-center">
        <div className=" max-w-md ">
          <div className=" animate-slide-in-left slide-in-left">
            <blockquote className="text-sky-900 md:text-lg text-sm font-semibold">
              <p className="text-center">
                &ldquo;Coding is not just about writing lines of code it&apos;s
                about nurturing growth and unlocking endless possibilities.
                It&apos;s the art of development that empowers us to shape the
                future and create meaningful innovations.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <div className="slide-in-right animate-slide-in-right">
          <Image
            src={"/dashboard/coding.jpg"}
            width={400}
            height={500}
            alt="coding.jpg"
          />
        </div>
      </div>
    </section>
  );
}
