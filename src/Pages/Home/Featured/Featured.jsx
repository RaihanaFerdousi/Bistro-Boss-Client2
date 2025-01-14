import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="relative pt-8 my-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${featuredImg})` }}
      ></div>

      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 text-white pt-8">
        <SectionTitle subHeading="Check it out" heading="Featured Items" />
        <div className="md:flex justify-center items-center pb-20 pt-12 px-6 md:px-36">
          <div>
            <img
              src={featuredImg}
              alt="Featured Item"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:ml-10 mt-8 md:mt-0">
            <p className="text-gray-300">Aug 20, 2029</p>
            <p className="uppercase text-lg font-semibold mt-2">
              Where can I get some?
            </p>
            <p className="text-gray-400 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              expedita hic dolorem, iusto vel suscipit nam excepturi debitis
              magnam nostrum! Ut eum dignissimos culpa doloremque eligendi
              consectetur blanditiis laboriosam fugiat ea quia similique quam
              nisi reprehenderit numquam magnam nemo vitae cupiditate, atque
              maiores dicta minus pariatur. Perspiciatis nobis vero quas?
            </p>
            <button className="btn btn-outline border-0 border-b-4 mt-4 hover:bg-white hover:text-black transition-colors">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
