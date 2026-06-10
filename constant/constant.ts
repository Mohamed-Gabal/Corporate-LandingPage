
import { FaBullseye } from "react-icons/fa"
import { HiOutlineChartBar } from "react-icons/hi2"
import { NavLink, ProgressItem, ServiceItem } from "@/types/navigation";


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