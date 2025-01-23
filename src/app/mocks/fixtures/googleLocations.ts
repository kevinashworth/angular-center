import { GoogleLocationsObject } from "~/views/SetupWizard/types";

export const googleLocations: GoogleLocationsObject[] = [
  {
    name: "googleLocations/ChIJ8bB81ErGwoARwjJiSKLaxsc",
    location: {
      title: "Wonder Jewelers (MSW)",
      phoneNumbers: {
        primaryPhone: "+1 833-553-9357",
        additionalPhones: ["+1 800-397-1926"],
      },
      storefrontAddress: {
        regionCode: "US",
        languageCode: "en",
        postalCode: "90013",
        administrativeArea: "California",
        locality: "Los Angeles",
        addressLines: ["550 South Hill Street #814"],
      },
      websiteUri: "http://www.wonderjewelers.com/",
      latlng: {
        latitude: 34.0475472,
        longitude: -118.2524604,
      },
      metadata: {
        placeId: "ChIJ8bB81ErGwoARwjJiSKLaxsc",
        mapsUri: "https://maps.google.com/maps?cid=14395433649470321346",
        newReviewUri: "https://search.google.com/local/writereview?placeid=ChIJ8bB81ErGwoARwjJiSKLaxsc",
      },
    },
    requestAdminRightsUri: "https://business.google.com/arc/p/ChIJ8bB81ErGwoARwjJiSKLaxsc",
  },
  {
    name: "googleLocations/ChIJsUqWcFnGwoAREM1uYkJ-_Cs",
    location: {
      title: "Wonder Bakery (MSW)",
      phoneNumbers: {
        primaryPhone: "+1 213-680-1111",
      },
      storefrontAddress: {
        regionCode: "US",
        languageCode: "en",
        postalCode: "90012-1743",
        administrativeArea: "California",
        locality: "Los Angeles",
        addressLines: ["943 North Broadway"],
      },
      websiteUri: "http://www.wonderbakery.com/",
      latlng: {
        latitude: 34.0652138,
        longitude: -118.2371105,
      },
      metadata: {
        placeId: "ChIJsUqWcFnGwoAREM1uYkJ-_Cs",
        mapsUri: "https://maps.google.com/maps?cid=3169547061346356496",
        newReviewUri: "https://search.google.com/local/writereview?placeid=ChIJsUqWcFnGwoAREM1uYkJ-_Cs",
      },
    },
    requestAdminRightsUri: "https://business.google.com/arc/p/ChIJsUqWcFnGwoAREM1uYkJ-_Cs",
  },
];
