import Image from "next/image";
import "./globals.css"
import TopBar from "./Components/Topbar/topbar";
import MainSection from "./Components/mainSection/mainSection";
import ToolBox from "./Components/ToolingBox/toolBox";
import Footer from "./Components/Footer/footer";
import SocialMedia from "./Components/SocialMedia/socialMedia";
// import styles from "./page.module.css";

export default function Home() {
  return (
  <>
  {/* <TopBar /> */}
  <MainSection />
  <ToolBox />

<SocialMedia />
  <Footer />
  </>
  );
}
