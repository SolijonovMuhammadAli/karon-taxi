import Header from "./header";
import HeroArea from "./hero-area";
import CounterUpArea from "./counter-up-area";
import HomeDemos from "./home-demos";
import OnlineCourse from "./online-course";
import CourseDemo from "./course-demo";
import ShopSupport from "./shop-support";
import Features from "./features";
import InnerPagesDemo from "./inner-pages-demo";
import Footer from "./footer";
import DownLoad from "./download";

import Sign from "../sign-in/sign-in-area";

import Form1 from "../forms/blog-comment-form";
import Form2 from "../forms/comment-form-course";
import Form3 from "../forms/contact-me-form";
import Form4 from "../forms/contact-us-form";
import Form5 from "../forms/error-msg";
import Form6 from "../forms/login-form";
import Form7 from "../forms/product-comment-form";
import Form8 from "../forms/register-form";

export default function HomeLanding() {
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header />
        <HeroArea />
        <CounterUpArea />
        <Sign />
        <HomeDemos />
        <OnlineCourse />
        <CourseDemo />
        {/* <Form2 />
        <Form3 />
        <Form4 />
        <Form5 />
        <Form6 />
        <Form7 />
        <Form8 /> */}
        <ShopSupport />
        <Features />
        <InnerPagesDemo />
        <Sign />
        <DownLoad />
        <Footer />
      </div>
    </div>
  );
}
