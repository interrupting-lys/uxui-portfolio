export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  images: string[]; // Multiple screenshots
  tags: string[];
  link?: string;
  featured?: boolean;
  year: string;
  duration: string;
  role: string;
  challenge: string;
  solution: string;
  impact: string;
  client?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  linkedin: string;
  profileImage: string;
}