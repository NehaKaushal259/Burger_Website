import logo from "../images/logo.png";
import {
  FaPhone,
  FaEnvelope,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="text-white font-serif text-sm font-bold [text-shadow:0px_0px_1px_black] bg-yellow-400">

      {/* Top Section */}
      <div className="py-[60px] px-6 border-2 border-yellow-400 
      bg-[linear-gradient(110deg,black_67%,#ffc800_32%)]">

        <div className="grid md:grid-cols-4 gap-8">

          {/* Contact */}
          <div className="mx-10">
            <div className="flex items-center text-2xl font-bold mb-3">
              <img src={logo} alt="" className="w-8 mr-2" />
              Burger
            </div>

            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <p>
              Karachi <br /> Sindh <br /> Pakistan
            </p>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <FaPhone /> <span>+0000000000000000</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope /> <span>example@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="mb-3">Useful Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Contact", "Services", "Privacy Policy"].map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-yellow-400 transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-3">Our Services</h4>
            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <ul className="space-y-2">
              {["Pizza", "Fried Chicken", "Fries"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-yellow-400 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="mb-3">Our Social Links</h4>
            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className="flex gap-3 mt-3 text-lg">
              <FaTwitter className="cursor-pointer hover:text-black transition" />
              <FaFacebook className="cursor-pointer hover:text-black transition" />
              <FaInstagram className="cursor-pointer hover:text-black transition" />
              <FaLinkedinIn className="cursor-pointer hover:text-black transition" />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <hr />

      <div className="px-14 py-10 flex flex-col md:flex-row justify-between items-center text-center">
        <div>
          © Copyright <strong>Burger</strong>. All Rights Reserved
        </div>

        <div>
          Designed By <a href="#" className="underline text-blue-600 mr-20">SA coding</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;