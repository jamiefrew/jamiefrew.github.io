import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";

export const DATA = {
  name: "Jamie Frew",
  initials: "JF",
  url: "https://jamiefrew.github.io",
  location: "London, UK",
  locationLink: "https://www.google.com/maps/place/london",
  description:
    "Building Joli. Previously Growth @ Trail (acquired).",
  summary:
    "In 2021, I quit my job as Head of Growth at Trail (acquired by The Access Group) to go fulltime into building [Joli](https://joliapp.com), the creator marketing platform for hospitality. In the past, [I studied biological sciences at Liverpool](/#education), [spent six years scaling a hospitality tech startup](/#work), and [taught myself design and code](https://github.com/jamiefrew) along the way. Now we have 275+ brands, 60K+ content pieces, and 130M+ reach.",
  avatarUrl: "/me.jpg",
  skills: [
    { name: "Go", icon: Golang },
    { name: "Postgres", icon: Postgresql },
    { name: "React", icon: ReactLight },
    { name: "React Native", icon: ReactLight },
    { name: "Typescript", icon: Typescript },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "jamie.frew@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/jamiefrew",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jamiefrew/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:jamie.frew@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Joli",
      href: "https://joliapp.com",
      badges: [],
      location: "London, UK",
      title: "Co-Founder",
      logoUrl: "/joli.png",
      start: "July 2021",
      end: "Present",
      description:
        "The creator marketing platform for hospitality. 275+ brands across 47 cities, 60K+ content pieces, 130M+ people reached. Trusted by Heineken, GAIL'S, and Prezzo.",
    },
    {
      company: "Naggy",
      href: "https://naggy.so",
      badges: [],
      location: "London, UK",
      title: "Founder",
      logoUrl: "/naggy.webp",
      start: "2024",
      end: "Present",
      description:
        "A simple habit tracker with daily nudges. Built with Go, Expo, and React Native.",
    },
    {
      company: "Trail App",
      href: "https://trailapp.com",
      badges: ["Acquired by The Access Group"],
      location: "London, UK",
      title: "Head of Growth",
      logoUrl: "/trail.avif",
      start: "October 2019",
      end: "December 2021",
      description:
        "Work management app that helps hospitality businesses grow. Trusted by Wagamama, Leon, and Brewdog. Over 4,000 restaurants when it was acquired by The Access Group in 2021.",
    },
    {
      company: "Trail App",
      href: "https://trailapp.com",
      badges: [],
      location: "London, UK",
      title: "Customer Success",
      logoUrl: "/trail.avif",
      start: "September 2018",
      end: "September 2019",
      description:
        "80 restaurants when I joined, 3,500 when I left.",
    },
    {
      company: "Compass Group",
      href: "https://compass-group.com",
      badges: [],
      location: "UK",
      title: "Bar Manager",
      logoUrl: "/compass.png",
      start: "September 2014",
      end: "September 2016",
      description:
        "Global foodservice company across 40+ countries. Managed bars at the Rugby World Cup and Wimbledon.",
    },
    {
      company: "The New World Trading Company",
      href: "https://www.newworldtradingcompany.com",
      badges: [],
      location: "UK",
      title: "Mixologist",
      logoUrl: "/nwtc.png",
      start: "September 2013",
      end: "September 2015",
      description:
        "One of the UK's most awarded pub and bar groups. Smugglers Cove, The Florist, Botanist.",
    },
    {
      company: "Pizza Express",
      href: "https://www.pizzaexpress.com",
      badges: [],
      location: "UK",
      title: "Waiter",
      logoUrl: "/pizzaexpress.jpg",
      start: "August 2012",
      end: "September 2013",
      description:
        "Best pizza in London. No further questions.",
    },
  ],
  education: [
    {
      school: "University of Liverpool",
      href: "https://www.liverpool.ac.uk",
      degree: "BSc Cell Physiology 2:1 (Hons)",
      logoUrl: "/liverpool.png",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Joli",
      href: "https://joliapp.com",
      dates: "July 2021 - Present",
      active: true,
      description:
        "The creator marketing platform for hospitality. End-to-end solution for gifted collabs, paid collabs, and ad studio content. 8,000+ vetted creators, 50K+ content pieces, 100M+ reach.",
      technologies: [
        "Go",
        "GraphQL",
        "React Native",
        "React",
        "TypeScript",
        "PostgreSQL",
        "Python",
        "PyTorch",
        "Computer Vision",
      ],
      links: [
        {
          type: "Website",
          href: "https://joliapp.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/joli-project.jpg",
      video: "",
    },
    {
      title: "Naggy",
      href: "https://naggy.so",
      dates: "2024",
      active: true,
      description:
        "A habit-building app that helps you stay on track with gentle nudges.",
      technologies: [
        "Go",
        "GraphQL",
        "Expo",
        "React Native",
        "TypeScript",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://naggy.so",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/naggy-project.png",
      video: "",
    },
  ],
} as const;
