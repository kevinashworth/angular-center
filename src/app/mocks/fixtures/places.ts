import { PlacePrediction } from "~/views/SetupWizard/types";

export const places: PlacePrediction[] = [
  {
    id: "1",
    reference: "1",
    structured_formatting: {
      main_text: "test main",
      secondary_text: "test secondary",
    },
    place_id: "1",
    description: "test description",
    matched_substrings: [],
    terms: [],
    types: [],
  },
  {
    id: "2",
    reference: "2",
    structured_formatting: {
      main_text: "testy main",
      secondary_text: "testy secondary",
    },
    place_id: "2",
    description: "testy description",
    matched_substrings: [],
    terms: [],
    types: [],
  },
  {
    id: "3",
    reference: "3",
    structured_formatting: {
      main_text: "main text 3",
      secondary_text: "secondary 3",
    },
    place_id: "3",
    description: "The 3rd testy description",
    matched_substrings: [],
    terms: [],
    types: [],
  },
];

export const predictions: PlacePrediction[] = [
  {
    id: "ChIJt8KbEhe7woAR6oyKnuego90",
    description: "Foodies Cafe, Avenue of the Stars, Los Angeles, CA",
    matched_substrings: [
      {
        length: 5,
        offset: 0,
      },
    ],
    place_id: "ChIJt8KbEhe7woAR6oyKnuego90",
    reference: "ChIJt8KbEhe7woAR6oyKnuego90",
    structured_formatting: {
      main_text: "Foodies Cafe",
      main_text_matched_substrings: [
        {
          length: 5,
          offset: 0,
        },
      ],
      secondary_text: "Avenue of the Stars, Los Angeles, CA",
    },
    terms: [
      {
        offset: 0,
        value: "Foodies Cafe",
      },
      {
        offset: 14,
        value: "Avenue of the Stars",
      },
      {
        offset: 35,
        value: "Los Angeles",
      },
      {
        offset: 48,
        value: "CA",
      },
    ],
    types: ["cafe", "food", "point_of_interest", "establishment"],
  },
  {
    id: "ChIJT8KbEhe7woAR6oyKnuego90",
    description: "The Foodie & Co., Sawyer Street, Los Angeles, CA",
    matched_substrings: [
      {
        length: 5,
        offset: 4,
      },
    ],
    place_id: "ChIJU9bS5bm7woARrnTud9LQWTU",
    reference: "ChIJU9bS5bm7woARrnTud9LQWTU",
    structured_formatting: {
      main_text: "The Foodie & Co.",
      main_text_matched_substrings: [
        {
          length: 5,
          offset: 4,
        },
      ],
      secondary_text: "Sawyer Street, Los Angeles, CA",
    },
    terms: [
      {
        offset: 0,
        value: "The Foodie & Co.",
      },
      {
        offset: 18,
        value: "Sawyer Street",
      },
      {
        offset: 33,
        value: "Los Angeles",
      },
      {
        offset: 46,
        value: "CA",
      },
    ],
    types: ["meal_takeaway", "restaurant", "food", "point_of_interest", "establishment"],
  },
  {
    id: "ChIJT8KbEhe7woAR6oyKnuego90",
    description: "Foodie In Disguise Test Kitchen, South Centinela Avenue, Los Angeles, CA",
    matched_substrings: [
      {
        length: 5,
        offset: 0,
      },
    ],
    place_id: "ChIJNXeexcm0woARiFoT6qGsUjg",
    reference: "ChIJNXeexcm0woARiFoT6qGsUjg",
    structured_formatting: {
      main_text: "Foodie In Disguise Test Kitchen",
      main_text_matched_substrings: [
        {
          length: 5,
          offset: 0,
        },
      ],
      secondary_text: "South Centinela Avenue, Los Angeles, CA",
    },
    terms: [
      {
        offset: 0,
        value: "Foodie In Disguise Test Kitchen",
      },
      {
        offset: 33,
        value: "South Centinela Avenue",
      },
      {
        offset: 57,
        value: "Los Angeles",
      },
      {
        offset: 70,
        value: "CA",
      },
    ],
    types: ["point_of_interest", "establishment"],
  },
  {
    id: "ChIJT8KbEhe7woAR6oyKnuego90",
    description: "Foodies Urban Kitchen, Norris Avenue, Sun Valley, CA",
    matched_substrings: [
      {
        length: 5,
        offset: 0,
      },
    ],
    place_id: "ChIJp8D5ww2UwoARMvvSEHG9CtY",
    reference: "ChIJp8D5ww2UwoARMvvSEHG9CtY",
    structured_formatting: {
      main_text: "Foodies Urban Kitchen",
      main_text_matched_substrings: [
        {
          length: 5,
          offset: 0,
        },
      ],
      secondary_text: "Norris Avenue, Sun Valley, CA",
    },
    terms: [
      {
        offset: 0,
        value: "Foodies Urban Kitchen",
      },
      {
        offset: 23,
        value: "Norris Avenue",
      },
      {
        offset: 38,
        value: "Sun Valley",
      },
      {
        offset: 50,
        value: "CA",
      },
    ],
    types: ["food", "point_of_interest", "establishment"],
  },
  {
    id: "ChIJT8KbEhe7woAR6oyKnuego90",
    description: "The Foodie Spot LA, Avalon Boulevard, Los Angeles, CA",
    matched_substrings: [
      {
        length: 5,
        offset: 4,
      },
    ],
    place_id: "ChIJAzjlXmPJwoARZwRft84xrtQ",
    reference: "ChIJAzjlXmPJwoARZwRft84xrtQ",
    structured_formatting: {
      main_text: "The Foodie Spot LA",
      main_text_matched_substrings: [
        {
          length: 5,
          offset: 4,
        },
      ],
      secondary_text: "Avalon Boulevard, Los Angeles, CA",
    },
    terms: [
      {
        offset: 0,
        value: "The Foodie Spot LA",
      },
      {
        offset: 20,
        value: "Avalon Boulevard",
      },
      {
        offset: 38,
        value: "Los Angeles",
      },
      {
        offset: 51,
        value: "CA",
      },
    ],
    types: ["meal_delivery", "restaurant", "food", "point_of_interest", "establishment"],
  },
];
