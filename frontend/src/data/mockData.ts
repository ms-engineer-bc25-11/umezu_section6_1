
import { Profile, Skill, Work } from '../types';

export const mockProfile: Profile = {
  id: 1,
  name: "梅津 朗子",
  bio: "ミズエンジニアで学習中のフルスタックエンジニア志望です。TypeScriptやNext.jsを中心に開発しています。",
  imageUrl: "https://via.placeholder.com/150"
};

export const mockSkills: Skill[] = [
  { id: 1, name: "HTML/CSS", level: "Advanced" },
  { id: 2, name: "JavaScript", level: "Intermediate" },
  { id: 3, name: "TypeScript", level: "Intermediate" },
  { id: 4, name: "React", level: "Intermediate" },
  { id: 5, name: "Next.js", level: "Beginner" },
];