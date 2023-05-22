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

export default function HomeLanding() {
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header />
        <HeroArea />
        <CounterUpArea />
        <CourseDemo />
        <OnlineCourse />
        {/* <HomeDemos /> */}
        <ShopSupport />
        <Features />
        {/* <InnerPagesDemo /> */}
        {/* <DownLoad /> */}
        <Footer />
      </div>
    </div>
  );
}
