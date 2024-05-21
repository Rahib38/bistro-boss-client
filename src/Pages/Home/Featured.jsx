import SectionTitle from "../../Components/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";
import './Featured.css'
const Featured = () => {
    return (
      <div className="featured-item text-white pt-8 my-20 bg-fixed">
        <SectionTitle
          heading="Featured Item"
          subHeading="Check it out"
        ></SectionTitle>
        <div className="md:flex justify-center items-center px-36 pb-20 pt-12 bg-slate-500 bg-opacity-40">
          <div>
            <div>
              <img src={featuredImg} alt="" />
            </div>
          </div>
          <div className="ml-10">
            <p>Aug 20,2025</p>
            <p className="uppercase">Where can i get some?</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
              porro, vitae eaque iure obcaecati reprehenderit ad expedita quo
              alias vel, odio sapiente veritatis. Quae nisi natus veritatis
              earum possimus saepe temporibus necessitatibus ut suscipit totam
              eius modi iusto quas dicta praesentium, in doloribus ipsum
              sapiente alias nam omnis eveniet sequi!
            </p>
            <button className="btn btn-outline border-0 border-b-4">Order Now</button>
          </div>
        </div>
      </div>
    );
};

export default Featured;