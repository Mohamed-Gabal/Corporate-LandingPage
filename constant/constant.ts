
import { FaBullseye } from "react-icons/fa"
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { HiOutlineChartBar } from "react-icons/hi2"
import { NavLink, ProgressItem, ServiceItem, WorkProcessItem, BlogItem, ContactInfoItem, SocialLink } from "@/types/navigation";


// Links For Navbar
export const NAV_LINKS: NavLink[] = [
  { id: 1, url: '#', label: 'Home'},
  { id: 2, url: '#', label: 'About'},
  { id: 3, url: '#', label: 'Services'},
  { id: 4, url: '#', label: 'Work'}, 
  { id: 5, url: '#', label: 'Portfolio'},
  { id: 6, url: '#', label: 'Blog'},
  { id: 7, url: '#', label: 'Contact'},
] 

// Data For AboutProgress Component
export const AboutProgress_Data: ProgressItem[] = [
  {id: 1, title: "Digital Marketing", percent: 95, icon: FaBullseye},
  {id: 2, title: "Digital Business", percent: 90, icon: HiOutlineChartBar},
] 

// Data For ServicesCard Component
export const Services_Data: ServiceItem[] = [
  { id: 1, image: '/images/s1.png', icon: '/images/sicon1.png' },
  { id: 2, image: '/images/s2.png', icon: '/images/sicon2.png' },
  { id: 3, image: '/images/s3.png', icon: '/images/sicon3.png' },
  { id: 4, image: '/images/s4.png', icon: '/images/sicon4.png' },
]

// Data For WorkProcessCard Component 
export const  WorkProcess_Data: WorkProcessItem[] = [ 
  { id: 1, number: '01', title: 'Creative Craze', isExtraClass: true},
  { id: 2, number: '02', title: 'Brand Boost', isExtraClass: false},
  { id: 3, number: '03', title: 'Media Minds', isExtraClass: true},
  { id: 4, number: '04', title: 'Media Minds', isExtraClass: false},
] 

// Data For Project Component
export const Projects_Images: string[] = [
  "/images/p1.jpg",
  "/images/p2.jpg",
  "/images/p3.jpg",
  "/images/p4.jpg",
  "/images/p5.jpg",
  "/images/p6.jpg",
]

// Data For BlogCard Component
export const Blog_Data: BlogItem[] = [
  {id: 1, image: '/images/b3.png', title: 'Standard of chunk lorem Ipsum Our Company'},
  {id: 2, image: '/images/b2.png', title: 'These cases are many simple and easy'},
  {id: 3, image: '/images/b1.png', title: 'Standard of chunk lorem Ipsum Our Company'},
]

// Contact Information
export const Contact_Info: ContactInfoItem[] = [
  {id: 1, label: "Call Now", value: "+1 (123) 456-7890"},
  {id: 2, label: "E-mail Now", value: "example@email.com"},
  {id: 3, label: "Address", value: "123 Main Street, City, State 12345"},
]

// Footer Social Links
export const Footer_Social_Links: SocialLink[] = [
  {id: 1, icon: FaFacebookF, hoverColor: "hover:bg-blue-600"},
  {id: 2, icon: FaInstagram, hoverColor: "hover:bg-red-600"},
  {id: 3, icon: FaYoutube, hoverColor: "hover:bg-pink-600"},
]

// Footer Services
export const Footer_Services: string[] = [
  "UI Design",
  "UX Design",
  "Web App",
  "Digital Marketing",
];