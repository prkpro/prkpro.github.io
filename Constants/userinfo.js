//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import {
  faGithubAlt,
  faLinkedinIn,
  faMediumM,
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

export const userinfo = {
  logoText: "Prakash Pandey", //This text is visible on your navbar and footer like your logo.
  contact: {
    email: "prakashpro86@gmail.com", //It is always a good idea to mention your email on your website. Good platform to communicate.
    phone: "", //Phone number is optional, if you dont want it, consider leaving it blank .
    countrycode: "", //It is advisable to add the country code incase you mention your contact number.
  },
  socials: [
    //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
    //more icons are imported above, use as you like them.
    { type: "github", link: "https://github.com/prkashp/", icon: faGithubAlt },
    {
      type: "linkedin",
      link: "https://www.linkedin.com/in/prkaashpaandey/",
      icon: faLinkedinIn,
    },
    {
      type: "medium",
      link: "https://medium.com/@prakashpro86",
      icon: faMediumM,
    },
  ],
  greeting: {
    //this text goes on your landing page
    title: "Hello there, I am Prakash.",
    subtitle:
      "A Cloud and Data Engineer specialized in batch and real-time data pipelines",
  },
  capabilities: [
    //this text goes on your home page in table format.
    //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
    //For aesthetics, it is advisable for you to keep similar number of skills in each category
    {
      category: "Cloud", // eg.frontend, backend, devops etc
      skills: ["AWS Lambda", "S3", "EC2", "IAM"], //eg. react, html, python etc.
    },
    {
      category: "Streaming",
      skills: ["Kafka", "Javascript", "Bash", "KSQL"],
    },
    {
      category: "Batch",
      skills: ["Spark", "Python", "Snowflake", "SQL"],
    },
    {
      category: "Others",
      skills: ["Docker", "Airflow", "Gitlab CI", "Git"],
    },
  ],
  about: {
    //this text goes at the bottom of your home page.
    content:
      "With over 5 years of robust experience in data and cloud engineering, I specialize in developing data-intensive applications, tackling complex architectural and scalability challenges, and designing and testing robust data software systems. Passionate about leveraging cutting-edge development tools and methodologies to deliver scalable and innovative solutions that drive business growth. Beyond data engineering, I enjoy exploring new technologies, writing blogs, playing instruments, and of course, cracking jokes.",
    resume: "/", //link your resume here. it can be drive link or any other link
  },
  education: {
    visible: true, //set this to false if you want to omit this section
    educationList: [
      {
        time: "Aug 2014 - Jun 2018",
        title: "Bachelor in Electronics and Communication Engineering",
        organization: "Lovely Professional University",
        description: "3.38 GPA",
      },
      {
        time: "Jan - Jun 2015",
        title: "Elective Course",
        organization: "IIT Madras",
        description: "Programming, Data Structures and Algorithm in Python",
      },
      {
        time: "Aug 2013 - Jun 2014",
        title: "Intermediate",
        organization: "Army Public School",
        description: "8.38 CGPA",
      },
    ],
  },
  experience: {
    visible: true, //set this to false if you want to omit this section
    experienceList: [
      {
        company: "Alten Calsoft Labs",
        companylogo:
          "https://image.pitchbook.com/37zTcchdp12mVHgK7RmOUjAeGUN1653648572143_200x200",
        position: "Senior Software Engineer",
        time: "Apr 2023 - Sept 2024",
        description:
          "Owner of Core data processing frameworks utilizing Kafka and Snowflake used by 500+ tables and innovation stories. Handled multiple semi-structured data sources with SLA of less than 3 hours.",
      },
      {
        company: "Ugam Solutions",
        companylogo:
          "https://image4.owler.com/logo/ugam-solutions_owler_20190715_143039_large.jpg",
        position: "Software Engineer",
        time: "Dec 2021 - Mar 2023",
        description:
          "Designing intuitive user interfaces and robust backend APIs for optimized performance and seamless integration.",
      },
      {
        company: "Denave",
        companylogo:
          "https://scontent.flko8-1.fna.fbcdn.net/v/t39.30808-6/324417586_494829142765422_6861223442704044361_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=dgA3gBPFl0AQ7kNvgFAx9G4&_nc_ht=scontent.flko8-1.fna&_nc_gid=AOAo6tCFAI8kPT04SaWIEe0&oh=00_AYABtdFM99QIKiQhOHt9zuMPIW9CzM20Pienpyr6WsLYog&oe=67072758",
        position: "Data Analyst",
        time: "Feb 2020 - Dec 2021",
        description:
          "Owned core kafka streams processing module with ultra-low SLA of 5 secs and developed data models in Snowflake for aggregate reports.",
      },
      {
        company: "Wipro",
        companylogo:
          "https://w7.pngwing.com/pngs/108/569/png-transparent-wipro-business-national-retail-federation-the-propshop-exhibition-event-management-company-chief-executive-business-text-service-people.png",
        position: "Database Analyst",
        time: "Nov 2018 - Feb 2020",
        description:
          "Developed automation data migration pipelines with processing jobs in Spark.",
      },
    ],
  },
  blogs: {
    //set this to false if you want to omit this section
    visible: true,
  },
};

export const headings = {
  //you can customise all the headings here.
  workHomePage: "Work",
  workMainPage: "Projects",
  capabilities: "Capabilities",
  about: "About Me",
  education: "Education",
  experience: "Experiences",
  blogs: "I write!",
  contact: "Contact Me",
};

export const ctaTexts = {
  //you can customise all the cta texts here.
  landingCTA: "My work",
  workCTA: "View All",
  capabCTA: "Get in Touch",
  educationCTA: "About Me",
  resumeCTA: "Resume",
  submitBTN: "Submit",
};
