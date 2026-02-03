export interface Profile {
  id: number;
  name: string;
  bio: string;
  imageUrl?: string;
}

export interface Skill {
  id: number;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface Work {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
  technologies: string[]; // 使用した技術スタック（React, TypeScript, Prismaなど）
}