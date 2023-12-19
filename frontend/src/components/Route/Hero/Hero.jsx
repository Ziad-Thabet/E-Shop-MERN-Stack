import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {

  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat bg-cover  ${styles.noramlFlex}`}

      style={{
        backgroundImage:
          "url(https://assets2.razerzone.com/images/pnx.assets/0574f0137234bbfdf0ad9af7dcc25b12/axon-wallpaper-desktop-carousel-2.jpg)",
        backgroundSize: ("cover"),
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#000000] font-[600] capitalize`}
        >
          Best Collection for You <br />  For Your Gaming
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#808080]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
          assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
          quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
          <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
