import React from "react";
import BreadcrumbThree from "../breadcrumb/breadcrumb-3";
import FaqArea from "./faq-area";

const index = () => {
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <BreadcrumbThree
          title="Frequently Asked Questions"
          subtitle="Frequently Asked Questions"
        />
        <FaqArea />
      </div>
    </div>
  );
};

export default index;
