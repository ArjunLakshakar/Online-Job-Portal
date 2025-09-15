import { faPhoenixFramework, faResearchgate, faSquareUpwork, faUpwork } from "@fortawesome/free-brands-svg-icons";
import { faClock, faMap, faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase, faBullhorn, faChargingStation, faChartLine, faCodeBranch, faCoins, faFileAlt, faHandshake, faKeyboard, faLocation, faLocationArrow, faLocationCrosshairs, faLocationDot, faLocationPin, faLocationPinLock, faMapLocation, faMapPin, faPaperPlane, faPencilRuler, faPenRuler, faSearch, faTachometerAverage, faTimeline, faTimes, faUserTie, faUserTimes } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const companies = ["Google","Amazon","Figma","Netflix","Meta","Microsoft","Spotify","Accenture","Adobe","IBM","Tesla"];

// export const jobCategory = [
//     {
//         "name": "Sales",
//         "desc": "Products and services to customers",
//         "jobs": "500",
//         "icon": <FontAwesomeIcon src={faChartLine}/> // Represents growth and sales.
//     },
//     {
//         "name": "Finance",
//         "desc": "Manage financial records and transactions",
//         "jobs": "700",
//         "icon": <FontAwesomeIcon src={faCoins}/> // Represents money and finance.
//     },
//     {
//         "name": "Human Resource",
//         "desc": "Recruit, manage, and support company employees",
//         "jobs": "600",
//         "icon": <FontAwesomeIcon src={faUserTie}/> // Represents professionalism and HR.
//     },
//     {
//         "name": "Digital Marketing",
//         "desc": "Promote brands online with marketing strategies",
//         "jobs": "1k",
//         "icon": <FontAwesomeIcon src={faBullhorn}/> // Represents marketing and promotion.
//     },
//     {
//         "name": "Web Developer",
//         "desc": "Build and maintain websites for clients",
//         "jobs": "2k",
//         "icon": <FontAwesomeIcon src={faCodeBranch}/> // Represents coding and web development.
//     },
//     {
//         "name": "Data Entry",
//         "desc": "Input data into systems accurately and efficiently",
//         "jobs": "1k",
//         "icon": <FontAwesomeIcon src={faKeyboard}/> // Represents typing and data entry.
//     },
//     {
//         "name": "UI-UX Designer",
//         "desc": "User Interfaces and enhance user experience",
//         "jobs": "1k",
//         "icon": <FontAwesomeIcon src={faPenRuler}/> // Represents design and creativity.
//     }
// ];

export const jobCategory = [
    {
        "name": "Sales",
        "desc": "Products and services to customers",
        "jobs": "500",
        "icon": faChartLine
    },
    {
        "name": "Finance",
        "desc": "Manage financial records and transactions",
        "jobs": "700",
        "icon": faCoins
    },
    {
        "name": "Human Resource",
        "desc": "Recruit, manage, and support company employees",
        "jobs": "600",
        "icon": faUserTie
    },
    {
        "name": "Digital Marketing",
        "desc": "Promote brands online with marketing strategies",
        "jobs": "1k",
        "icon": faBullhorn
    },
    {
        "name": "Web Developer",
        "desc": "Build and maintain websites for clients",
        "jobs": "2k",
        "icon": faCode
    },
    {
        "name": "Data Entry",
        "desc": "Input data into systems accurately and efficiently",
        "jobs": "1k",
        "icon": faKeyboard
    },
    {
        "name": "UI-UX Designer",
        "desc": "User Interfaces and enhance user experience",
        "jobs": "1k",
        "icon": faPencilRuler
    }
]

export const work = [
    {
      "name": "Build Your Resume",
      "desc": "Create a standout resume with your skills.",
      "icon": faFileAlt // Represents creating or managing a resume
    },
    {
      "name": "Apply for Job",
      "desc": "Find and apply for jobs that match your skills.",
      "icon": faPaperPlane // Represents sending job applications
    },
    {
      "name": "Get Hired",
      "desc": "Connect with employers and start your new job.",
      "icon": faHandshake // Represents connecting with employers
    }
  ];
  
