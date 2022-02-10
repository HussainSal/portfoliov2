import img1 from "../assets/projectsImages/project1.png";
import img2 from "../assets/projectsImages/project2.png";
import img3 from "../assets/projectsImages/project3.png";
import img4 from "../assets/projectsImages/project4.png";

export const projectData = [
  {
    name: "Movie App",
    description:
      "A movie app made with ReactJs. you can click on an Actor, and check information about him/her as well as movies that same actor enters.it uses React Router, and fetches the movie based on the URL, so you can easily reload the page and the data will be still fetched.",
    image: img1,
    githubLink: "https://github.com/HussainSal/movie-app",
    siteLink: "https://movieapp-6827a.web.app/trending",
    technoUsed: ["ReactJS ", "React Router", "RestAPI "],
  },
  {
    name: "Ecommerce App",
    description:
      "An Ecommerce App made with NextJs. User can signup/login and add items to cart and wishlist, then by going to cart can also check total of it and available discount . ",
    image: img2,
    githubLink: "https://github.com/HussainSal/ecommerce-app",
    siteLink: "https://ecommerce-app-zeta.vercel.app/",
    technoUsed: ["NextJs ", " Material-UI"],
  },
  {
    name: "Todo App",
    description:
      "A Todo App made with Nextjs. It stores users todo on firebase, and displays task that are completed and yet to be completed.",
    image: img3,
    githubLink: "https://github.com/HussainSal/Todo-using-Nextjs-",
    siteLink: "https://todo-using-next-js-and-material-ui.vercel.app/",
    technoUsed: ["NextJS ", "React Router", " Material-UI", "RestAPI "],
  },
  {
    name: "Lasells",
    description:
      "A Landing page made with Nextjs. It is a VPN service provider page that displays various offers and services. ",
    image: img4,
    githubLink:
      "https://github.com/HussainSal/lasells-using-Nextjs-and-material-ui",
    siteLink:
      "https://lasells-using-nextjs-and-material-ui-5u4pd64g7-hussainsal.vercel.app/",
    technoUsed: ["NextJS ", " Material-UI"],
  },
];
