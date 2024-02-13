import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "AI in Health",
    paragraph:
      "I love what I do! Tech innovation is my passion. Having a system developed from an idea and grow to scale while impacting hundreds of thousands of people positively keeps me motivated. I learn from a great mHealth Kenya team and every new project is a new job. It is never a dull moment!",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/logo/logo.png",
      designation: "Graphic Designer",
    },
    tags: ["CEO's Desk"],
    publishDate: "12th January 2023",
  },
  {
    id: 2,
    title: "Career Opportunities",
    paragraph:
      "Do you enjoy what you do? We are an organisation of passionate people. Join our team today! ",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/logo/logo.png",
      designation: "Content Writer",
    },
    tags: ["Career Opportunities"],
    publishDate: "12th January 2023",
  },
  {
    id: 3,
    title: "Awards",
    paragraph:
      "At mHealth Kenya we strive to be the best and in doing so we have won exemplary awards. The recognition by the various awarding partners motivates us to be innovative and the best we can be. ",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/logo/logo.png",
      designation: "Graphic Designer",
    },
    tags: ["Awards"],
    publishDate: "12th January 2023",
  },
];
export default blogData;