export const testimonials = [
    {
        "name": "Arjun Lakshkar",
        "testimonial": "This job portal made job search easy and quick. Recommended to all job seekers!",
        "rating": 3
    },
    {
        "name": "Aaman Pansare",
        "testimonial": "A fantastic experience! Found my dream job within a week of using this portal.",
        "rating": 5
    },
    {
        "name": "Pranav",
        "testimonial": "The interface is smooth, but job suggestions could be more accurate.",
        "rating": 4
    },
    {
        "name": "Nisha Sharma",
        "testimonial": "I love the filters. It saved me so much time finding relevant jobs!",
        "rating": 5
    }
    // {
    //     "name": "Amit Kumar",
    //     "testimonial": "Good platform, but there are too many irrelevant notifications.",
    //     "rating": 3
    // },
    // {
    //     "name": "Sneha Roy",
    //     "testimonial": "Great portal for freshers! I got my first job here.",
    //     "rating": 5
    // },
    // {
    //     "name": "Rajesh Mehta",
    //     "testimonial": "Useful platform with a variety of jobs available.",
    //     "rating": 4
    // },
    // {
    //     "name": "Karan Singh",
    //     "testimonial": "Could improve customer support, but overall, it's good.",
    //     "rating": 3
    // },
    // {
    //     "name": "Meera Iyer",
    //     "testimonial": "The job alerts were perfect. Found what I was looking for.",
    //     "rating": 4
    // },
    // {
    //     "name": "Ankit Tiwari",
    //     "testimonial": "An average platform, needs better features for professionals.",
    //     "rating": 3
    // },
    // {
    //     "name": "Komal Desai",
    //     "testimonial": "Extremely user-friendly! I recommend it to all my friends.",
    //     "rating": 5
    // },
    // {
    //     "name": "Manoj Gupta",
    //     "testimonial": "The search function can be improved, but I got a decent job through it.",
    //     "rating": 4
    // },
    // {
    //     "name": "Pooja Reddy",
    //     "testimonial": "Loved the personalized job recommendations. Very effective!",
    //     "rating": 5
    // },
    // {
    //     "name": "Akash Dubey",
    //     "testimonial": "A decent platform, but job postings should be updated more frequently.",
    //     "rating": 3
    // },
    // {
    //     "name": "Neha Kapoor",
    //     "testimonial": "Excellent for remote job opportunities. Highly satisfied!",
    //     "rating": 5
    // }
];

export const footerLinks = [
    { title: "Product", links:["Find Job","Find Company","Find Employee"]},
    { title: "Company", links:["About us","Contact us","Privacy Policy","Terms & Conditions"]},
    { title: "Support", links:["Help & Support","Feedback","FAQs"]}
]

export const dropdownData = [
    
    {title: "Job Title", icon: faSearch, options: ['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'] },
    
    {title: "Location", icon: faLocationDot , options: ['Delhi', 'New York', 'San Francisco', 'London','Berlin', 'Tokyo', 'Sydney', 'Toronto'] },
    
    {title: "Experience", icon: faBriefcase, options: ['Entry Level', 'Intermediate', 'Expert'] },
    
    { title: "Job Type", icon: faClock , options: ['Full Time', 'Part Time', 'Contract','Freelance', 'Internship'] }

]

