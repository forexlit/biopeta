import { Footer } from "@/views/Footer";
import { Navigation } from "@/views/Navigation";

const Layout = ({ children, isHomepage }) => {
  return (
    <>
      <Navigation isHomepage={isHomepage} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
