import { CavaniContext } from "@/src/Context";
import About from "@/src/components/About";
import Contact from "@/src/components/Contact";
import News from "@/src/components/News";
import Service from "@/src/components/Service";
import Layout from "@/src/layout/Layout";
import dynamic from "next/dynamic";
import { useContext, useEffect } from "react";

// Динамические импорты
const Portfolio = dynamic(() => import("@/src/components/Portfolio"), {
  ssr: false,
});
const Particles = dynamic(() => import("@/src/components/author/Particles"), {
  ssr: false,
});
const Home = dynamic(() => import("@/src/components/Home"), {
  ssr: false,
});

const Indexparticle = () => {
  // Достаем функцию из контекста и исправляем опечатку
  const { animationChange } = useContext(CavaniContext);

  useEffect(() => {
    // Меняем анимацию при монтировании компонента
    if (animationChange) {
      animationChange("flipInX");
    } else {
      console.error("animationChange функция не найдена в CavaniContext.");
    }
  }, [animationChange]);

  return (
    <Layout>
      <div className="cavani_tm_mainpart absolute inset-[70px] overflow-hidden middle:inset-x-0 middle:bottom-0 middle:top-[55px]">
        {/* Проверяем наличие Particles */}
        {Particles ? <Particles /> : console.error("Компонент Particles не найден.")}

        <div className="main_content absolute top-0 right-0 bottom-0 w-[60%]">
          {/* Главная страница */}
          <Home />
          {/* О нас */}
          <About />
          {/* Портфолио */}
          <Portfolio />
          {/* Услуги */}
          <Service />
          {/* Новости */}
          <News />
          {/* Контакты */}
          <Contact />
        </div>
      </div>
    </Layout>
  );
};

export default Indexparticle;
