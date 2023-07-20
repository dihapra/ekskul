import { Montserrat } from "next/font/google";
import Navbar from "./navbar";
import Who from "./section/who";
import What from "./section/what";
import When from "./section/when";
import Facility from "./section/facility";
import Join from "./section/join";
import TitleSection from "./section/titlesection";
import Footer from "./section/footer";
const montserrat = Montserrat({
  subsets: ["latin"],
});
export default function Home() {
  return (
    <main className={montserrat.className}>
      <div className="max-w-7xl mx-auto lg:px-8 md:px-6">
        <div className="flex flex-col gap-10">
          <Navbar />
          <TitleSection />
          <Who />
          <What />
          <When />
          <Facility />
          <Join />
          <Footer />
        </div>
      </div>
    </main>
  );
}
