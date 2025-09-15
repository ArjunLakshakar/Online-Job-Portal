import { faCodiepie, faReadme, faUpwork } from "@fortawesome/free-brands-svg-icons"
import { faBook, faCode, faCodeBranch, faLocationDot, faSearch } from "@fortawesome/free-solid-svg-icons"
import { Certificate } from "tabler-icons-react"

export const searchFields=[
    
    {title: "Job Title", icon: faSearch , options: ['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'] },
    
    { title: "Location", icon: faLocationDot, options: ['Delhi', 'New York', 'San Francisco', 'London','Berlin', 'Tokyo', 'Sydney', 'Toronto'] },
    
    { title: "Skills", icon: faCode , options:["HTML", "CSS", "JavaScript", "React", "Angular", "Node.js", "Python", "Java", "Ruby", "PHP", "SQL", "MongoDB", "Post greSQL", "Git", "API Development", "Testing and Debugging", "Agile Methodologies", "DevOps", "AWS", "Azure", "Google Cloud"]}
]

export const talents = [
    {
      name: "Ravi Sharma",
      role: "Frontend Developer",
      company: "Google",
      topSkills: ["React", "CSS", "JavaScript"],
      about: "As a Frontend Developer at Google, I create intuitive and efficient web interfaces that prioritize user experience and performance.",
      expectedCtc: "₹30 - 40LPA",
      location: "Bangalore, India",
      image: "avatar2",
    },
    {
      name: "Priya Kapoor",
      role: "Backend Developer",
      company: "Microsoft",
      topSkills: ["Node.js", "Python", "SQL"],
      about: "Experienced Backend Developer at Microsoft, specializing in building scalable and secure server-side applications.",
      expectedCtc: "₹35 - 45LPA",
      location: "Hyderabad, India",
      image: "avatar3",
    },
    {
      name: "Aarav Gupta",
      role: "Full Stack Developer",
      company: "Amazon",
      topSkills: ["Angular", "Java", "MongoDB"],
      about: "Full Stack Developer with expertise in delivering end-to-end web solutions at Amazon.",
      expectedCtc: "₹40 - 50LPA",
      location: "Pune, India",
      image: "avatar4",
    },
    {
      name: "Ananya Verma",
      role: "Data Scientist",
      company: "Meta",
      topSkills: ["Python", "Machine Learning", "SQL"],
      about: "Data Scientist at Meta, turning complex data into actionable insights to drive business decisions.",
      expectedCtc: "₹50 - 60LPA",
      location: "Bangalore, India",
      image: "avatar5",
    },
    {
      name: "Karan Mehta",
      role: "UI/UX Designer",
      company: "Adobe",
      topSkills: ["Figma", "Sketch", "Prototyping"],
      about: "Creative UI/UX Designer at Adobe, passionate about designing user-centered digital experiences.",
      expectedCtc: "₹25 - 35LPA",
      location: "Mumbai, India",
      image: "avatar6",
    },
    {
      name: "Nisha Reddy",
      role: "Cloud Engineer",
      company: "IBM",
      topSkills: ["AWS", "Docker", "Kubernetes"],
      about: "Cloud Engineer at IBM, enabling businesses to adopt and scale cloud-native solutions.",
      expectedCtc: "₹40 - 50LPA",
      location: "Chennai, India",
      image: "avatar7",
    },
    {
      name: "Rohit Nair",
      role: "DevOps Engineer",
      company: "Netflix",
      topSkills: ["CI/CD", "Terraform", "Ansible"],
      about: "DevOps Engineer at Netflix, streamlining deployment pipelines and ensuring system reliability.",
      expectedCtc: "₹45 - 55LPA",
      location: "Delhi, India",
      image: "avatar8",
    },
    {
      name: "Sneha Patel",
      role: "Mobile App Developer",
      company: "Spotify",
      topSkills: ["Flutter", "Swift", "Kotlin"],
      about: "Mobile App Developer at Spotify, crafting seamless cross-platform app experiences.",
      expectedCtc: "₹30 - 40LPA",
      location: "Ahmedabad, India",
      image: "avatar9",
    },
    {
      name: "Vikram Singh",
      role: "AI Engineer",
      company: "Tesla",
      topSkills: ["TensorFlow", "Python", "Deep Learning"],
      about: "AI Engineer at Tesla, advancing autonomous systems with cutting-edge AI models.",
      expectedCtc: "₹60 - 70LPA",
      location: "Bangalore, India",
      image: "avatar10",
    },
    {
      name: "Meera Das",
      role: "Cybersecurity Analyst",
      company: "Cisco",
      topSkills: ["Penetration Testing", "Firewalls", "Incident Response"],
      about: "Cybersecurity Analyst at Cisco, safeguarding critical infrastructure against emerging threats.",
      expectedCtc: "₹35 - 45LPA",
      location: "Kolkata, India",
      image: "avatar11",
    },
    {
      name: "Arjun Choudhury",
      role: "Product Manager",
      company: "Uber",
      topSkills: ["Agile", "JIRA", "Roadmap Planning"],
      about: "Product Manager at Uber, driving product strategies to meet customer and market needs.",
      expectedCtc: "₹45 - 55LPA",
      location: "Pune, India",
      image: "avatar12",
    },
    {
      name: "Shreya Iyer",
      role: "Game Developer",
      company: "Epic Games",
      topSkills: ["Unreal Engine", "C++", "Game Design"],
      about: "Game Developer at Epic Games, creating immersive gaming experiences with cutting-edge tools.",
      expectedCtc: "₹30 - 40LPA",
      location: "Mumbai, India",
      image: "avatar13",
    },
    {
      name: "Manav Joshi",
      role: "AR/VR Developer",
      company: "Apple",
      topSkills: ["Unity", "C#", "3D Modeling"],
      about: "AR/VR Developer at Apple, designing next-gen augmented and virtual reality applications.",
      expectedCtc: "₹55 - 65LPA",
      location: "Hyderabad, India",
      image: "avatar14",
    },
    {
      name: "Neha Agrawal",
      role: "Blockchain Developer",
      company: "Coinbase",
      topSkills: ["Solidity", "Ethereum", "Smart Contracts"],
      about: "Blockchain Developer at Coinbase, building decentralized solutions for financial systems.",
      expectedCtc: "₹50 - 60LPA",
      location: "Bangalore, India",
      image: "avatar15",
    },
    {
      name: "Kabir Saxena",
      role: "Quality Assurance Engineer",
      company: "Zoom",
      topSkills: ["Testing Automation", "Jest", "Selenium"],
      about: "QA Engineer at Zoom, ensuring top-notch software quality and reliability.",
      expectedCtc: "₹30 - 40LPA",
      location: "Chennai, India",
      image: "avatar16",
    },
    {
      name: "Tanya Kapoor",
      role: "Database Administrator",
      company: "Oracle",
      topSkills: ["SQL", "Oracle DB", "Data Modeling"],
      about: "Database Administrator at Oracle, managing and optimizing large-scale database systems.",
      expectedCtc: "₹40 - 50LPA",
      location: "Pune, India",
      image: "avatar17",
    }
  ]

