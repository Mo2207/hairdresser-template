import Isotope from "isotope-layout";
import dynamic from "next/dynamic";
import Modal from "react-modal";
import { Fragment, useEffect, useRef, useState } from "react";
import SectionContainer from "../layout/SectionContainer";
import { dataImage } from "../utils";
import ImageView from "./ImagePopup";
// import { urlFor } from "@/libs/sanity";
import { Detail, Soundcloud } from "./Popup";
// import { PortableText } from "@portabletext/react";

// hard-coded data for portfolio section
const portfolioData = [
  {
    title: "Elegant Haircut",
    category: "Haircuts & Styling",
    image: "/assets/img/portfolio/elegant-haircut.jpg",
    content: [
      "Experience the ultimate in haircuts with our expert stylists who are dedicated to crafting the perfect style for you.",
      "Whether you’re looking for a classic trim or a bold new look, our attention to detail ensures a result you’ll love.",
      "Step into a world of luxury and let us transform your hairstyle with precision and care."
    ],
  },
  {
    title: "Balayage Perfection",
    category: "Balayage & Highlights",
    image: "/assets/img/portfolio/balayage-hair.jpg",
    content: [
      "Achieve that sun-kissed glow with our exquisite balayage and highlighting services.",
      "Our color specialists use advanced techniques to create a seamless, natural-looking blend of tones tailored to your style.",
      "Let your hair shine with radiant highlights that enhance your beauty and add dimension to your look."
    ],
  },
  {
    title: "Root Touch-Up Magic",
    category: "Root Touch-Ups",
    image: "/assets/img/portfolio/hair-roots.jpg",
    content: [
      "Say goodbye to grown-out roots with our professional root touch-up services.",
      "We match your existing color perfectly, ensuring a flawless and refreshed appearance.",
      "Keep your hair looking polished and vibrant with our quick and effective touch-up solutions."
    ],
  },
  {
    title: "Smooth Keratin",
    category: "Keratin Treatments",
    image: "/assets/img/portfolio/keratin-treatment.jpg",
    content: [
      "Tame unruly hair with our transformative keratin treatments designed to leave your hair smooth and silky.",
      "Our treatments reduce frizz, enhance shine, and improve manageability for a stunning finish.",
      "Enjoy long-lasting results that keep your hair looking flawless, no matter the occasion."
    ],
  },
  {
    title: "Luxury Blowout",
    category: "Luxury Blowouts",
    image: "/assets/img/portfolio/blowout-hair.jpg",
    content: [
      "Indulge in a luxurious blowout that leaves your hair feeling soft, bouncy, and full of life.",
      "Our stylists use premium products and expert techniques to create a polished, long-lasting look.",
      "Perfect for any special event or simply treating yourself to a day of pampering."
    ],
  },
  {
    title: "Bridal Elegance",
    category: "Bridal Hair Styling",
    image: "/assets/img/portfolio/wedding-hair.jpg",
    content: [
      "Make your wedding day unforgettable with our bespoke bridal hair styling services.",
      "From timeless updos to soft waves, we create a look that complements your gown and enhances your natural beauty.",
      "Trust our experienced team to ensure your hair is picture-perfect for your special day."
    ],
  }
];

