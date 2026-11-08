export const siteConfig = {
  name: "Foundr Property Group",
  shortName: "Foundr",
  tagline: "Protect. Refine. Develop.",
  description:
  "Foundr Property Group delivers premium renovations, construction, waterproofing and property maintenance services across Johannesburg, Pretoria and Gauteng.",
  contact: {
    people: [
      { name: "Cameron", phone: "061 279 1010", tel: "+27612791010" },
      { name: "Corrie", phone: "073 768 6109", tel: "+27737686109" },
      { name: "Claudia", phone: "065 681 7763", tel: "+27656817763" },
    ],
    email: "foundrdevelopments@outlook.com",
    hours: [
      { days: "Monday – Friday", time: "07:00 – 17:00" },
      { days: "Saturday", time: "07:00 – 16:00" },
      { days: "Sunday", time: "Closed" },
    ],
  },
  social: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Facebook", href: "#" },
  ],
} as const

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
] as const