export const profiles = [
    {
      name: "Arjun Mehta",
      role: "Frontend Developer",
      company: "Google",
      location: "Bangalore, India",
      about: "Frontend Developer specializing in creating responsive and user-friendly web applications.",
      skills: ["React", "CSS", "JavaScript"],
      experience: [
        {
          title: "Frontend Developer",
          company: "Google",
          location: "Bangalore, India",
          startDate: "Jan 2020",
          endDate: "Present",
          description: "Developed and maintained web applications, focusing on performance and usability.",
        },
      ],
      certifications: [
        {
          name: "React Developer Certification",
          issuer: "Coursera",
          issueDate: "Dec 2019",
          certificateId: "RD12345",
        },
        {
          name: "JavaScript Mastery",
          issuer: "Udemy",
          issueDate: "Jun 2018",
          certificateId: "JS67890",
        },
      ],
    }  ,
    {
      name: "Riya Sharma",
      role: "Backend Developer",
      company: "Amazon",
      location: "Hyderabad, India",
      about: "Backend Developer with expertise in building scalable and secure server-side applications.",
      skills: ["Node.js", "Python", "SQL"],
      experience: [
        {
          title: "Backend Developer",
          company: "Amazon",
          location: "Hyderabad, India",
          startDate: "Mar 2018",
          endDate: "Present",
          description: "Designed and implemented RESTful APIs and optimized database performance.",
        },
      ],
      certifications: [
        {
          name: "AWS Solutions Architect",
          issuer: "Amazon Web Services",
          issueDate: "Jul 2021",
          certificateId: "AWS12345",
        },
        {
          name: "Python Programming",
          issuer: "edX",
          issueDate: "Sep 2017",
          certificateId: "PY56789",
        },
      ],
    },

    {
      name: "Kabir Verma",
      role: "Full Stack Developer",
      company: "Microsoft",
      location: "Noida, India",
      about: "Full Stack Developer skilled in developing both front-end and back-end systems.",
      skills: ["Angular", "Java", "MongoDB"],
      experience: [
        {
          title: "Full Stack Developer",
          company: "Microsoft",
          location: "Noida, India",
          startDate: "Jun 2019",
          endDate: "Present",
          description: "Built and deployed scalable full-stack applications.",
        },
      ],
      certifications: [
        {
          name: "Full Stack Development",
          issuer: "Udemy",
          issueDate: "Feb 2019",
          certificateId: "FSD34567",
        },
        {
          name: "Java Programming",
          issuer: "Oracle",
          issueDate: "May 2018",
          certificateId: "JAVA67890",
        },
      ],
    },
    
    {
      name: "Ananya Roy",
      role: "Data Scientist",
      company: "IBM",
      location: "Pune, India",
      about: "Data Scientist with a passion for transforming data into actionable insights.",
      skills: ["Python", "Machine Learning", "SQL"],
      experience: [
        {
          title: "Data Scientist",
          company: "IBM",
          location: "Pune, India",
          startDate: "Aug 2020",
          endDate: "Present",
          description: "Developed predictive models and performed data analysis to solve business problems.",
        },
      ],
      certifications: [
        {
          name: "Machine Learning Certification",
          issuer: "Coursera",
          issueDate: "Nov 2019",
          certificateId: "ML45678",
        },
        {
          name: "Data Science Professional",
          issuer: "IBM",
          issueDate: "Jan 2020",
          certificateId: "DSP56789",
        },
      ],
    },
    {
      name: "Rajesh Patel",
      role: "DevOps Engineer",
      company: "TCS",
      location: "Mumbai, India",
      about: "DevOps Engineer focused on improving deployment pipelines and automating workflows.",
      skills: ["CI/CD", "Docker", "Kubernetes"],
      experience: [
        {
          title: "DevOps Engineer",
          company: "TCS",
          location: "Mumbai, India",
          startDate: "Oct 2017",
          endDate: "Present",
          description: "Implemented CI/CD pipelines and optimized cloud infrastructure.",
        },
      ],
      certifications: [
        {
          name: "Docker Certified Associate",
          issuer: "Docker",
          issueDate: "Aug 2018",
          certificateId: "DCA78901",
        },
        {
          name: "Kubernetes Administrator",
          issuer: "CNCF",
          issueDate: "Feb 2020",
          certificateId: "K8S12345",
        },
      ],
    },
    {
      name: "Priya Gupta",
      role: "UI/UX Designer",
      company: "Zomato",
      location: "Gurgaon, India",
      about: "UI/UX Designer with a passion for creating user-friendly interfaces and experiences.",
      skills: ["Figma", "Sketch", "Prototyping"],
      experience: [
        {
          title: "UI/UX Designer",
          company: "Zomato",
          location: "Gurgaon, India",
          startDate: "May 2016",
          endDate: "Present",
          description: "Designed intuitive interfaces for web and mobile applications.",
        },
      ],
      certifications: [
        {
          name: "UX Design Certification",
          issuer: "Interaction Design Foundation",
          issueDate: "Jun 2018",
          certificateId: "UX56789",
        },
        {
          name: "Adobe XD Pro",
          issuer: "Adobe",
          issueDate: "Jan 2019",
          certificateId: "XD12345",
        },
      ],
    },
    {
      name: "Ishaan Malhotra",
      role: "Mobile App Developer",
      company: "Paytm",
      location: "Delhi, India",
      about: "Mobile App Developer skilled in cross-platform application development.",
      skills: ["Flutter", "Kotlin", "Swift"],
      experience: [
        {
          title: "Mobile App Developer",
          company: "Paytm",
          location: "Delhi, India",
          startDate: "Apr 2019",
          endDate: "Present",
          description: "Developed high-performing mobile applications with responsive designs.",
        },
      ],
      certifications: [
        {
          name: "Flutter Development Certification",
          issuer: "Google",
          issueDate: "Dec 2018",
          certificateId: "FLUTTER56789",
        },
        {
          name: "iOS Development Professional",
          issuer: "Apple",
          issueDate: "Mar 2017",
          certificateId: "IOS12345",
        },
      ],
    },
    {
      name: "Kavya Iyer",
      role: "AI Engineer",
      company: "Wipro",
      location: "Chennai, India",
      about: "AI Engineer working on cutting-edge artificial intelligence projects.",
      skills: ["TensorFlow", "Python", "Deep Learning"],
      experience: [
        {
          title: "AI Engineer",
          company: "Wipro",
          location: "Chennai, India",
          startDate: "Jul 2020",
          endDate: "Present",
          description: "Developed machine learning models for business process optimization.",
        },
      ],
      certifications: [
        {
          name: "Deep Learning Certification",
          issuer: "DeepLearning.ai",
          issueDate: "Oct 2019",
          certificateId: "DL56789",
        },
        {
          name: "AI Professional",
          issuer: "Microsoft",
          issueDate: "Jan 2020",
          certificateId: "AI78901",
        },
      ],
    },
    // Add additional profiles as needed following the same structure.
  ]

export const profile = 
  {
    name: "Arjun Mehta",
    role: "Frontend Developer",
    company: "Google",
    location: "Bangalore, India",
    about: "Frontend Developer specializing in creating responsive and user-friendly web applications.",
    skills: ["React", "CSS", "JavaScript"],
    experience: [
      {
        title: "Frontend Developer",
        company: "Google",
        location: "Bangalore, India",
        startDate: "Jan 2020",
        endDate: "Present",
        description: "Developed and maintained web applications, focusing on performance and usability.",
      },
      {
        title: "Data Scientist",
        company: "IBM",
        location: "Pune, India",
        startDate: "Aug 2020",
        endDate: "Present",
        description: "Developed predictive models and performed data analysis to solve business problems.",
      }
    ],
    certifications: [
      {
        name: "React Developer Certification",
        issuer: "Coursera",
        issueDate: "Dec 2019",
        certificateId: "RD12345",
      },
      {
        name: "JavaScript Mastery",
        issuer: "Udemy",
        issueDate: "Jun 2018",
        certificateId: "JS67890",
      },
    ],
  }
