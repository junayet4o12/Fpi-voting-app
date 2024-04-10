import { Button, Typography } from "keep-react";
import avatar from "../../assets/images/avater.jpeg";

const BlogPost = () => {
  const blogs = [
    {
      name: "John Doe",

      username: "johndoe123",
      title: "Exciting News!",
      description:
        "I'm thrilled to announce the launch of our new product line. Check it out!",
      voteRelated: {
        title: "Vote for the Next Feature!",
        description:
          "We're asking for your input on what features you'd like to see next. Cast your vote now!",
      },
    },
    {
      name: "Jane Smith",

      username: "janesmith456",
      title: "Important Update",
      description:
        "Please take a moment to read about the recent changes to our service. Your feedback is appreciated!",
      voteRelated: {
        title: "Participate in our Survey!",
        description:
          "Help us improve our platform by taking our quick survey. Your input matters!",
      },
    },
    {
      name: "Alex Johnson",

      username: "alexj",
      title: "Special Offer!",
      description:
        "As a token of appreciation, we're offering a limited-time discount on all our products. Don't miss out!",
      voteRelated: {
        title: "Share Your Ideas!",
        description:
          "We're open to suggestions for improving our services. Share your ideas with us and help shape the future!",
      },
    },
    {
      name: "Emily Brown",

      username: "emilyb",
      title: "Upcoming Events",
      description:
        "Mark your calendars for our upcoming events. Exciting activities await!",
      voteRelated: {
        title: "Community Poll",
        description:
          "Let's decide together which events to prioritize. Cast your vote and make your voice heard!",
      },
    },
  ];

  return (
    <div>
        <h2 className="text-center mt-3 lg:mt-6 text-xl lg:text-3xl ">All Blog</h2>
      {blogs.map((blog) => (
        <div key={blog.title} className="mx-10 my-5 rounded bg-slate-100 p-5">
          <div className="flex flex-row justify-between ">
            <div className="flex flex-row items-center gap-2">
              <div className="">
                <figure>
                  <img className="h-12 w-12 rounded-full" src={avatar} alt="" />
                </figure>
              </div>
              <div>
                <Typography variant="div" className="space-y-2">
                  <Typography variant="body-4">{blog.name}</Typography>
                </Typography>
                <span className="text-violet-800">{blog.username}</span>
              </div>
            </div>

            <div>
              <Button className="bg-primary hover:bg-violet-400 ml-1">Follow</Button>
            </div>
          </div>
          <div className="mt-3 ">
            <h2 className="text-bold lg:text-xl">{blog.title}</h2>
            <p className="text-slate-600">{blog.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPost;
