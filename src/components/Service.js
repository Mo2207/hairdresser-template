import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
import SectionContainer from "../layout/SectionContainer";
import { imgToSvg } from "../utils";
// import { urlFor } from "@/libs/sanity";
// import { PortableText } from "@portabletext/react";

const Service = () => {

  useEffect(() => {
    imgToSvg();
  }, []);

  const services = [
    {
      img: "/assets/img/service/haircutting-service.jpg",
      icon: "/assets/img/service/scissors.svg",
      text: "Precision haircuts designed to suit your style and personality.",
      date: "Updated: January 3, 2025",
      title: "Haircuts & Styling",
      text1:
        "At Aurora Hair Spa, we specialize in precision haircuts and styling that reflect your unique personality. Whether you’re looking for a classic cut or a bold new look, our experienced stylists are here to make it happen.",
      text2:
        "A great haircut can transform not just your appearance but also your confidence. Let our experts help you achieve a style you’ll love.",
      text3:
        "From consultations to finishing touches, our team ensures that every haircut and style is crafted to perfection, making you feel your absolute best.",
    },
    {
      img: "/assets/img/service/hair-highlights-service.png",
      icon: "/assets/img/service/highlights.svg",
      text: "Enhance your look with vibrant color treatments and highlights.",
      date: "Updated: January 3, 2025",
      title: "Balayage & Highlights",
      text1:
        "Our color experts are skilled in balayage, highlights, and custom color treatments to give you a radiant, natural look.",
      text2:
        "Whether you want subtle highlights, vibrant tones, or full-color transformations, we ensure your hair remains healthy and beautiful throughout the process.",
      text3:
        "Using top-quality products and personalized techniques, we create colors that enhance your features and make your hair shine.",
    },
    {
      img: "/assets/img/service/hair-blowout-service.jpg",
      icon: "/assets/img/service/hairdryer.svg",
      text: "Experience the luxury of perfectly styled hair with our blowouts.",
      date: "Updated: January 3, 2025",
      title: "Luxury Blowouts",
      text1:
        "Indulge in a salon-quality blowout that leaves your hair smooth, shiny, and styled to perfection.",
      text2:
        "Whether it’s for a special occasion or just a treat for yourself, our blowouts deliver long-lasting results you’ll adore.",
      text3:
        "With professional-grade products and tools, we ensure your blowout not only looks great but also feels amazing.",
    },
    {
      img: "/assets/img/service/keratin-service.jpg",
      icon: "/assets/img/service/keratin-bottle.svg",
      text: "Smooth, frizz-free hair with our professional keratin treatments.",
      date: "Updated: January 3, 2025",
      title: "Keratin Treatments",
      text1:
        "Tired of frizzy, unmanageable hair? Our keratin treatments restore smoothness and shine, making your hair easier to style.",
      text2:
        "We use safe, effective formulas that nourish your hair while delivering long-lasting results.",
      text3:
        "Say goodbye to frizz and hello to effortlessly smooth hair with our customized keratin services.",
    },
    {
      img: "/assets/img/service/bridal-hair-service.jpg",
      icon: "/assets/img/service/diamond-ring.svg",
      text: "Perfect your look for your big day with our bridal hair services.",
      date: "Updated: January 3, 2025",
      title: "Bridal Hair Styling",
      text1:
        "Your wedding day deserves a flawless hairstyle. Our bridal hair experts work closely with you to create a look that complements your gown and theme.",
      text2:
        "From classic updos to modern styles, we ensure your hair is picture-perfect for the most important moments.",
      text3:
        "We offer trial sessions to ensure your wedding day style is exactly what you envision.",
    },
    {
      img: "/assets/img/service/scalp-treatment.jpg",
      icon: "/assets/img/service/woman-hair.svg",
      text: "Rejuvenate your hair and scalp with our nourishing treatments.",
      date: "Updated: January 3, 2025",
      title: "Scalp Treatments",
      text1:
        "Healthy hair starts with a healthy scalp. Our specialized treatments cleanse, nourish, and revitalize your scalp.",
      text2:
        "Whether you’re dealing with dryness, irritation, or buildup, we tailor treatments to meet your needs.",
      text3:
        "Relax and unwind as we restore balance to your scalp, leaving your hair refreshed and ready to shine.",
    },
  ];  

  const [isOpen7, setIsOpen7] = useState(false);
  const [modalContent, setModalContent] = useState({});

  function toggleModalFour() {
    setIsOpen7(!isOpen7);
  }

  return (
    <Fragment>
      <SectionContainer className="cavani_tm_section" navName="service">
        <div className="section_inner">
          <div className="cavani_tm_service w-full h-auto clear-both float-left mb-[70px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                Services
              </span>
            </div>
            <div className="service_list w-full h-auto clear-both float-left mt-[60px]">
              <ul className="ml-[-50px] flex flex-wrap">
                {services?.map((item, i) => (
                  <li className="mb-[50px] w-1/2 pl-[50px]" key={i}>
                    <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[#b9b8c3] border py-[70px] px-[40px] text-center transition-all duration-300 hover:bg-[#333] rounded-xl">
                      <Image
                        // className="svg inline-block max-w-[60px] max-h-[60px] w-full h-full text-[#333] mb-[27px] transition-all duration-300"
                        className="inline-block w-[60px] h-[60px] text-[#333] mb-[27px] transition-all duration-300 mx-auto"
                        src={item.icon}
                        alt={true.toString()}
                        width={60}
                        height={60}
                      />
                      <h3 className="title font-medium text-[24px] text-[#333] mb-[15px] transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="text transition-all duration-300">
                        {item.text1}
                      </p>
                      <a
                        className="cavani_tm_full_link"
                        href="#"
                        onClick={() => {
                          setModalContent(item);
                          toggleModalFour();
                        }}
                      />
                      {/* Modalbox Info Start */}
                      {/* <img
                        className="popup_service_image opacity-0 invisible hidden absolute z-[-111]"
                        src={urlFor(item?.image)?.url()}
                        alt={true.toString()}
                      /> */}
                    </div>
                  </li>
                ))}
                {/* {services.map((item, i) => (
                  <li className="mb-[50px] w-1/2 pl-[50px]" key={i}>
                    <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[#b9b8c3] border py-[70px] px-[40px] text-center transition-all duration-300 hover:bg-[#333]">
                      <img
                        className="svg inline-block w-[60px] h-[60px] text-[#333] mb-[27px] transition-all duration-300"
                        src={item.icon}
                        alt={true.toString()}
                      />
                      <h3 className="title font-medium text-[24px] text-[#333] mb-[15px] transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="text transition-all duration-300">
                        {item.text}
                      </p>
                      <a
                        className="cavani_tm_full_link"
                        href="#"
                        onClick={() => {
                          setModalContent(item);
                          toggleModalFour();
                        }}
                      />
                      <img
                        className="popup_service_image opacity-0 invisible hidden absolute z-[-111]"
                        src={item.img}
                        alt={true.toString()}
                      />
                    </div>
                  </li>
                ))} */}
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
      {modalContent?.title && (
        <Modal
          isOpen={isOpen7}
          onRequestClose={toggleModalFour}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={300}
          openTimeoutMS={300}
        >
          <div className="cavani_tm_modalbox opened">
            <div className="box_inner">
              <div className="close">
                <a href="#" onClick={toggleModalFour}>
                  <i className="icon-cancel" />
                </a>
              </div>
              <div className="description_wrap">
                <div className="service_popup_informations w-full h-auto clear-both float-left">
                  <div className="image">
                    <img src="assets/img/thumbs/4-2.jpg" alt={true.toString()} />
                    {modalContent?.img && (
                      <div
                        className="main"
                        // data-img-url={urlFor(modalContent?.image)?.url()}
                        style={{
                          backgroundImage: `url(${modalContent.img})`,
                        }} // hard-coded background image
                      />
                    )}
                  </div>
                  <div className="main_title">
                    <h3>{modalContent.title}</h3>
                  </div>
                  <div className="descriptions w-full float-left">
                    <p className="mb-[15px]">{modalContent.text1}</p>
                    <p className="mb-[15px]">{modalContent.text2}</p>
                    <p>{modalContent.text3}</p>
                    {/* <PortableText
                      value={modalContent?.content}
                    /> */}
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
export default Service;
