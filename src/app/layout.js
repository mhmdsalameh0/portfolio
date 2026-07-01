import Preloader from "@/components/ui/preloader";
import "./global.css"
import BootstrapForBrowser from "@/components/ui/bootstrapForBrowser";
import Header from "@/components/sections/header";
import CallToAction from "@/components/sections/callToAction";
import Footer from "@/components/sections/footer";

export const metadata = {
  title: "Mostafa",
  description: "Mostafa personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="preloading">
      <body suppressHydrationWarning className="preloading">
        <BootstrapForBrowser />
        <Preloader />
        <div className="app-shell">
          <Header />
          {children}
          <CallToAction />
          <Footer />
        </div>
      </body>
    </html>
  );
}
