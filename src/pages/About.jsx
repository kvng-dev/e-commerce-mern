import { assets } from "../assets/frontend_assets/assets";
import NewsLetter from "../components/NewsLetter";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="mt-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          alt=""
          src={assets.about_img}
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            quas ea iste porro repellat, a atque rem cumque quasi harum? Magni
            eius amet, perspiciatis fuga culpa expedita et! Magni, reiciendis.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem,
            similique ipsa officiis vel fuga recusandae maiores praesentium.
            Blanditiis mollitia tempore labore, deserunt veniam ipsam at
            deleniti atque minus impedit officiis voluptas dolores aliquid sint
            error aperiam cupiditate? Cupiditate, consequuntur quae.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            fugit alias aspernatur nobis neque provident voluptates aperiam,
            sequi magnam placeat quae, voluptas officiis perferendis nulla
            sapiente magni inventore. At, pariatur.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eius
            temporibus magnam at magni aut autem alias mollitia distinctio
            nesciunt!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eius
            temporibus magnam at magni aut autem alias mollitia distinctio
            nesciunt!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eius
            temporibus magnam at magni aut autem alias mollitia distinctio
            nesciunt!
          </p>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};
export default About;
