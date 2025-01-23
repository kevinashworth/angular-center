import { http, HttpResponse } from "msw";

import { apiURL } from "~/lib/axios-config";

import {
  activitySummary,
  // campaign,
  campaigns,
  campaignsOne,
  // campaignsReport,
  campaignsSummary,
  // customerActions,
  // customers,
  customersDashboard,
  gotLocation,
  location,
  merchant,
  // notifications,
  // notificationTypes,
  // reviewsReport,
  stripeLocationDetails,
  surveyQuestions,
  user,
} from "./fixtures";

export const handlers = [
  // useCampaigns (GridCampaigns.test.tsx, CampaignsTable.test.tsx)
  http.get(apiURL("/campaign/campaigns/"), () => {
    return HttpResponse.json(campaigns);
  }),

  // useSurveyQuestions (ShowSurvey.test.tsx)
  http.get(apiURL("/campaign/:campaignUuid/survey-questions/"), () => {
    return HttpResponse.json(surveyQuestions);
  }),

  // // useCampaign (Details.test.tsx)
  http.get(apiURL("/campaign/:campaignUuid/"), async ({ params }) => {
    const { campaignUuid } = params;
    const c = campaignsOne.find((c) => c.uuid === campaignUuid);
    if (!c) {
      return new HttpResponse(null, { status: 404 });
    }
    return HttpResponse.json(c);
  }),

  // useCampaignsSummary () (Campaigns.test.tsx)
  http.get(apiURL("/campaign/location/:locationUuid/summary/"), () => {
    return HttpResponse.json(campaignsSummary);
  }),

  // getDashboardCommunity (GridCommunity.test.tsx)
  http.get(apiURL("/merchant/customers/location/:locationUuid/dashboard/"), () => {
    return HttpResponse.json(customersDashboard);
  }),

  // useActivitySummary (EventTotal.test.tsx)
  http.get(apiURL("/merchant/location/:locationUuid/summary/"), () => {
    return HttpResponse.json(activitySummary);
  }),

  // useGotLocation (OpeningHoursTable.test.tsx, BrandScore2.test.tsx)
  http.get(apiURL("/merchant/location/:locationUuid/"), () => {
    return HttpResponse.json(gotLocation);
  }),

  // useMerchantLocation (BrandScore2.test.tsx, OpeningHoursTable.test.tsx)
  http.get(apiURL("/merchant/locations/:locationUuid/"), () => {
    return HttpResponse.json(location);
  }),

  // useMerchant (PricingTable.test.tsx)
  http.get(apiURL("/merchant/merchants/:uuid/"), () => {
    return HttpResponse.json(merchant);
  }),

  // useReviewsReport
  // http.get(apiURL("/review/reporting/location/:locationUuid/reviews/"), () => {
  //   return HttpResponse.json(reviewsReport);
  // }),

  // useStripeLocationDetails
  http.get(apiURL("/stripe/location/:locationUuid"), () => {
    return HttpResponse.json(stripeLocationDetails);
  }),

  // useUser (UserSettings.test.tsx)
  http.get(apiURL("/user/"), async () => {
    return HttpResponse.json(user);
  }),

  // useUserEmailOptIns (User.test.tsx)
  // http.get(apiURL("/user/email-optins/"), async () => {
  //   return HttpResponse.json(notificationTypes);
  // }),
];
