import top1 from '../images/topcard1.png'
import top2 from '../images/topcard2.png'
import top3 from '../images/topcard3.png'

const TopCards = () => {
  return (
    <section className="mt-[50px] px-6 mx-20">

      <div className="grid md:grid-cols-3 gap-6">

        {[top1, top2, top3].map((img, i) => (
          <div
            key={i}
            className="bg-yellow-400 transition duration-500 cursor-pointer hover:-translate-y-2 rounded"
          >
            <img src={img} alt="" className="w-full" />
          </div>
        ))}

      </div>

    </section>
  );
};

export default TopCards;