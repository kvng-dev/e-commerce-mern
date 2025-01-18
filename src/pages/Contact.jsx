import { assets } from "../assets/frontend_assets/assets";
import NewsLetter from "../components/NewsLetter";
import Title from "../components/Title";

const Contact = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="mt-10 flex flex-col md:flex-row gap-16 mb-28">
        <img
          className="w-full md:max-w-[450px]"
          alt=""
          src={assets.contact_img}
        />
        <div className="flex flex-col justify-center gap-6 items-start text-gray-600">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <address>
            123 Main Station <br />
            <span>Suite 350, Washington</span>
          </address>
          <p className="text-gray-500">
            Tel: (415) 555-0321 <br />
            Email: admin@forever.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Forever
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};
export default Contact;
