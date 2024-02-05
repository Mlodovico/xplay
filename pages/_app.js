import { MenuBar } from "../components/MenuBar";
import "../styles/global.css";
import Image from "next/image";
import Logo from "../public/xplay_logo.svg";
import { NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <div className="container">
        <div className="container-card">
          <div className="page-container">
            <div className="header">
              <Image src={Logo} />
            </div>
            <Component {...pageProps} />
          </div>
          <MenuBar />
        </div>
      </div>
    </NextUIProvider>
  );
}

export default MyApp;