export const jobList = [
    {
      jobTitle: "Product Designer",
      company: "Meta",
      applicants: 25,
      experience: "Entry Level",
      jobType: "Full-Time",
      location: "New York",
      package: "32 LPA",
      postedDaysAgo: 12,
      description: "Meta is seeking a Product Designer to join our team. You'll be working on designing user-centric interfaces for our blockchain wallet platform. This is an excellent opportunity for entry-level designers to grow their skills in a dynamic environment.",
    },
    {
      jobTitle: "Sr. UX Designer",
      company: "Netflix",
      applicants: 14,
      experience: "Expert",
      jobType: "Contract",
      location: "California",
      package: "50 LPA",
      postedDaysAgo: 7,
      description: "Netflix is looking for a Senior UX Designer to lead design strategy and execution. Work on shaping the future of entertainment.",
    },
    {
      jobTitle: "Software Engineer",
      company: "Google",
      applicants: 30,
      experience: "Mid Level",
      jobType: "Full-Time",
      location: "Seattle",
      package: "45 LPA",
      postedDaysAgo: 5,
      description: "Google is hiring talented software engineers to work on scalable systems and cutting-edge technologies.",
    },
    {
      jobTitle: "Data Scientist",
      company: "Amazon",
      applicants: 20,
      experience: "Mid Level",
      jobType: "Full-Time",
      location: "Chicago",
      package: "40 LPA",
      postedDaysAgo: 3,
      description: "Amazon is seeking a Data Scientist to provide insights for business decisions across various domains.",
    },
    {
      jobTitle: "Frontend Developer",
      company: "Apple",
      applicants: 18,
      experience: "Entry Level",
      jobType: "Full-Time",
      location: "San Francisco",
      package: "35 LPA",
      postedDaysAgo: 10,
      description: "Join Apple as a Frontend Developer to create delightful web experiences for millions of users worldwide.",
    },
    {
      jobTitle: "Backend Engineer",
      company: "Microsoft",
      applicants: 22,
      experience: "Mid Level",
      jobType: "Full-Time",
      location: "Redmond",
      package: "40 LPA",
      postedDaysAgo: 8,
      description: "Microsoft is hiring Backend Engineers to build robust server-side systems for global-scale services.",
    },
    {
      jobTitle: "AI Researcher",
      company: "OpenAI",
      applicants: 12,
      experience: "Expert",
      jobType: "Full-Time",
      location: "Remote",
      package: "60 LPA",
      postedDaysAgo: 2,
      description: "OpenAI is looking for researchers to advance state-of-the-art AI solutions for real-world problems.",
    },
    {
      jobTitle: "Marketing Manager",
      company: "Tesla",
      applicants: 16,
      experience: "Mid Level",
      jobType: "Full-Time",
      location: "Austin",
      package: "38 LPA",
      postedDaysAgo: 6,
      description: "Tesla is hiring a Marketing Manager to drive branding and promotional strategies for cutting-edge products.",
    },
    {
      jobTitle: "Cybersecurity Analyst",
      company: "Cisco",
      applicants: 10,
      experience: "Mid Level",
      jobType: "Full-Time",
      location: "Boston",
      package: "36 LPA",
      postedDaysAgo: 11,
      description: "Cisco seeks a Cybersecurity Analyst to secure enterprise networks against evolving cyber threats.",
    },
    {
      jobTitle: "Blockchain Developer",
      company: "Coinbase",
      applicants: 19,
      experience: "Expert",
      jobType: "Remote",
      location: "Remote",
      package: "55 LPA",
      postedDaysAgo: 4,
      description: "Coinbase is hiring Blockchain Developers to design and implement decentralized solutions.",
    },
    {
      jobTitle: "Content Writer",
      company: "Adobe",
      applicants: 8,
      experience: "Entry Level",
      jobType: "Part-Time",
      location: "Los Angeles",
      package: "10 LPA",
      postedDaysAgo: 9,
      description: "Adobe is looking for a creative Content Writer to craft engaging content for digital platforms.",
    },
    {
      jobTitle: "HR Manager",
      company: "Spotify",
      applicants: 15,
      experience: "Mid Level",
      jobType: "Full-Time",
      location: "Berlin",
      package: "28 LPA",
      postedDaysAgo: 13,
      description: "Spotify seeks an HR Manager to lead recruitment and employee engagement initiatives globally.",
    },
    {
      jobTitle: "Mobile App Developer",
      company: "Uber",
      applicants: 26,
      experience: "Mid Level",
      jobType: "Full-Time",
      location: "New York",
      package: "39 LPA",
      postedDaysAgo: 6,
      description: "Uber is hiring Mobile App Developers to improve the experience of its ride-hailing platform.",
    },
    {
      jobTitle: "Cloud Architect",
      company: "AWS",
      applicants: 23,
      experience: "Expert",
      jobType: "Full-Time",
      location: "San Diego",
      package: "65 LPA",
      postedDaysAgo: 5,
      description: "AWS is looking for Cloud Architects to design scalable cloud solutions for enterprise customers.",
    },
    {
      jobTitle: "Game Designer",
      company: "Riot Games",
      applicants: 18,
      experience: "Mid Level",
      jobType: "Contract",
      location: "Los Angeles",
      package: "37 LPA",
      postedDaysAgo: 7,
      description: "Join Riot Games as a Game Designer and work on creating immersive experiences for players.",
    },
  ];

  
export default companies

