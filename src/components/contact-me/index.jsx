import React from "react";
import BreadcrumbThree from "../breadcrumb/breadcrumb-3";
import ContactMeArea from "./contact-me-area";
import ContactMeFormArea from "./contact-me-form-area";

const index = () => {
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <BreadcrumbThree title="Contact Me" subtitle="Contact Me" />
        <ContactMeArea />
        <ContactMeFormArea />
      </div>
    </div>
  );
};

export default index;
