import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            tenetur voluptas fuga blanditiis quia nihil ex laborum veritatis!
            Delectus, facilis!
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>About</li>
            <li>Press</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+234 903 3456 3343</li>
            <li>
              <a
                href="mailto:info@example.com"
                className="text-gray-600 hover:text-gray-800"
              >
                info@example.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright © 2023 Your Website. All rights reserved.
          <br />
          Designed by{" "}
          <a
            href="https://example.com"
            className="text-gray-600 hover:text-gray-800"
          >
            Example Inc.
          </a>{" "}
          |
          <a
            href="https://example.com"
            className="text-gray-600 hover:text-gray-800"
          >
            Terms & Conditions
          </a>{" "}
          |
          <a
            href="https://example.com"
            className="text-gray-600 hover:text-gray-800"
          >
            Privacy Policy
          </a>{" "}
          |
        </p>
      </div>
    </div>
  );
};
export default Footer;
