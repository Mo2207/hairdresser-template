const Footer = () => {
  return (
    <div className="cavani_tm_footer fixed inset-x-0 bottom-0 bg-white z-[10] h-[70px] leading-[70px] flex items-center justify-between py-0">
      <div className="copyright">
        {/* <p className="text-[#333] font-poppins">Copyright © 2024</p> */}
        <div className="flex items-center gap-8">
          <div className="text-[#333] font-poppins">Powered By</div>
          &nbsp;
          <a
            href="https://theclicks.ca"
            target="_blank"
            style={{ color: "#526eb5", display: "flex", alignItems: "center", gap: "2px" }}
          >
            <img
            className=" inline-block w-[24px] h-[24px] mb-[0px]"
            src="assets/img/svg/theClicks.svg"
            width={24}
            height={24}
            alt="The Clicks logo"
          />
            The Clicks
          </a>
        </div>
      </div>
      <div className="social">
        <ul>
          <li className="mr-[15px] inline-block">
            <a className="text-[#333]" href="#">
              <img
                className="svg inline-block"
                src="assets/img/svg/social/facebook.svg"
                alt={true.toString()}
              />
            </a>
          </li>
          <li className="inline-block">
            <a className="text-[#333]" href="#">
              <img
                className="svg inline-block"
                src="assets/img/svg/social/instagram.svg"
                alt={true.toString()}
              />
            </a>
          </li>
          {/* <li className="inline-block">
            <a className="text-[#333]" href="#">
              <img
                className="svg inline-block"
                src="assets/img/svg/social/tik-tok.svg"
                alt={true.toString()}
              />
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};
export default Footer;
