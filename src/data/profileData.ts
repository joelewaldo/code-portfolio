const assetPath = (path: string) => `/code-portfolio${path}`;

export const profileData = {
  name: "Joel Ewaldo",
  title: "Full Stack Software Engineer",
  email: "jewaldo03@gmail.com",
  github: "https://github.com/joelewaldo",
  linkedin: "https://linkedin.com/in/joel-ewaldo-291523201",
  location: "Irvine, California",
  degree: "B.S. Software Engineering",
  school: "University of California, Irvine",
  graduation: "2025",
  startups: [
    {
      name: "Typo",
      description:
        "Backend Developer for a project creating a crypto coin on the Solana blockchain tied to a network of Twitter bots with unique personalities capable of mass-replying to tweets; built the internal website for AI agent control, leveraging Docker for deployment, with a Vercel frontend and Railway backend.",
      images: [
        assetPath("/assets/typo/typo-bot-network-1.png"),
        assetPath("/assets/typo/typo-bot-network-2.png"),
        assetPath("/assets/typo/typo-dashboard-1.png"),
        assetPath("/assets/typo/typo-dashboard-2.png"),
        assetPath("/assets/typo/typo-tweet-example-1.png"),
      ],
      link: "https://typo.bot/whitepaper",
    },
    {
      name: "Statpass",
      description:
        "Co-founder and Full-stack Software Developer at One Dollar Summer, designing and developing a React Native iOS app, engineering scalable backend APIs with Firebase and Algolia, and deploying a landing page using Next.js and Tailwind, boosting user engagement and sign-ups.",
      images: [
        assetPath("/assets/statpass/statpass-website-1.png"),
        assetPath("/assets/statpass/statpass-app-1.png"),
        assetPath("/assets/statpass/statpass-app-2.png"),
      ],
      link: "https://statpass.app",
    },
  ],
  projects: [
    {
      name: "Custom File Server",
      description:
        "Developed a robust custom file server using Flask, enabling secure storage of images, videos, and personal files.",
      images: [
        assetPath("/assets/file_server/file-server-1.png"),
        assetPath("/assets/file_server/file-server-2.png"),
        assetPath("/assets/file_server/file-server-3.png"),
        assetPath("/assets/file_server/file-server-4.png"),
        assetPath("/assets/file_server/file-server-5.png"),
      ],
      link: "https://github.com/joelewaldo/file-server",
    },
    {
      name: "Minesweeper on the Web",
      description: "Built a modern Minesweeper game with smooth UX on the web.",
      images: [
        assetPath("/assets/minesweeper/minesweeper-1.png"),
        assetPath("/assets/minesweeper/minesweeper-2.png"),
        assetPath("/assets/minesweeper/minesweeper-3.png"),
      ],
      link: "https://github.com/joelewaldo/minesweeper",
    },
    {
      name: "Manga Crawler",
      description:
        "Created a manga scraper that scrapes various websites for manga content.",
      images: [
        assetPath("/assets/manga_crawler/manga-crawler-1.png"),
        assetPath("/assets/manga_crawler/manga-crawler-2.png"),
        assetPath("/assets/manga_crawler/manga-crawler-3.png"),
        assetPath("/assets/manga_crawler/manga-crawler-4.png"),
      ],
      link: "https://github.com/joelewaldo/manga-crawler",
    },
    {
      name: "Captcha Solver",
      description: "Created a captcha solver using machine learning models.",
      images: [
        assetPath("/assets/captcha_solver/unsolved_captcha_1.png"),
        assetPath("/assets/captcha_solver/unsolved_captcha_2.png"),
        assetPath("/assets/captcha_solver/solved_captcha_1.jpg"),
      ],
    },
  ],
};
