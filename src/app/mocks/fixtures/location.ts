import { Location } from "~/lib/types";

export const location: Location = {
  uuid: "1234567890",
  createdDateTime: "2021-01-01T00:00:00.000000Z",
  modifiedDateTime: "2021-01-01T00:00:00.000000Z",
  deletedDateTime: null,
  deleted: false,
  meta: null,

  name: "Green Valley",
  address1: "123 Main St",
  address2: "",
  city: "San Diego",
  state: "CA",
  zip: "92101",
  latitude: "32.715736",
  longitude: "-117.161087",
  google_place_id: "ChIJtUHsZsE0A4gRfOq5QPadjt0",
  verified: "2021-01-01T00:00:00.000000Z",
  stripe_customer_id: "cus_1234567890",
  stripe_subscription_id: "sub_1234567890",
  twitter_link: "https://twitter.com/",
  facebook_link: "https://facebook.com/",
  instagram_link: "https://instagram.com/",
  google_maps_link: "https://maps.google.com/",
  verified_by: 1000,
  merchant: null,
  nickname: "Green Valley",
  business_phone: "1 (555) 555-5555",
  support_email: "",
  website: "https://www.example.com/",
  description: "Green Valley is a great place to be. Green Valley is a great place to live.",
  business_logo: "https://dummyimage.com/300x200/067299/ffffff.png&text=Logo",
  photo_1: "https://dummyimage.com/128/4c0121/ffffff.png&text=1",
  photo_2: "https://dummyimage.com/128/4c0121/dddddd.png&text=2",
  photo_3: "https://dummyimage.com/128/4c0121/bbbbbb.png&text=3",
  photo_4: "https://dummyimage.com/128/4c0121/999999.png&text=4",
  photo_5: "https://dummyimage.com/128/4c0121/777777.png&text=5",
  photo_6: null,
  photo_7: "https://dummyimage.com/128/cdde00/999999.png&text=7",
  photo_8: "https://dummyimage.com/128/cdde00/666666.png&text=8",
  photo_9: "https://dummyimage.com/128/cdde00/333333.png&text=9",
  photo_10: "https://dummyimage.com/128/cdde00/000000.png&text=10",
  verification_image_1: "https://dummyimage.com/128/459cff/555555.png&text=11",
  verification_image_2: "https://dummyimage.com/128/459cff/444444.png&text=12",
  external_thumbnail_1: "https://dummyimage.com/128/459cff/333333.png&text=13",
  token_balance: {
    token_balance_get: 0,
    token_balance_gyt: 0,
  },
  business_hours: {
    periods: [
      {
        open: {
          day: 1,
          time: "1000",
        },
        close: {
          day: 1,
          time: "2200",
        },
      },
      {
        open: {
          day: 2,
          time: "0600",
        },
        close: {
          day: 2,
          time: "0800",
        },
      },
      {
        open: {
          day: 2,
          time: "1700",
        },
        close: {
          day: 2,
          time: "1900",
        },
      },
      {
        open: {
          day: 6,
          time: "1000",
        },
        close: {
          day: 6,
          time: "2200",
        },
      },
    ],
  },
  special_hours: [
    { label: "Presidents Day", date: "2024-02-19", open: "1000", close: "1400" },
    {
      label: "Independence Day",
      date: "2024-07-04",
      open: "0000",
      close: "0000",
    },
    { label: "Christmas Eve", date: "2024-12-24", open: "0000", close: "2359" },
    { label: "Christmas Day", date: "2024-12-25", open: "0000", close: "0000" },
  ],
};
