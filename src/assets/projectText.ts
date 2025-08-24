import img1 from "../assets/projectsImages/project1.png";
import img2 from "../assets/projectsImages/project2.png";
import img3 from "../assets/projectsImages/project3.png";
import img4 from "../assets/projectsImages/project4.png";
import img5 from "../assets/projectsImages/project11.png";
import img6 from "../assets/projectsImages/project6.png";
import img7 from "../assets/projectsImages/project7.png";
import img8 from "../assets/projectsImages/project8.png";
import img9 from "../assets/projectsImages/project9.png";

export const projectData: {
  name: string;
  description: string;
  image: string;
  githubLink: string;
  siteLink: string;
  technoUsed: string[];
}[] = [
    {
    name: "Typecast",
    description:
      "A platform where you can select the category of reals you want to watch and then get the best reals for that category, making sure you don't scroll unnecessary content.it uses Nextjs, and fetches the best reals so you can enjoy the best content. You can watch unlimited reals by subscribing.",
    image: img5,
    githubLink: "Private client repo",
    siteLink: "https://www.usetypecast.com",
    technoUsed: ["Nextjs ", "RestAPI","Nest.js"],
  },
    {
    name: "Maxel Tracker",
    description:
      "An AI-powered employee efficiency and productivity tool that provides automated insights, smart screenshots, and real-time performance analytics—helping teams work smarter, not harder.",
    image: img6,
    githubLink: "Private client repo",
    siteLink: "https://www.maxeltracker.com",
    technoUsed: ["ReactJS ", "React Router", "RestAPI "],
  },
  {
    name: "Sheridan Nurseries",
    description:
      "The official website for Sheridan Nurseries, a renowned Canadian horticulture company established in 1913, was built using Next.js. It showcases the company’s rich history, farm operations, and retail garden centres, along with an online garden centre for customers. The project focuses on delivering a modern, responsive, and user-friendly design that highlights their inventory, strengthens visitor engagement, and reflects the heritage and credibility of a century-old brand.",
    image: img7,
    githubLink: "Private client repo",
    siteLink: "https://www.sheridannurseries.com/",
    technoUsed: ["Nextjs ", "Nodejs", "Grapql"],
  },
  {
    name: "Paw Patrol",
    description:
      "The PAW Patrol Kids section of the official PAW Patrol website is a vibrant, child-friendly hub offering games, videos, and activities themed around the PAW Patrol characters; it features bright visuals, intuitive navigation, and interactive content aimed at engaging young users while reinforcing brand identity and entertainment value. ",
    image: img8,
    githubLink: "Private client repo",
    siteLink: "https://www.pawpatrol.com/kids",
    technoUsed: ["NextJs ", "Nodejs"],
  },
    {
    name: "Media Mob",
    description:
      "MediaMob is a freelance marketplace platform built with a unique model, similar to Upwork but designed for a closed network of vetted professionals. Unlike traditional platforms where freelancers apply to projects, MediaMob reverses the flow: admins invite freelancers (called Mobbers) to join, and then project owners initiate bidding. The platform supports secure logins, streamlined project management, and controlled access, ensuring quality participation while maintaining exclusivity.",
    image: img9,
    githubLink: "Private client repo",
    siteLink: "https://www.mediamob.io/",
    technoUsed: ["NextJs ", " Material-UI"],
  }

];
