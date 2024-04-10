import { Typography } from "keep-react";
import image from "../../assets/images/voting-img.png";
import BlogPost from "./BlogPost";

const Blog = () => {
  return (
    <div>
      <div className=" min-h-64 bg-[#2F2E41] ">
        <div className="flex text-center flex-col lg:flex-row max-w-sm lg:max-w-6xl mx-auto ">
          <img
            src={image}
            className="w-[492px] h-[250px] rounded-lg shadow-2xl my-12"
          />
          <div className="my-6 ml-6">
            <Typography variant="div" className="space-y-2 text-left">
              <Typography className="text-primary" variant="body-4">
                Harness the power of digital
              </Typography>
              <Typography variant="heading-3 text-white ">
                Accelerate your <br />{" "}
                <span className="text-primary">Political</span>
                <br />
                Presence
              </Typography>
              <div className="w-[150px] border-b-4 border-primary "></div>
              <Typography className=" text-primary" variant="body-4">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Typography>
            </Typography>
          </div>
        </div>
      </div>
      <BlogPost />
    </div>
  );
};

export default Blog;
