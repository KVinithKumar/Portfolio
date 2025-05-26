import { Project, Experience, Education, Skill } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Money Manager Application',
    description: 'Developed a full-stack financial management application using React and Node.js with secure user authentication. Implemented features allowing users to track expenses, manage finances efficiently, and download transaction records in PDF format.',
    technologies: ['React JS', 'Tailwind CSS', 'MongoDB', 'Node JS'],
    image: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg',
    link: '#',
    github: '#'
  },
  {
    id: '2',
    title: 'Wealth Map',
    description: 'Designed a web-based tool to visually map and track personal wealth, including income, expenses, and investments. Integrated interactive charts and dynamic dashboards to analyze financial growth and identify saving patterns.',
    technologies: ['React JS', 'Tailwind CSS', 'MongoDB', 'Node JS'],
    image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg',
    link: '#',
    github: '#'
  },
  {
    id: '3',
    title: 'Kitchen Hygiene Monitoring System',
    description: 'Developed an AI-based kitchen hygiene monitoring system using YOLOv8 and Roboflow that detects hygiene violations in real-time, securing 1st place among 52 teams in a national hackathon. Implemented computer vision models to identify unclean surfaces and improper food storage, achieving 90% detection accuracy in prototype testing.',
    technologies: ['YOLOv8', 'Roboflow', 'Computer Vision', 'Python'],
    image: 'https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg',
    link: '#',
    github: '#'
  },
  {
    id: '4',
    title: 'Todos Application',
    description: 'Built a task management app with filtering, completion tracking, and local storage for data persistence.',
    technologies: ['React', 'JavaScript', 'CSS'],
    image: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg',
    link: '#',
    github: '#'
  },
  {
    id: '5',
    title: 'Generative AI Chatbot',
    description: 'Developed an AI chatbot using NLP and Hugging Face models for dynamic and accurate responses.',
    technologies: ['Python', 'NLP', 'Hugging Face'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    link: '#',
    github: '#'
  },
  {
    id: '6',
    title: 'WikiSearch',
    description: 'Created a Wikipedia-powered search tool with real-time API calls, responsive UI, and structured search results.',
    technologies: ['JavaScript', 'Wiki API', 'HTML/CSS'],
    image: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg',
    link: '#',
    github: '#'
  },
  {
    id: '7',
    title: "Mama's Kitchen",
    description: 'Designed a food ordering responsive website with an interactive menu, seamless checkout, and secure payment integration.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
    link: '#',
    github: '#'
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'NxtWave',
    position: 'Teaching Assistant',
    duration: 'Jan 2025 – Present',
    description: 'Assisting students in full-stack development and resolving coding queries. Conducting doubt-clearing sessions and providing feedback.',
    link: 'https://portal.ccbp.in/teaching-assistant-profile?uid=kairamkonda'
  },
  {
    id: '2',
    company: 'Internshala',
    position: 'Student Partner',
    duration: '2024 – 2025',
    description: 'Promoted Internshala\'s training programs and internship opportunities. Organized events and workshops to connect students with internship opportunities.'
  },
  {
    id: '3',
    company: 'Codesoft',
    position: 'Virtual Internship in Python Programming',
    duration: '01/08/2024 to 30/08/2024',
    description: 'Certified by ISO and MSME',
    link: 'https://drive.google.com/file/d/1oS4g6XNhgNQnIJeT7St6m_ddxhFmcIGP/view'
  },
  {
    id: '4',
    company: 'Codesoft',
    position: 'Virtual Internship in Data Science',
    duration: '01/08/2024 to 30/08/2024',
    description: 'Certified by ISO and MSME',
    link: 'https://drive.google.com/file/d/1o9tL6q7jUDqhr6UCn8HmJ9YMoFhuFl5x/view'
  },
  {
    id: '5',
    company: 'AICTE AWS',
    position: 'AI-ML Virtual Internship',
    duration: 'January to March 2025',
    description: 'Completed AI-ML internship program',
    link: 'https://drive.google.com/file/d/1lv0oDuM6wGGnpjVd9fGRPq4wSfqDDcaL/view'
  }
];

export const education: Education[] = [
  {
    id: '1',
    institution: 'MLR Institute of Technology & Management',
    degree: 'Bachelor of Technology, Computer Science & Information Technology',
    duration: 'Expected May 2026',
    grade: 'CGPA: 8.77/10.0'
  },
  {
    id: '2',
    institution: 'NxtWave',
    degree: 'Full Stack Development',
    duration: '2022 – 2025'
  },
  {
    id: '3',
    institution: 'RIIJEE College, Kamareddy',
    degree: 'Mathematics, Physics, and Chemistry (MPC)',
    duration: '2022',
    grade: 'Grade: 92%'
  }
];

export const skills: Skill[] = [
  {
    category: 'Programming Languages',
    items: ['Python', 'C++']
  },
  {
    category: 'Frontend Development',
    items: ['React JS', 'JavaScript', 'Tailwind CSS', 'HTML']
  },
  {
    category: 'Backend Development',
    items: ['Node.js', 'Express.js']
  },
  {
    category: 'Database Systems',
    items: ['MongoDB', 'MySQL']
  },
  {
    category: 'Developer Tools',
    items: ['Git', 'Docker', 'VS Code', 'IntelliJ']
  },
  {
    category: 'AI/ML Technologies',
    items: ['YOLOv8', 'Roboflow', 'Computer Vision', 'Deep Learning']
  },
  {
    category: 'Other',
    items: ['DSA Problem Solving', 'Team Collaboration']
  }
];

export const achievements = [
  'National Hackathon Winner: Won among 52 teams for an AI-based kitchen hygiene solution using YOLOv8 and Roboflow.',
  'Industry Ready IRC 4.0 Certificate: Awarded by NxtWave Academy for software development skills.',
  'Completed ISO certified PGDCA (Post Graduate Diploma in Computer Application)'
];