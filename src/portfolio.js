import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hemanth Thaluru",
  title: "Hi all, I'm Hemanth",
  subTitle: emoji(
    // "A passionate Full Stack Software Developer 🚀 having an experience of building Web with JavaScript / Angular /Reactjs / Nodejs / .NET and some other cool libraries and frameworks."
    "A passionate Full Stack Software Developer 🚀 with experience in JavaScript, Angular, React.js, Node.js, .NET, and other frameworks. I am enthusiastic about coding and enjoy creating innovative solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1F6TrlKMmjzKsrAFWYjjuBlIF-y6U23Hi/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Hemanth-Thaluru",
  linkedin: "https://www.linkedin.com/in/hemanththaluru/",
  leetcode: "https://leetcode.com/hemanththaluru/",
  kaggle: "https://www.kaggle.com/thaluruhemanth",
  medium: "https://medium.com/@canhemanth",
  gmail: "hemanththaluru7@gmail.com",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces along with Back end and Devops for your web applications"
    ),
    emoji(
      "⚡ Integration of third party services such as Azure/ AWS / fire base"
    )
  ],

  /*
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },

    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "SUNY Buffalo",
      logo: require("./assets/images/ub_logo.png"),
      subHeader: "Master of Science in Data Science",
      duration: "January 2023 - May 2024",
      desc: "Took Course work on",
      descBullets: ["Databases, AI, ML, Deep Learning"]
    },
    {
      schoolName: "Sastra University",
      logo: require("./assets/images/sastra_logo.png"),
      subHeader: "Bachelor of Technology in Mechanical Enineering",
      duration: "August 2017 - June 2021",
      desc: "Ranked top 10% in the program. "
      // descBullets: [""]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "Uniquode",
      companylogo: require("./assets/images/uniquode_logo.png"),
      date: "May 2022 – January 2023",
      desc: "Developed and designed scalable, distributed, low latency, and high throughput insurance management systems.",
      descBullets: [
        "Developed and deployed a notepad feature for agents, leading to a 13% reduction in cycle time",
        "Integrated Azure speech-to-text recognition models to enhance system capabilities.",
        "Implemented Docker and Kubernetes for microservices, boosting scalability and reliability.",
        "Fostered a more efficient and streamlined workflow through cutting-edge technology integration."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Cognizant",
      companylogo: require("./assets/images/cognizant.png"),
      date: "March 2021 – April 2022",
      desc: "Developed RESTful APIs using ASP.NET Web API to improve system communication and enhance data accessibility",
      descBullets: [
        "Collabrated with a team for high-performance product E2E from identifying system requirements to software implementation",
        "Deployed multi staged CI/CD pipeline with version locking and roll-back capabilities, performed code review, curated documentation"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/ub_bot.png"),
      projectName: "UB Bot",
      projectDesc:
        "Leveraged cutting-edge LangChain technology to perform comprehensive web scraping, collected data from various web pages of UB for a robust similarity search",
      footerLink: [
        {
          name: "Visit",
          url: "https://github.com/Hemanth-Thaluru/LLM_UB/tree/main/ice_breaker"
        }
      ]
    },
    {
      image: require("./assets/images/snake_relearn.jpeg"),
      projectName: "Snake ReLearn",
      projectDesc:
        "Changed the classic Snake game using cutting-edge deep reinforcement learning techniques",
      footerLink: [
        {
          name: "Visit",
          url: "https://github.com/Hemanth-Thaluru/reinforcement_learning"
        }
      ]
    },
    {
      image: require("./assets/images/colorizer.jpeg"),
      projectName: "Colorizer",
      projectDesc:
        "Incorporates deep learning techniques to understand and predict reliable colors for different elements in an image",
      footerLink: [
        {
          name: "Visit",
          url: "https://huggingface.co/spaces/hemanth-thaluru/sdm-image-colorization-prj"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Microsoft Certified Azure Developer Associate",
      subtitle:
        "Earned proficiency in designing and building scalable applications using Azure services, mastering SDKs and APIs.",
      image: require("./assets/images/az-201.png"),
      imageAlt: "Azure Developer Associate",
      footerLink: [
        {
          name: "Badge",
          url: "https://www.credly.com/badges/6bb9af1d-6abe-4ce3-b62d-e9883e9df07e/public_url"
        },
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1GRfh0SmGPd8bj3tLWA1khG0xThjd9xv8/view?usp=drive_link"
        },
        {
          name: "Passed Exam",
          url: "https://learn.microsoft.com/en-us/credentials/certifications/exams/az-204/"
        }
      ]
    },
    {
      title: "Microsoft Certified Azure Data Scientist Associate",
      subtitle:
        "Proficiently applied machine learning techniques, statistical models, and data analytics to derive valuable insights.",
      image: require("./assets/images/dp_100.png"),
      imageAlt: "Azure Data Scientist Associate",
      footerLink: [
        {
          name: "Badge",
          url: "https://www.credly.com/badges/87fb5d97-049e-4e3e-8ed3-84059159ef46/public_url"
        },
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1mMvkwArTbFbAa8VAz3SVUIDLC4Kai3JE/view?usp=drive_link"
        },
        {
          name: "Passed Exam",
          url: "https://learn.microsoft.com/en-us/credentials/certifications/exams/dp-100/"
        }
      ]
    },
    {
      title: "Microsoft Certified PowerBI Data Analyst",
      subtitle:
        "Mastered data analysis and transformation using Power Query and DAX, contributing to informed decision-making.",
      image: require("./assets/images/dp_100.png"),
      imageAlt: "PowerBI Data Analyst",
      footerLink: [
        {
          name: "Badge",
          url: "https://www.credly.com/badges/0ef0a840-c5c0-45c0-b953-80dbd9577d03/public_url"
        },
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/19ERigVsx9RcZJZqqItCb-UHHLthblGXL/view?usp=drive_link"
        },
        {
          name: "Passed Exam",
          url: "https://learn.microsoft.com/en-us/credentials/certifications/power-bi-data-analyst-associate/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@canhemanth/the-art-of-feature-engineering-sculpting-data-for-prediction-a5c1ffe6b5a1",
      title: "The Art of Feature Engineering: Sculpting Data for Prediction",
      description:
        "Why Feature Engineering is not just a mundane step in machine learning, but a captivating art that adds depth and insight to raw data..."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "hemanththaluru7@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
