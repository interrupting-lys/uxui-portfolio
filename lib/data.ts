import { Project, PersonalInfo } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Lysa Sorkeo",
  title: "UX/UI Designer",
  bio: "I create intuitive digital experiences that bridge the gap between user needs and business goals.",
  email: "lysa@example.com",
  linkedin: "https://linkedin.com/in/lysasorkeo",
  profileImage: "/images/profile.jpg"
};

export const projects: Project[] = [
  {
    id: "1",
    slug: "saat-business-app",
    title: "Saat Business App",
    description: "Mobile app design for business owners to monitor machines and manage operations efficiently.",
    image: "/images/projects/saat-app.jpg",
    images: [
      "/images/projects/saat-app.jpg",
      "/images/projects/saat-app-2.jpg",
      "/images/projects/saat-app-3.jpg"
    ],
    tags: ["Mobile Design", "iOS/Android"],
    featured: true,
    year: "2024",
    duration: "3 months",
    role: "Lead UX/UI Designer",
    challenge: "Design a mobile app for Saat business owners to monitor machines and manage operations efficiently.",
    solution: "Created an intuitive dashboard with real-time monitoring, financial tracking, and streamlined business management tools.",
    impact: "Improved operational efficiency and simplified daily tasks, resulting in increased profitability.",
    client: "Saat Business"
  }
];