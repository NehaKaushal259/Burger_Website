import { useState } from "react";
import about from '../images/about.png'

const About = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section className="mt-[100px] px-6" id="about">

      {/* Heading */}
      <h1 className="text-center font-bold text-4xl border-b-2 border-yellow-400 inline-block md:mx-[3rem] mx-20 w-[90%] lg:w-[85%] pb-2 
      [text-shadow:1px_1px_1px_black] font-[cursive]">
        ABOUT
      </h1>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-6 mt-6 items-center mx-20">

        {/* Image */}
        <div className="bg-yellow-400 p-2">
          <img src={about} alt="" className="w-full" />
        </div>

        {/* Text */}
        <div>
          <h2 className="font-bold text-3xl border-b-2 border-yellow-400 pb-1
          [text-shadow:1px_1px_1px_black] font-[cursive]">
            Delicious Burger
          </h2>

          <p className="mt-4 font-serif">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam accusamus exercitationem ut. Non assumenda nihil tempore minima consequatur corrupti numquam quia dolorum laborum praesentium vero commodi ex velit expedita, omnis adipisci? Exercitationem consequatur ducimus praesentium dolores rerum voluptatibus, nam illo quas modi deleniti iusto laboriosam adipisci enim excepturi, cupiditate quidem neque tempora sunt animi natus aliquid. Fugiat eligendi molestiae magnam vero dicta est praesentium unde ducimus eveniet commodi alias, pariatur quis quod saepe sed accusamus porro nemo doloribus cumque quos quo nihil! Numquam explicabo odit accusamus laudantium molestiae. Ipsum culpa dolor sequi dolore doloribus aperiam, earum maxime alias voluptates magni.


            {showMore && (
              <>
                {" "}
                Totam accusamus exercitationem ut. Non assumenda nihil tempore minima consequatur, Fugiat eligendi molestiae magnam vero dicta est praesentium unde ducimus eveniet commodi alias, pariatur quis quod saepe sed accusamus porro nemo doloribus cumque quos quo nihil! Numquam explicabo odit accusamus laudantium molestiae. Ipsum culpa dolor sequi dolore doloribus aperiam, earum maxime alias voluptates magni.
              </>
            )}
          </p>

          {/* Button */}
          <div className="mt-4">

            <button
              onClick={() => setShowMore(!showMore)}
              className="w-[200px] h-[32px] border-2 border-yellow-400 text-yellow-400 font-bold tracking-[3px] transition duration-500 hover:bg-yellow-400 hover:text-white"
            >
              {showMore ? "Show Less" : "Read More..."}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;