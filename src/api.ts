export interface Post {
  imgSrc: string;
  title: string;
  description: string;
  githubUrl?: string;
  hostedAppUrl?: string;
}

export const projects: Post[] = [
  {
    imgSrc:
      "https://github.com/NicolasSampaio/Portoflio/blob/master/web/src/assets/this.PNG?raw=true",
    title: "Old Portfolio",
    description: "My portfolio. Made with react and tailwind.",
    githubUrl: "https://github.com/NicolasSampaio/Portoflio",
    hostedAppUrl: "https://nicolassampaio.vercel.app/portfolio",
  },
  {
    imgSrc:
      "https://github.com/NicolasSampaio/Portoflio/blob/master/web/src/assets/origamid%20port.PNG?raw=true",
    title: "Origamid Portfolio",
    description: "Just a simple static webpage",
    githubUrl: "https://github.com/NicolasSampaio/Origamid-PortfolioTemplate",
    hostedAppUrl:
      "https://nicolassampaio.github.io/Origamid-PortfolioTemplate/",
  },
  {
    imgSrc:
      "https://github.com/NicolasSampaio/Portoflio/blob/master/web/src/assets/frontend.PNG?raw=true",
    title: "FrontEndMentor-QR-Code-Component",
    description:
      "First challenge from FrontEndMentor, I intend to do a lot more",
    githubUrl:
      "https://github.com/NicolasSampaio/FrontEndMentor-QR-Code-Component",
    hostedAppUrl:
      "https://nicolassampaio.github.io/FrontEndMentor-QR-Code-Component/",
  },
  {
    imgSrc:
      "https://github.com/NicolasSampaio/Portoflio/blob/master/web/src/assets/nlw.PNG?raw=true",
    title: "NLW Together",
    description:
      "A simple website where you can enter a specific room and make a question. The hoster can choose wich question he will read",
    githubUrl: "https://github.com/NicolasSampaio/NLW-Together-ReactJS",
    hostedAppUrl: "https://letmeask-8a45d.web.app/",
  },
  {
    imgSrc:
      "https://github.com/NicolasSampaio/Portoflio/blob/master/web/src/assets/nlwReturn.PNG?raw=true",
    title: "NLW Return",
    description:
      "A chat for your webpage where the users can report bugs with a screenshot",
    githubUrl: "https://github.com/NicolasSampaio/NLW-Return",
    hostedAppUrl: "https://nicolassampaioreturn.vercel.app/",
  },
];

export const books: Post[] = [
  {
    imgSrc:
      "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",
    description: "",
    title: "Clean Code",
  },
  {
    imgSrc: "https://images-na.ssl-images-amazon.com/images/I/51uO-K+V5dL.jpg",
    description: "",
    title: "The Clean Coder",
  },
];
