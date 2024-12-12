import Modal from "react-modal";

export const Soundcloud = ({ isOpen3, toggleModalThree }) => {
  return (
    <Modal
      isOpen={isOpen3}
      onRequestClose={toggleModalThree}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={300}
      openTimeoutMS={300}
    >
      {" "}
      <div
        onClick={toggleModalThree}
        className="modal-video mfp-wrap mfp-gallery mfp-close-btn-in mfp-auto-cursor mfp-ready"
        tabIndex={-1}
        style={{ overflow: "hidden auto" }}
      >
        <div className="mfp-container mfp-s-ready mfp-iframe-holder">
          <div className="mfp-content">
            <div className="mfp-iframe-scaler">
              <button
                onClick={toggleModalThree}
                title="Close (Esc)"
                type="button"
                className="mfp-close"
              >
                ×
              </button>
              <iframe
                className="mfp-iframe"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                frameBorder={0}
                allowFullScreen
              />
            </div>
          </div>
          <div className="mfp-preloader">Loading...</div>
        </div>
      </div>
    </Modal>
  );
};
export const Detail = ({ isOpen4, toggleModalFour }) => {
  return (
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
          <div className="description_wrap rounded-xl">
            <div className="popup_details w-full h-auto clear-both float-left">
              <div className="top_image">
                <img src="assets/img/thumbs/4-2.jpg" alt={true.toString()} />
                <div
                  className="main"
                  data-img-url="assets/img/portfolio/6.jpg"
                  style={{
                    backgroundImage: 'url("assets/img/portfolio/6.jpg")',
                  }}
                />
              </div>
              <div className="portfolio_main_title">
                <h3 className="text-[16px] mb-[2px] font-semibold">
                  Alice Moon
                </h3>
                <span className="text-[14px]">Detail</span>
                <div />
              </div>
              <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                <div className="textbox w-[70%] pr-[40px]">
                  <p className="mb-[15px]">
                    We live in a world where we need to move quickly and iterate
                    on our ideas as flexibly as possible. Building mockups
                    strikes the ideal balance ease of modification. Building
                    mockups strikes the ideal balance ease of modification.
                  </p>
                  <p>
                    Mockups are useful both for the creative phase of the
                    project - for instance when you're trying to figure out your
                    user flows or the proper visual hierarchy - and the
                    production phase when they phase when they will represent
                    the target product. Building mockups strikes the ideal
                    balance ease of modification.
                  </p>
                </div>
                <div className="detailbox w-[30%] pl-[40px]">
                  <ul>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Client</span>
                      <span>Alvaro Morata</span>
                    </li>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Category</span>
                      <span>
                        <a className="text-[#7d7789]" href="#">
                          Detail
                        </a>
                      </span>
                    </li>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Date</span>
                      <span>March 07, 2021</span>
                    </li>
                    <li className="w-full float-left">
                      <span className="first font-bold block">Share</span>
                      <ul className="share relative top-[7px]">
                        <li className="mr-[13px] inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/facebook.svg"
                              alt={true.toString()}
                            />
                          </a>
                        </li>
                        <li className="mr-[13px] inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/twitter.svg"
                              alt={true.toString()}
                            />
                          </a>
                        </li>
                        <li className="inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/instagram.svg"
                              alt={true.toString()}
                            />
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="additional_images w-full clear-both float-left h-auto">
                <ul className="ml-[-30px]">
                  <li className="mb-[30px] float-left pl-[30px]">
                    <div className="list_inner w-full clear-both float-left h-auto relative">
                      <div className="my_image relative">
                        <img
                          className="relative opacity-0 min-w-full"
                          src="assets/img/thumbs/4-2.jpg"
                          alt={true.toString()}
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/portfolio/1.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/portfolio/1.jpg")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                  <li className="mb-[30px] float-left pl-[30px]">
                    <div className="list_inner w-full clear-both float-left h-auto relative">
                      <div className="my_image relative">
                        <img
                          className="relative opacity-0 min-w-full"
                          src="assets/img/thumbs/4-2.jpg"
                          alt={true.toString()}
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/portfolio/2.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/portfolio/2.jpg")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                  <li className="mb-[30px] float-left pl-[30px]">
                    <div className="list_inner w-full clear-both float-left h-auto relative">
                      <div className="my_image relative">
                        <img
                          className="relative opacity-0 min-w-full"
                          src="assets/img/thumbs/4-2.jpg"
                          alt={true.toString()}
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/portfolio/3.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/portfolio/3.jpg")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