const Portfolio = () => {
  const categories = [
    "Haircuts & Styling",
    "Balayage & Highlights",
    "Root Touch-Ups",
    "Keratin Treatments",
    "Luxury Blowouts",
    "Bridal Hair Styling"
  ];

  const ModalVideo = dynamic(
    () => {
      return import("react-modal-video");
    },
    { ssr: false }
  );

  // Isotope
  const isotope = useRef(null);
  const [filterKey, setFilterKey] = useState("*");
  const [isIsotopeInitialized, setIsIsotopeInitialized] = useState(false);

  useEffect(() => {
    const imagesLoaded = require("imagesloaded");
    const portfolioList = document.querySelector(".gallery_zoom");

    if (portfolioList && !isIsotopeInitialized) {
      // Загружаем изображения перед инициализацией Isotope
      var imgLoad = imagesLoaded(".portfolio_list");
      imgLoad.on("done", function () {
        isotope.current = new Isotope(".gallery_zoom", {
          itemSelector: ".item__",
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

    return () => {
      // Очищаем экземпляр Isotope при размонтировании компонента
      if (isotope.current) {
        isotope.current.destroy();
      }
    };
  }, [isIsotopeInitialized]);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };

  const activeBtn = (value) => (value === filterKey ? "active" : "");

  useEffect(() => {
    setTimeout(() => {
      dataImage();
    }, 2000);
  });

  const [modalContent, setModalContent] = useState({});
  const [category, setCategory] = useState(null);
  const filteredData = category ? portfolioData.filter(item => item.category === category) : portfolioData; // replaced sanity {data} with portfolioData
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  // Modal with title, image and content
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal(value) {
    setIsModalOpen(!isModalOpen);
    setModalContent(value);
  }

  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }

  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <Fragment>
      <ImageView />
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen2}
        videoId="337293658"
        animationSpeed={300}
        onClose={() => setIsOpen2(false)}
        modalVideoClose="mfp-close"
      />
      <ModalVideo
        channel="youtube"
        autoplay={true}
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        animationSpeed={300}
        onClose={() => setIsOpen(false)}
        modalVideoClose="mfp-close"
      />
      <Soundcloud isOpen3={isOpen3} toggleModalThree={toggleModalThree} />
      <Detail isOpen4={isOpen4} toggleModalFour={toggleModalFour} />
      <SectionContainer navName="portfolio">
        <div className="section_inner">
          <div className="cavani_tm_portfolio w-full h-auto clear-both float-left mb-[70px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                Creative Portfolio
              </span>
            </div>
            <div className="portfolio_filter w-full h-auto clear-both float-left text-left relative px-0 pt-[55px] pb-[42px]">
              <ul>
                <li className="mr-[40px] inline-block">
                  {/* <a
                    href="#"
                    className={`current text-[#333] font-poppins font-medium transition-all duration-300 ${activeBtn("*")}`}
                    data-filter="*"
                    onClick={handleFilterKeyChange("*")}
                  >
                    All
                  </a> */}
                  <button
                    className={`current text-[#333] font-poppins font-medium transition-all duration-300 ${category === null && 'underline'}`}
                    onClick={() => setCategory(null)}
                  >
                    All
                  </button>
                </li>
                {/* <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className={`text-[#333] font-poppins font-medium transition-all duration-300 ${activeBtn(
                      "eyebrow-wax"
                    )}`}
                    data-filter=".eyebrow-wax"
                    onClick={handleFilterKeyChange("eyebrow-wax")}
                  >
                    Eyebrow Wax
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className={`text-[#333] font-poppins font-medium transition-all duration-300 ${activeBtn(
                      "youtube"
                    )}`}
                    data-filter=".youtube"
                    onClick={handleFilterKeyChange("youtube")}
                  >
                    Eyebrow Tint & Shape
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className={`text-[#333] font-poppins font-medium transition-all duration-300 ${activeBtn(
                      "soundcloud"
                    )}`}
                    data-filter=".soundcloud"
                    onClick={handleFilterKeyChange("soundcloud")}
                  >
                    Eyebrows Lamination
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className={`text-[#333] font-poppins font-medium transition-all duration-300 ${activeBtn(
                      "image"
                    )}`}
                    data-filter=".image"
                    onClick={handleFilterKeyChange("image")}
                  >
                    Eyelash Lift and Tint
                  </a>
                </li>
                <li className="inline-block">
                  <a
                    href="#"
                    className={`text-[#333] font-poppins font-medium transition-all duration-300 ${activeBtn(
                      "detail"
                    )}`}
                    data-filter=".detail"
                    onClick={handleFilterKeyChange("detail")}
                  >
                    Classic Fill
                  </a>
                </li> */}
                {categories.map((item, i) => (
                  <li key={`category-${i}`} className="inline-block">
                    <button
                      key={`category-${i}`}
                      className={`text-[#333] font-poppins font-medium transition-all duration-300 ${category === item && 'underline'}`}
                      onClick={() => setCategory(item)}
                    >{item}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="portfolio_list w-full h-auto clear-both float-left">
              <ul className="flex flex-wrap">
                {filteredData?.map((item, i) => {
                  return (
                    <li key={`portfolio-${i}`} className="youtube mb-[50px] w-1/2 float-left pl-[50px] item__">
                      <button onClick={() => toggleModal(item)}>
                      <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                        <div className="image relative">
                          <img
                            className="relative min-w-full rounded-xl"
                            src={item.image} // hard-coded image
                            alt={item.title}
                          />
                          <div className="details rounded-1xl">
                            <h3 className="text-[16px] mb-[2px] font-semibold">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                      </button>
                    </li> 
                  )
                })}
                {/* <li className="youtube mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt={true.toString()}
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/portfolio/1.jpg"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Ave Brook
                        </h3>
                        <span className="text-[14px]">Youtube</span>
                      </div>
                      <a
                        onClick={() => setIsOpen(true)}
                        className="cavani_tm_full_link popup-youtube"
                        href="#"
                      />
                    </div>
                  </div>
                </li> */}
                {/* Остальные элементы галереи */}
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
      {modalContent && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={toggleModal}
          contentLabel="Portfolio"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={300}
          openTimeoutMS={300}
        >
          <div className="cavani_tm_modalbox opened">
            <div className="box_inner">
              <div className="close">
                <a href="#" onClick={toggleModal}>
                  <i className="icon-cancel" />
                </a>
              </div>
              <div className="description_wrap rounded-xl">
                <div className="news_popup_informations w-full h-auto clear-both float-left">
                  {modalContent?.image && (
                    <div className="image">
                      <img
                      src={modalContent.image} // hard-coded image
                      alt={modalContent.title} // hard-coded title
                      />
                      <div
                        className="main"
                        style={{ backgroundImage: `url(${modalContent.image})`}} // hard-coded background image
                      />
                    </div>
                  )}
                  <div className="details">
                    <div className="title">
                      <h3>{modalContent.title}</h3>
                    </div>
                    <div />
                  </div>
                  <div className="text w-full float-left">
                    {/* <p className="mb-[15px]">{modalContent.text1}</p>
                    <p className="mb-[15px]">{modalContent.text2}</p>
                    <p>{modalContent.text3}</p> */}
                    {/* <PortableText
                      value={modalContent?.content}
                    /> */}
                    {modalContent.content}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </Fragment>
  );
};
export default Portfolio;
