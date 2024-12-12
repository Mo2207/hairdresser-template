import { createClient } from "next-sanity";
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

export async function getServerSideProps() {
  const sanityClient = createClient({
    // TODO: mode to the env file
    projectId: "aw3v4mxg",
    dataset: "production",
    apiVersion: "2021-03-25",
    useCdn: false,
  });

  // Fetch data from Sanity
  const newsQuery = `
    *[_type=='news'] {
      title,
      image,
      tag,
      date,
      content,
    }
  `;

  const portfolioQuery = `
    *[_type=='portfolio'] {
      title,
      content,
      image,
      category,
    }
  `;

  const serviceQuery = `
    *[_type=='service'] {
      title,
      description,
      icon,
      image,
      content,
    }
  `;
  const newsData = await sanityClient.fetch(newsQuery);
  const portfolioData = await sanityClient.fetch(portfolioQuery);
  const serviceData = await sanityClient.fetch(serviceQuery);

  return {
    props: {
      data: {
        news: newsData || [],
        portfolio: portfolioData || [],
        service: serviceData || [],
      },
    },
  };
}

const Index = ({ data }) => {
  return (
    <Layout>
      <div className="cavani_tm_mainpart absolute inset-[70px] overflow-hidden middle:inset-x-0 middle:bottom-0 middle:top-[55px]">
      <Particles>
        <div className="author_image absolute top-0 left-0 bottom-0 w-[40%] z-[15]">
          <div
            className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
            data-img-url="assets/img/about/1.jpg"
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
          <Portfolio data={data?.portfolio} />
          {/* /PORTFOLIO */}
          {/* SERVICE */}
          <Service data={data?.service} />
          {/* SERVICE */}
          {/* NEWS */}
          <News data={data?.news} />
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
