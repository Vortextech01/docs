const TURBO_TEAM = {
  jaredpalmer: {
    name: "C. Davila",
    twitterUsername: "Carlosdavila007",
    picture: "/images/people/66842354-3140-44C1-B98B-65C8F05D425D.jpeg",
  },
  gaspargarcia_: {
    name: "Dagoberto Malacara",
    twitterUsername: "twitter",
    picture: "/images/people/CB94498F-B9FE-4EA4-924B-3AD91EE4B852.jpeg",
  },
  becca__z: {
    name: "Becca Z.",
    twitterUsername: "becca__z",
    picture: "/images/people/becca__z.jpeg",
  },
  gsoltis: {
    name: "Juanito.Bsk",
    twitterUsername: "twitter",
    picture: "/images/people/405621D0-8554-46E7-AAAB-18F7ED2E9DD2.jpeg",
  },
  nathanhammond: {
    name: "Nathan Hammond",
    twitterUsername: "nathanhammond",
    picture: "/images/people/nathanhammond.png",
  },
  tknickman: {
    name: "Tom Knickman",
    twitterUsername: "tknickman",
    picture: "/images/people/tknickman.jpeg",
  },
  mehulkar: {
    name: "Mehul Kar",
    twitterUsername: "mehulkar",
    picture: "/images/people/mehulkar.jpeg",
  },
  mattpocock: {
    name: "Matt Pocock",
    twitterUsername: "mattpocockuk",
    picture: "/images/people/mattpocock.jpeg",
  },
};

export type Author = keyof typeof TURBO_TEAM;
export type AuthorDetails = typeof TURBO_TEAM[Author];

export default TURBO_TEAM;
