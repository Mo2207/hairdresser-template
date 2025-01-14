import Isotope from "isotope-layout";
import { useContext, useEffect, useRef, useState } from "react";
import { CavaniContext } from "../Context";
import SectionContainer from "../layout/SectionContainer";
import TypingAnimation from "./AnimationText";

const Home = () => {
  const { navChange } = useContext(CavaniContext);
  const isotope = useRef(null);
  const [isIsotopeInitialized, setIsIsotopeInitialized] = useState(false);

  useEffect(() => {
    // Убедитесь, что DOM готов и элемент существует перед инициализацией Isotope
    if (!isIsotopeInitialized && document.querySelector(".gallery_zoom")) {
      const imagesLoaded = require("imagesloaded");
      var imgLoad = imagesLoaded(".portfolio_list");
      imgLoad.on("done", function () {
        isotope.current = new Isotope(".gallery_zoom", {
          itemSelector: ".item__",
          percentPosition: true,
          masonry: {
            columnWidth: ".item__",
          },
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
          },
        });
        setIsIsotopeInitialized(true);
      });
    }
  }, [isIsotopeInitialized]);

  return (
    <SectionContainer navName="home">
      <div className="cavani_tm_home relative w-full h-full flex items-center">
        <div className="content pl-[100px] relative">
          {/* <div className="hidden middle:block bg-block" /> */}
          <h3 className="name text-[72px] font-bold uppercase mb-[30px]">
            Aurora Hair Spa
          </h3>
          <span className="line inline-block w-[70px] h-[5px] bg-[#333] mb-[30px] relative" />
          <TypingAnimation />
          <div className="cavani_tm_button transition_link relative">
            <a href="#contact" onClick={() => navChange("contact")}>
              Get in touch
            </a>
          </div>
        </div>
      </div>
      {/* Предполагается, что .gallery_zoom существует где-то на странице */}
      <div className="gallery_zoom portfolio_list">
        {/* Добавьте содержимое галереи с элементами с классом .item__ */}
      </div>
    </SectionContainer>
  );
};

export default Home;
