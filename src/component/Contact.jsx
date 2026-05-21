import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="px-6" id="contact">

      {/* Top Heading */}
      <h2 className="mt-[100px] text-center font-bold text-4xl border-b-2 border-yellow-400 inline-block md:mx-[3rem] mx-20 w-[90%] lg:w-[85%] pb-2 
      [text-shadow:1px_1px_1px_black] font-[cursive]">
        CONTACT
      </h2>

      {/* Main Container */}
      <div className="mt-6 border-2 border-yellow-400 p-6 grid md:grid-cols-2 gap-6 mx-20 mb-14">

        {/* Left Side */}
        <div>
          <h3 className="text-2xl border-b-2 border-yellow-400 inline-block pb-1 w-[100%]
          [text-shadow:1px_1px_1px_black] font-[cursive]">
            CONTACT
          </h3>

          <p className="mt-3 font-serif">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolorem sit excepturi, nemo reiciendis animi?
          </p>

          {/* Inputs */}
          <input
            type="text"
            placeholder="Name"
            className="w-full lg:w-[23rem] md:w-[15rem] md:h-[32px] md:font-semibold h-[42px] mt-5 bg-yellow-400 rounded px-3 placeholder-black font-serif font-bold"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full lg:w-[23rem] md:w-[15rem] md:h-[32px] md:font-semibold h-[42px] mt-5 bg-yellow-400 rounded px-3 placeholder-black font-serif font-bold"
          />

          <input
            type="number"
            placeholder="Phone"
            className="w-full lg:w-[23rem] md:w-[15rem] md:h-[32px] md:font-semibold h-[42px] mt-5 bg-yellow-400 rounded px-3 placeholder-black font-serif font-bold"
          />
          
          <br />

          {/* Button */}
          <button className="mt-5 w-[200px] h-[32px] md:w-[15rem] border-2 border-yellow-400 font-bold tracking-[3px] transition duration-500 hover:bg-yellow-400 hover:text-white">
            Send
          </button>
        </div>

        {/* Right Side */}
        <div>
          <h3 className="text-2xl border-b-2 border-yellow-400 inline-block pb-1 w-[100%]
          [text-shadow:1px_1px_1px_black] font-[cursive]">
            INFO
          </h3>

          <p className="mt-3 font-serif">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, odio assumenda nostrum commodi at corporis!
          </p>

          {/* Info Items */}
          <div className="mt-6 space-y-4 text-yellow-400 text-lg">

            <div className="flex items-center gap-3">
              <FaPhone />
              <span className="font-[cursive] text-black">
                +000000000000000
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope />
              <span className="font-[cursive] text-black">
                example@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaLocationDot />
              <span className="font-[cursive] text-black">
                Pakistan Sindh Karachi
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;