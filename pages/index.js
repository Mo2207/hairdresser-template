import About from "@/src/components/About";
import Particles from "@/src/components/author/Particles";
import Contact from "@/src/components/Contact";
import News from "@/src/components/News";
import Service from "@/src/components/Service";
import Layout from "@/src/layout/Layout";
import dynamic from "next/dynamic";

const Portfolio = dynamic(() => import("@/src/components/Portfolio"), {
  ssr: false,
});

const Home = dynamic(() => import("@/src/components/Home"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layout>
      <div className="cavani_tm_mainpart absolute inset-[70px] overflow-hidden middle:inset-x-0 middle:bottom-0 middle:top-[55px]">
      <Particles>
        <div className="author_image absolute top-0 left-0 bottom-0 w-[40%] z-[15]">
          <div
            className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
            data-img-url="assets/img/about/1.jpeg"
          />
        </div>
        </Particles>
        <div className="main_content absolute top-0 right-0 bottom-0 w-[60%]">
          {/* HOME */}
          <Home />
          {/* HOME */}
          {/* ABOUT */}
          <About />
          {/* ABOUT */}
          {/* PORTFOLIO */}
          <Portfolio />
          {/* /PORTFOLIO */}
          {/* SERVICE */}
          <Service />
          {/* SERVICE */}
          {/* NEWS */}
          <News />
          {/* NEWS */}
          {/* CONTACT */}
          <Contact />
          {/* CONTACT */}
        </div>
      </div>
    </Layout>
  );
};
export default Index;
