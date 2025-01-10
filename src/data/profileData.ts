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
        "Served as a Backend Developer for Typo, a cutting-edge project creating a crypto coin on the Solana blockchain. The coin is integrated with a network of Twitter bots, each with distinct personalities, capable of mass-replying to tweets. Designed and implemented an internal web platform to control AI-driven bot interactions, enabling seamless management of mass replies and account behavior. Leveraged Docker for deployment efficiency, with a scalable architecture combining a Vercel frontend and Railway backend. The project showcases innovation in AI, blockchain, and social media automation.",
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
        "Co-founded and led full-stack development for Statpass, a React Native iOS app focused on delivering a polished and intuitive user experience. Designed and implemented scalable backend APIs using Firebase for data storage and Algolia for efficient search functionality. Built and deployed a visually compelling landing page using Next.js and Tailwind CSS, which significantly boosted user engagement and sign-ups. Played a critical role in launching the app on the iOS App Store, continuously delivering updates and new features to enhance user satisfaction and app performance.",
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
        "Developed a robust custom file server using Flask, providing secure storage and retrieval of images, videos, and personal files. The server was deployed on AWS, with secure communication established via a WireGuard VPN tunnel to ensure encrypted data transmission across devices. Leveraged hashing mechanisms for unique file identification and caching to optimize preview loading times. Designed a 24/7 operational server setup with RAID 1 configuration using dual 8TB drives for data redundancy and reliability.",
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
      description:
        "Built a modern, interactive Minesweeper game with a seamless user experience using React, TypeScript, HTML, and CSS. Implemented a Depth First Search algorithm to optimize gameplay logic, enhancing performance and responsiveness. Managed the project using GitHub to showcase maintainable and collaborative coding practices, while consistently refining the game's design and functionality.",
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
        "Created a versatile manga crawler using Python, capable of scraping manga content from various websites and consolidating it into organized PDF files by chapter. Enhanced efficiency through multithreading, allowing simultaneous scraping of multiple chapters. Designed the code modularly to accommodate future updates and variations, ensuring compatibility with different website structures and formats.",
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
      description:
        "Designed and implemented a captcha solver using TensorFlow's machine learning models. Manually labeled 1,511 images using LabelImg to create a robust training dataset. Experimented with various TensorFlow Model Zoo architectures, determining Faster RCNN Inception V2 as the optimal model for its accuracy and efficiency. Successfully trained and deployed the model, achieving over 90% accuracy in solving captchas, and generated a detection graph for real-world applications.",
      images: [
        assetPath("/assets/captcha_solver/unsolved_captcha_1.png"),
        assetPath("/assets/captcha_solver/unsolved_captcha_2.png"),
        assetPath("/assets/captcha_solver/solved_captcha_1.jpg"),
      ],
    },
  ],
};
