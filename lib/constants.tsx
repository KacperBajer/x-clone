import { ReactElement } from "react";
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";

export type SideBarLink = {
    name: string
    href: string
    icon: ReactElement
}

export const SideBarLinks: SideBarLink[] = [
    {
        name: 'Home',
        href: '/',
        icon: <IoMdHome style={{fontSize: '24px'}}  />
    },
    {
        name: 'Profile',
        href: '/profile',
        icon: <FaUser style={{fontSize: '24px'}}  />
    },
    {
        name: 'Search',
        href: '/search',
        icon: <FaSearch style={{fontSize: '24px'}}  />
    },
    {
        name: 'Premium',
        href: '/premium',
        icon: <MdWorkspacePremium style={{fontSize: '24px'}}  />
    },
]

export type User = {
  id: number;
  username: string;
  displayName: string;
  avatarUrl: string;
}

export type Post = {
  id: string;
  author: User;
  content: string;
  likes: number;
  retweets: number;
  comments: number;
  createdAt: string; 
  images: string[];
}

export const posts: Post[] = [
    {
      id: "1",
      author: {
        id: 1,
        username: "john_doe",
        displayName: "John Doe",
        avatarUrl: "https://pbs.twimg.com/profile_images/1851658043500396546/oAjkOIot_bigger.jpg",
      },
      content: "Exploring the new features of React 18! Hooks are amazing 🚀",
      likes: 124,
      retweets: 30,
      comments: 15,
      createdAt: "2024-11-24T14:00:00Z",
      images: ["https://pbs.twimg.com/media/GdUqJeEWkAAwWR1?format=jpg&name=small"],
    },
    {
      id: "2",
      author: {
        id: 2,
        username: "jane_smith",
        displayName: "Jane Smith",
        avatarUrl: "https://pbs.twimg.com/profile_images/1700086158812725248/3m2GgmXM_bigger.jpg",
      },
      content: "Just finished a 10k run! 🏃‍♀️ Feeling energized for the week ahead 💪",
      likes: 250,
      retweets: 40,
      comments: 20,
      createdAt: "2024-11-23T10:30:00Z",
      images: ["https://pbs.twimg.com/media/GdUPaFKXYAAsqmo?format=jpg&name=small", "https://pbs.twimg.com/media/Gb4Qi6YWAAAIifb?format=jpg&name=small", "https://pbs.twimg.com/media/GdUq1m0WMAAjfe7?format=jpg&name=360x360", "https://pbs.twimg.com/profile_images/1851658043500396546/oAjkOIot_bigger.jpg"],
    },
    {
      id: "3",
      author: {
        id: 3,
        username: "devguru",
        displayName: "Dev Guru",
        avatarUrl: "https://pbs.twimg.com/profile_images/1855931685197451264/go7sumpS_bigger.jpg",
      },
      content: "Fun fact: JavaScript was created in just 10 days. 🧠 What's your favorite JS fact?",
      likes: 310,
      retweets: 85,
      comments: 45,
      createdAt: "2024-11-22T08:15:00Z",
      images: [],
    },
    {
      id: "4",
      author: {
        id: 4,
        username: "artlover",
        displayName: "Art Lover",
        avatarUrl: "https://pbs.twimg.com/profile_images/1700086158812725248/3m2GgmXM_bigger.jpg",
      },
      content: "Check out my latest painting 🎨🌟",
      likes: 550,
      retweets: 120,
      comments: 90,
      createdAt: "2024-11-21T18:45:00Z",
      images: ["https://pbs.twimg.com/media/Gb4Qi6YWAAAIifb?format=jpg&name=small", "https://pbs.twimg.com/media/GdUq1m0WMAAjfe7?format=jpg&name=360x360", "https://pbs.twimg.com/profile_images/1851658043500396546/oAjkOIot_bigger.jpg"],
    },
    {
      id: "5",
      author: {
        id: 5,
        username: "tech_insider",
        displayName: "Tech Insider",
        avatarUrl: "https://pbs.twimg.com/profile_images/1855931685197451264/go7sumpS_bigger.jpg",
      },
      content: "Breaking: AI regulations are coming into effect next year. What are your thoughts? 🤔",
      likes: 420,
      retweets: 150,
      comments: 230,
      createdAt: "2024-11-20T16:20:00Z",
      images: ["https://pbs.twimg.com/media/GdUq1muXkAAwy71?format=jpg&name=360x360", "https://pbs.twimg.com/media/GdUq1m0WMAAjfe7?format=jpg&name=360x360"],
    },
];
export const toFollow = [
  {
    id: 1,
    avatarUrl: 'https://pbs.twimg.com/profile_images/1749593153038852096/lcP7DAQP_bigger.jpg',
    displayName: 'Noah7 🇪🇸',
    username: 'Noah_lol1004',
  },
  {
    id: 2,
    avatarUrl: 'https://pbs.twimg.com/profile_images/1666476199697154049/9zT0Xw9i_bigger.jpg',
    displayName: 'Maja Heban',
    username: 'HebanMaja',
  },
  {
    id: 3,
    avatarUrl: 'https://pbs.twimg.com/profile_images/1652284926241169409/IlCr8K1d_bigger.jpg',
    displayName: 'KLEPSYDRA',
    username: 'Klepsydra_TT',
  },
]