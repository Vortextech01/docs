const TURBO_TEAM = {
  jaredpalmer: {
    name: "Carlos Davila",
    twitterUsername: "twitter",
    picture: "/images/people/66842354-3140-44C1-B98B-65C8F05D425D.jpeg",
  },
  gaspargarcia_: {
    name: "Dagoberto Malacara",
    twitterUsername: "twitter",
    picture: "/images/people/CB94498F-B9FE-4EA4-924B-3AD91EE4B852.jpeg",
  },
  becca__z: {
    name: "Arturo.",
    twitterUsername: "twitter",
    picture: "/images/people/becca__z.jpeg",
  },
  gsoltis: {
    name: "Juanito.Bsk",
    twitterUsername: "twitter",
    picture: "/images/people/405621D0-8554-46E7-AAAB-18F7ED2E9DD2.jpeg",
  },
  nathanhammond: {
    name: "Javier Marco",
    twitterUsername: "twitter",
    picture: "/images/docs/shared/feature-icons/CPU Ai icon.svg",
  },
  tknickman: {
    name: "Dagoberto Malacara",
    twitterUsername: "twitter",
    picture: "/images/people/CB94498F-B9FE-4EA4-924B-3AD91EE4B852.jpeg",
  },
  mehulkar: {
    name: "Arath Santos",
    twitterUsername: "twitter",
    picture: "/images/people/F77F3692-9D03-41ED-8DD1-421241EC6A10.jpeg",
  },
  mattpocock: {
    name: "Mr.Basilisk V2",
    twitterUsername: "twitter",
    picture: "/images/people/0B15D2BE-03B1-4A51-B237-7CB67BAFD2E6.jpeg",
  },
};

export type Author = keyof typeof TURBO_TEAM;
export type AuthorDetails = typeof TURBO_TEAM[Author];

export default TURBO_TEAM;
