import { IconType } from "react-icons";

export type NavLink = {
  id: number;
  url: string;
  label: string;
};

export type ProgressItem = {
  id: number;
  title: string;
  percent: number;
  icon: IconType;
}

export type ServiceItem = {
  id: number;
  image: string;
  icon: string;
}

export type WorkProcessItem = {
  id: number;
  number: string;
  title: string;
  isExtraClass: boolean;
}

export type BlogItem = {
  id: number;
  image: string;
  title: string;
}

export type ContactInfoItem = {
  id: number;
  label: string;
  value: string;
}

export type SocialLink = {
  id: number;
  icon: IconType;
  hoverColor: string;
}