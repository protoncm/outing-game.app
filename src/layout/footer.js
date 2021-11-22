// styles
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer class='footer'>
      <div className="container">
        <p className="text-muted">
          © {currentYear} Salween Solution, all rights reserved.
        </p>
        <p class='created'>
          Created
          by Chaleomkiat Monkong
        </p>
      </div>
    </footer>
  );
};

export default Footer;