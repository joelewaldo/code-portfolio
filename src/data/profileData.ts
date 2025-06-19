const assetPath = (path: string) => path;

export const profileData = {
  name: "Joel Ewaldo",
  title: "Full Stack Software Engineer",
  currentPosition: "DevOps Intern @ Compassion International",
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
      description: [
        "Served as Backend Developer for crypto coin project on Solana blockchain",
        "Designed internal web platform to control AI-driven Twitter bot interactions",
        "Enabled mass-reply functionality with distinct bot personalities for social media automation",
        "Leveraged Docker for deployment with scalable Vercel frontend and Railway backend architecture",
        "Showcased innovation in AI, blockchain, and social media automation technologies",
      ],
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
      description: [
        "Co-founded and led full-stack development for React Native iOS app",
        "Designed scalable backend APIs using Firebase and Algolia for efficient search functionality",
        "Built compelling landing page with Next.js and Tailwind CSS boosting user engagement",
        "Successfully launched on iOS App Store with continuous feature updates",
        "Delivered polished user experience focused on intuitive design and performance",
      ],
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
      description: [
        "Developed robust file server using Flask for secure storage and retrieval of media files",
        "Deployed on AWS with WireGuard VPN tunnel for encrypted data transmission",
        "Implemented hashing mechanisms for unique file identification and optimized caching",
        "Designed 24/7 operational setup with RAID 1 configuration using dual 8TB drives",
        "Ensured data redundancy and reliability for personal file management",
      ],
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
      description: [
        "Built modern interactive Minesweeper game using React, TypeScript, HTML, and CSS",
        "Implemented Depth First Search algorithm for optimized gameplay logic and performance",
        "Managed project with GitHub showcasing maintainable and collaborative coding practices",
        "Designed seamless user experience with responsive interface and smooth interactions",
        "Consistently refined game design and functionality for enhanced player engagement",
      ],
      images: [
        assetPath("/assets/minesweeper/minesweeper-1.png"),
        assetPath("/assets/minesweeper/minesweeper-2.png"),
        assetPath("/assets/minesweeper/minesweeper-3.png"),
      ],
      link: "https://github.com/joelewaldo/minesweeper",
    },
    {
      name: "Manga Crawler",
      description: [
        "Created versatile manga crawler using Python for content scraping from multiple websites",
        "Consolidated scraped content into organized PDF files by chapter for easy reading",
        "Enhanced efficiency through multithreading for simultaneous chapter scraping",
        "Designed modular code architecture for future updates and website compatibility",
        "Ensured adaptability to different website structures and formats",
      ],
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
      description: [
        "Designed captcha solver using TensorFlow machine learning models with 90%+ accuracy",
        "Manually labeled 1,511 images using LabelImg to create robust training dataset",
        "Experimented with TensorFlow Model Zoo architectures, selecting Faster RCNN Inception V2",
        "Successfully trained and deployed model with detection graph for real-world applications",
        "Achieved optimal balance of accuracy and efficiency for automated captcha solving",
      ],
      images: [
        assetPath("/assets/captcha_solver/unsolved_captcha_1.png"),
        assetPath("/assets/captcha_solver/unsolved_captcha_2.png"),
        assetPath("/assets/captcha_solver/solved_captcha_1.jpg"),
      ],
    },
  ],
  experience: [
    {
      name: "Compassion International",
      jobTitle: "DevOps Intern",
      description: [
        "Currently working as a DevOps Intern contributing to mission-driven technology solutions",
        "Supporting infrastructure and deployment processes for global child sponsorship platform",
        "Collaborating with development teams to improve CI/CD pipelines and system reliability",
        "Gaining hands-on experience with cloud technologies and DevOps best practices",
        "Contributing to technology that connects sponsors with children in need worldwide",
      ],
      images: [],
      link: "https://www.compassion.com/",
    },
    {
      name: "Language and Learning Analytics Lab - UCI",
      jobTitle: "Software Developer",
      description: [
        "Developed interactive web dashboard using Next.js, Bun, React, and Tailwind CSS for AI-collaboration experiment management",
        "Engineered real-time chat rooms with Flask and Socket.IO for participant and AI agent interactions",
        "Built Django API endpoints with Clerk authentication and PostgreSQL for secure data storage",
        "Implemented dynamic experiment workflows assigning participants to control and AI-augmented groups",
        "Deployed on AWS using 3 EC2 instances and RDS database with Terraform and Ansible automation",
      ],
      images: [
        assetPath("/assets/lala/lala-1.png"),
        assetPath("/assets/lala/lala-2.png"),
        assetPath("/assets/lala/lala-3.png"),
      ],
      link: "https://sites.uci.edu/lalalab/",
    },
  ],
  freelancing: [
    {
      name: "Snowbliss Cafe",
      description: [
        "Delivered fully functional catering website within tight 2-day deadline",
        "Built responsive frontend using Next.js, React, TypeScript, and Tailwind CSS",
        "Set up PostgreSQL backend on Supabase with comprehensive SQL tables and queries",
        "Integrated Stripe for secure online payment processing and pre-orders",
        "Deployed on Railway with real-time menu updates and boosted weekend customer engagement",
      ],
      images: [
        assetPath("/assets/snowbliss/snowbliss-1.png"),
        assetPath("/assets/snowbliss/snowbliss-2.png"),
        assetPath("/assets/snowbliss/snowbliss-3.png"),
        assetPath("/assets/snowbliss/snowbliss-4.png"),
      ],
      link: "https://snowbliss.cafe/",
    },
  ],
};
