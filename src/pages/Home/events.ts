export interface EventData {
  id: number;
  title: string;
  date: string;
  location: string;
  fee: string;
  imageUrl: string;
  goldBorder?: boolean;
}

export const events: EventData[] = [
  {
    id: 1,
    title: "Morning Meetup",
    date: "15 July 9:00AM",
    location: "Warsaw - centrum mtg",
    fee: "$40",
    imageUrl: "src/assets/background_1.jpg",
    goldBorder: true,
  },
  {
    id: 2,
    title: "Evening Workshop",
    date: "20 July 6:00PM",
    location: "Krakow - city hall",
    fee: "$30",
     imageUrl: "src/assets/background_1.jpg",
    goldBorder: false,
  },
  {
    id: 3,
    title: "Beachside Yoga",
    date: "25 July 5:00PM",
    location: "Gdansk - beach",
    fee: "$50",
     imageUrl: "src/assets/background_1.jpg",
    goldBorder: true,
  },
  {
    id: 4,
    title: "Tech Talk",
    date: "30 July 3:00PM",
    location: "Poznan - main square",
    fee: "$25",
     imageUrl: "src/assets/background_1.jpg",
    goldBorder: false,
  },
  {
    id: 5,
    title: "Evening Meetup",
    date: "5 August 7:00PM",
    location: "Warsaw - cafe center",
    fee: "$35",
     imageUrl: "src/assets/background_1.jpg",
    goldBorder: true,
  },
];
