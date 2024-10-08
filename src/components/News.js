import { Fragment, useEffect, useState } from "react";
import Modal from "react-modal";
import { urlFor } from "@/libs/sanity";
import { PortableText } from "@portabletext/react";
import SectionContainer from "../layout/SectionContainer";

const News = ({ data }) => {
  useEffect(() => {
    var lists = document.querySelectorAll(".news_list > ul > li");
    let box = document.querySelector(".cavani_fn_moving_box");
    if (!box) {
      let body = document.querySelector("body");
      let div = document.createElement("div");
      div.classList.add("cavani_fn_moving_box");
      body.appendChild(div);
    }

    lists.forEach((list) => {
      list.addEventListener("mouseenter", (event) => {
        box.classList.add("opened");
        var imgURL = list.getAttribute("data-img");
        box.style.backgroundImage = `url(${imgURL})`;
        box.style.top = event.clientY - 50 + "px";

        if (imgURL === "") {
          box.classList.remove("opened");
          return false;
        }
      });
      list.addEventListener("mouseleave", () => {
        box.classList.remove("opened");
      });
    });
  }, []);

  const [isOpen4, setIsOpen4] = useState(false);
  const [modalContent, setModalContent] = useState({});

  function toggleModalFour(value) {
    setIsOpen4(!isOpen4);
    setModalContent(value);
  }
  const newsData = [
    {
      img: "assets/img/news/1.jpg",
      tag: "Branding",
      date: "August 9, 2021",
      comments: "3 comments",
      title: "Reasons Why People Use Discord",
      text1:
        "Cavani is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      text2:
        "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
      text3:
        "That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    },
    {
      img: "assets/img/news/2.jpg",
      tag: "Branding",
      date: "August 9, 2021",
      comments: "3 comments",
      title: "Why We Should Read Fewer Books",
      text1:
        "Cavani is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      text2:
        "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
      text3:
        "That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    },
    {
      img: "assets/img/news/3.jpg",
      tag: "Branding",
      date: "August 9, 2021",
      comments: "3 comments",
      title: "A Final Farewell to the iPod",
      text1:
        "Cavani is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      text2:
        "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
      text3:
        "That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    },
    {
      img: "assets/img/news/4.jpg",
      tag: "Branding",
      date: "August 9, 2021",
      comments: "3 comments",
      title: "Dealing with Spring Allergy Symptoms",
      text1:
        "Cavani is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      text2:
        "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
      text3:
        "That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    },
    {
      img: "assets/img/news/5.jpg",
      tag: "Branding",
      date: "August 9, 2021",
      comments: "3 comments",
      title: "How to Take a Break from Yourself",
      text1:
        "Cavani is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      text2:
        "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
      text3:
        "That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    },
    {
      img: "assets/img/news/6.jpg",
      tag: "Branding",
      date: "August 9, 2021",
      comments: "3 comments",
      title: "The Age of Extinction Is Here",
      text1:
        "Cavani is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      text2:
        "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
      text3:
        "That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    },
  ];

  return (
    <Fragment>
      <SectionContainer navName="news">
        <div className="section_inner">
          <div className="cavani_tm_news w-full h-auto clear-both float-left mb-[70px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                Latest News
              </span>
            </div>
            <div className="news_list w-full h-auto clear-both float-left mt-[60px]">
              <ul className="relative z-[2]">
                {data?.map((item, i) => {
                  return (
                    <li
                      className="w-full py-[29px] px-0"
                      data-img={urlFor(item?.image)?.url()}
                      key={i}
                    >
                      <div className="list_inner w-full clear-both h-auto flex items-center">
                        <span className="number w-[50px] min-w-[50px] h-[50px] text-center leading-[50px] inline-block rounded-full bg-[#b9b8c3] text-[#333] text-[16px] font-semibold font-poppins">
                          {`${i <= 9 ? 0 : ""}${i + 1}`}
                        </span>
                        <div className="details relative pl-[30px] ml-[29px]">
                          <div className="extra_metas">
                            <ul className="flex items-center flex-wrap mb-[2px]">
                              <li className="relative mr-[10px]">
                                <span className="text-[15px] text-[#777]">
                                  {item.date}
                                </span>
                              </li>
                              <li className="relative mr-[10px]">
                                <span className="text-[15px] text-[#777] pl-[10px]">
                                  <a
                                    className="text-[#777] transition-all duration-300 hover:text-[#000]"
                                    href="#"
                                    onClick={() => toggleModalFour(item)}
                                  >
                                    {item.tag}
                                  </a>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="post_title">
                            <h3 className="m-0 p-0 leading-[1] font-semibold">
                              <a href="#" onClick={() => toggleModalFour(item)}>
                                {item.title}
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
      {modalContent && (
        <Modal
          isOpen={isOpen4}
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
                <div className="news_popup_informations w-full h-auto clear-both float-left">
                  {modalContent?.image && (
                    <div className="image">
                      <img src={urlFor(modalContent?.image)?.url()} alt={true.toString()} />
                      <div
                        className="main"
                        data-img-url={urlFor(modalContent?.image)?.url()}
                        style={{ backgroundImage: `url(${urlFor(modalContent?.image)?.url()})` }}
                      />
                    </div>
                  )}
                  <div className="details">
                    {modalContent?.date && (
                      <div className="meta">
                        <ul className="flex items-center flex-wrap mb-[2px]">
                          <li className="relative mr-[10px]">
                            <span className="text-[15px] text-[#777]">
                            {modalContent.date}
                            </span>
                          </li>
                          <li className="relative mr-[10px]">
                            <span className="text-[15px] text-[#777] pl-[10px]">
                              <a
                                className="text-[#777] transition-all duration-300 hover:text-[#000]"
                                href="#"
                              >
                                {modalContent.tag}
                              </a>
                            </span>
                          </li>
                        </ul>
                      </div>
                    )}
                    <div className="title">
                      <h3>{modalContent.title}</h3>
                    </div>
                    <div />
                  </div>
                  <div className="text w-full float-left">
                    {/* <p className="mb-[15px]">{modalContent.text1}</p>
                    <p className="mb-[15px]">{modalContent.text2}</p>
                    <p>{modalContent.text3}</p> */}
                    <PortableText
                      value={modalContent?.content}
                    />
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
export default News;
