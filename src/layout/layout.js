import Header from "./header";
import Footer from "./footer";

// styles
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main class='main_content container'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;