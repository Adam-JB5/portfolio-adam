export interface Project {
  id: number;
  name: string;
  description: string;
  images: string[];
  skills: string[];
  link?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    name: 'Project 1',
    description: 'Description for Project 1',
    images: ['assets/images/projects/project1.png', 'assets/images/projects/project1-2.png'],
    skills: ['JavaScript', 'TypeScript', 'Angular'],
    link: 'https://example.com/project1'
  },
  {
    id: 2,
    name: 'Project 1',
    description: 'Description for Project 1',
    images: ['assets/images/projects/project1.png', 'assets/images/projects/project1-2.png'],
    skills: ['JavaScript', 'TypeScript', 'Angular'],
    link: 'https://example.com/project1'
  },
  {
    id: 3,
    name: 'Project 1',
    description: 'Description for Project 1',
    images: ['assets/images/projects/project1.png', 'assets/images/projects/project1-2.png'],
    skills: ['JavaScript', 'TypeScript', 'Angular'],
    link: 'https://example.com/project1'
  },
]