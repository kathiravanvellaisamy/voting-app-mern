import Thumbnail1 from "./assets/images/flag1.jpg";
import Thumbnail2 from "./assets/images/flag2.jpg";
import Thumbnail3 from "./assets/images/flag3.png";
import Candidate1 from "./assets/images/candidate1.jpg";
import Candidate2 from "./assets/images/candidate2.jpg";
import Candidate3 from "./assets/images/candidate3.jpg";
import Candidate4 from "./assets/images/candidate4.jpg";
import Candidate5 from "./assets/images/candidate5.jpg";
import Candidate6 from "./assets/images/candidate6.jpg";
import Candidate7 from "./assets/images/candidate7.jpg";

export const elections = [
  {
    id: "e1",
    title: "Presidential Election 2024",
    description: "Vote for the next President of the United States.",
    thumbnail: Thumbnail1,
    candidates: ["c1", "c2", "c3", "c4"],
    voters: [],
  },
  {
    id: "e2",
    title: "Gubernatorial Election 2024",
    description: "Vote for the next Governor of your state.",
    thumbnail: Thumbnail2,
    candidates: ["c5", "c6", "c7"],
    voters: [],
  },
  {
    id: "e3",
    title: "Local Council Election 2024",
    description: "Vote for your local council representatives.",
    thumbnail: Thumbnail3,
    candidates: ["c1", "c2", "c3"],
    voters: [],
  },
];

export const candidates = [
  {
    id: "c1",
    fullName: "John Doe",
    image: Candidate1,
    moto: "For a better future",
    voteCount: 63,
    election: "e1",
  },
  {
    id: "c2",
    fullName: "Jane Smith",
    image: Candidate2,
    moto: "Together we can",
    voteCount: 15,
    election: "e1",
  },
  {
    id: "c3",
    fullName: "Alice Johnson",
    image: Candidate3,
    moto: "Change is coming",
    voteCount: 10,
    election: "e1",
  },
  {
    id: "c4",
    fullName: "Bob Brown",
    image: Candidate4,
    moto: "Leadership you can trust",
    voteCount: 5,
    election: "e1",
  },
  {
    id: "c5",
    fullName: "Charlie White",
    image: Candidate5,
    moto: "Progress for all",
    voteCount: 30,
    election: "e2",
  },
  {
    id: "c6",
    fullName: "Diana Green",
    image: Candidate6,
    moto: "Empower the community",
    voteCount: 20,
    election: "e2",
  },
  {
    id: "c7",
    fullName: "Ethan Black",
    image: Candidate7,
    moto: "Innovation and growth",
    voteCount: 12,
    election: "e2",
  },
];

export const voters = [
  {
    id: "v1",
    fullName: "Michael Thompson",
    email: "achiever1@gmail.com",
    password: "password123",
    isAdmin: true,
    voteElections: ["e2"],
  },
  {
    id: "v2",
    fullName: "Sarah Williams",
    email: "kathir@gmail.com",
    password: "mypassword",
    isAdmin: false,
    voteElections: ["e1", "e3"],
  },
  {
    id: "v3",
    fullName: "David Wilson",
    email: "test@gmail.com",
    password: "securepass",
    isAdmin: false,
    voteElections: ["e1", "e2", "e3"],
  },
  {
    id: "v4",
    fullName: "Emily Davis",
    email: "youremail@gmail.com",
    password: "mypassword",
    isAdmin: false,
    voteElections: [],
  },
];
