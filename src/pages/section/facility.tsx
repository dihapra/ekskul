import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Facility() {
  return (
    <section>
      <h2 className="mb-8 text-4xl text-center font-extrabold text-gray-900 dark:text-white">
        Facilities
      </h2>
      <div className="flex gap-4 justify-between">
        <div className="px-4">
          <p>
            Having adequate facilities is crucial for a productive and efficient
            learning environment, especially in the context of a coding
            extracurricular activity. In our coding extracurricular, we
            prioritize providing state-of-the-art facilities to enhance the
            learning experience. Here are some of the essential facilities we
            offer:
          </p>
        </div>
        <div className="max-w-2xl">
          <Carousel
            showThumbs={true}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            centerMode={true}
            centerSlidePercentage={33.33}
            selectedItem={1}
            autoPlay={true}
            interval={3000}
          >
            <div className="rounded-lg w-52 h-48 p-4 shadow-xl border ">
              <h1 className="text-sm font-semibold">Powerful Computers</h1>
              <p className="text-xs">
                Experience blazing-fast performance with our high-powered
                computers.
              </p>
            </div>
            <div className="rounded-lg w-52 h-48 p-4 shadow-xl border ">
              <h1 className="text-sm font-semibold">
                Coding Tools and Software
              </h1>
              <p className="text-xs">
                We provide a wide range of coding tools, including IDEs, code
                editors, compilers, and debugging tools.
              </p>
            </div>
            <div className="rounded-lg w-52 h-48 p-4 shadow-xl border ">
              <h1 className="text-sm font-semibold">High-Speed Internet</h1>
              <p className="text-xs">
                Stay connected with our high-speed internet for seamless online
                activities.
              </p>
            </div>
            <div className="rounded-lg w-52 h-48 p-4 shadow-xl border ">
              <h1 className="text-sm font-semibold">Comfortable Environment</h1>
              <p className="text-xs">
                Enjoy a comfortable and conducive environment for focused
                learning.
              </p>
            </div>
            <div className="rounded-lg w-52 h-48 p-4 shadow-xl border ">
              <h1 className="text-sm font-semibold">Advanced Projectors</h1>
              <p className="text-xs">
                Enhance visual learning with our state-of-the-art projectors.
              </p>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
