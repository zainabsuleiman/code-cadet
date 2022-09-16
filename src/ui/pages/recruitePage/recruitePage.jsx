import React from "react";
import BgImage from "../../components/bgImage/bgImage";

const ContentPage = (props) => {
  return (
    <div className=" h-[130%]">
      <div className="flex h-full">
        <div className="w-1/2 h-full">
          <BgImage />
        </div>

        <div className="flex items-center  w-1/2 h-auto"> {props.page}</div>
      </div>
    </div>
  );
};

export default ContentPage;
