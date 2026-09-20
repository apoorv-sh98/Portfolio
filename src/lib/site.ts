import type { IconType } from "react-icons";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

export const site = {
  name: "Apoorv Sharma",
  role: "Software Developer",
  email: "apoorv.sh98@gmail.com",
  tagline:
    "I build reliable backends and thoughtful systems — and off the clock, I chase good coffee, trails, and new cities.",
  interests: [
    "System Architecture Design.",
    "Backend Engineering.",
    "Problem Solving.",
    "Coffee & Cafés.",
    "Astronomy.",
  ],
};

export type NavItem = { label: string; href: string };

export const professionalNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Resume", href: "/resume" },
];

export const personalHref = "/personal";

export type Social = { label: string; href: string; icon: IconType };

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/apoorv-sh98", icon: AiFillGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/apoorv-sh98/", icon: FaLinkedinIn },
  { label: "LeetCode", href: "https://leetcode.com/apoorv-sh98/", icon: SiLeetcode },
  { label: "Email", href: "mailto:apoorv.sh98@gmail.com", icon: HiOutlineMail },
];
