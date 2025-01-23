// import dayjs from "dayjs";
// import { union } from "lodash-es";
// import { http, HttpResponse } from 'msw';
import { delay, http, HttpResponse } from 'msw';
// import { bypass, delay, http, HttpResponse } from "msw";
// import { bypass, http, HttpResponse } from "msw";

// import { apiURL } from "~/lib/axios-config";

// import { useDevStore } from "~/store";
// import { User } from "~/lib/types";
import {
  // activitySummary,
  // campaigns,
  // campaignsReport,
  // campaignsSummary,
  // customerActions,
  customers,
  // customersDashboard,
  dummy
  // googleLocations,
  // gotLocation,
  // location,
  // merchant,
  // mobileUsers,
  // mobileUserActions,
  // notifications,
  // places,
  // reviewsReport,
  // stripeLocationDetails,
  // stripeLocationRecharge,
  // surveysSummaryReport,
  // user,
} from './fixtures';

/*
 * NB: If you comment out all of the handlers below, prettier does weird things.
 * So leave at least one uncommented. That's the purpose of `dummy`. */

export const handlers = [
  // dummy:
  http.get('/msw-handlers/', () => {
    return HttpResponse.json(dummy);
  }),

  /* Setup Wizard */
  // http.post("https://mybusinessbusinessinformation.googleapis.com/v1/googleLocations:search*", () => {
  //   return HttpResponse.json(googleLocations);
  // }),

  // in SetupWizard, 404 when location not found and 406 when already claimed; other errors are unexpected
  // http.get(apiURL("/merchant/locations/unclaimed/:google_place_id/"), () => {
  //   return new HttpResponse(null, { status: 500 });
  // }),

  /* useCampaigns */
  // http.get(apiURL("/campaign/campaigns/"), () => {
  //   return HttpResponse.json(campaigns);
  // }),

  // useCampaign: (needs to have useCampaigns above activated to work properly)
  // http.get(apiURL("/campaign/:uuid/"), async ({ params }) => {
  //   const { uuid } = params;
  //   return HttpResponse.json(campaigns.find((o) => o.uuid === uuid));
  // }),

  // useCampaignsSummary:
  // http.get(apiURL("/campaign/location/:locationUuid/summary/"), () => {
  //   return HttpResponse.json(campaignsSummary);
  // }),

  // useCampaignsReport:
  // http.get(apiURL("/campaign/reporting/location/:locationUuid/campaigns/"), async ({ request }) => {
  //   const report = await fetch(bypass(request)).then((response) => response.json());

  //   // Use a mocked response that combines the actual and mock data, unless the request has a campaign_type query parameter.
  //   const combined = {
  //     ...report,
  //     ...campaignsReport,
  //   };

  //   let result;

  //   const url = new URL(request.url);
  //   const campaign_type = url.searchParams.get("campaign_type");

  //   if (campaign_type) {
  //     const action_type = campaign_type === "QrCodeCheckIn" ? "CheckInQRCode" : campaign_type;
  //     const filteredActions = campaignsReport.actions.filter((campaign) => campaign.action_type === action_type);
  //     const filteredActionsByTypeAndDate = campaignsReport.actions_by_type_and_date.filter(
  //       (campaign) => campaign.action_type === action_type,
  //     );
  //     const filteredActionsByType =
  //       campaignsReport.actions_by_type?.filter((campaign) => campaign.action_type === action_type) ?? [];
  //     result = {
  //       ...combined,
  //       actions: filteredActions,
  //       actions_by_type: filteredActionsByType,
  //       actions_by_type_and_date: filteredActionsByTypeAndDate,
  //     };
  //   } else {
  //     result = combined;
  //   }
  //   await delay();
  //   return HttpResponse.json(result);
  // }),

  // useMerchant:
  // http.get(apiURL("/merchant/merchants/:uuid"), () => {
  //   return HttpResponse.json(merchant);
  // }),

  // useCustomers:
  http.get('/merchant/customers/location/', async () => {
    await delay();
    return HttpResponse.json(customers);
  })
  // http.get('/merchant/customers/location/:locationUuid/', async () => {
  //   await delay();
  //   return HttpResponse.json(customers);
  // })
  // useCustomers:
  // http.get(apiURL("/merchant/customers/location/:locationUuid/"), ({ request }) => {
  //   const url = new URL(request.url);
  //   const searchTerm = url.searchParams.get("search")?.toLowerCase();
  //   if (!searchTerm) {
  //     return HttpResponse.json(customers);
  //   }
  //   const filteredCustomers = customers.filter(
  //     (customer) =>
  //       customer.user_tag.toLowerCase().includes(searchTerm) || customer.name.toLowerCase().includes(searchTerm),
  //   );
  //   return HttpResponse.json(filteredCustomers);
  // }),

  // useCustomerActions:
  // http.get(apiURL("/merchant/customers/:customerUuid/location/:locationUuid/"), async () => {
  //   await delay();
  //   return HttpResponse.json(customerActions);
  // }),

  // useCustomersDashboard:
  // http.get(apiURL("/merchant/customers/location/:locationUuid/dashboard/"), () => {
  //   return HttpResponse.json(customersDashboard);
  // }),

  // useActivitySummary:
  // http.get(apiURL("/merchant/location/:locationUuid/summary/"), async () => {
  //   await delay();
  //   return HttpResponse.json(activitySummary);
  // }),

  // useImpersonation:
  // http.post(apiURL("/internal/impersonate/:userUuid/"), async ({ request }) => {
  //   // Fetch the original response from the server.
  //   const impersonation = await fetch(bypass(request)).then((response) => response.json());
  //   // Respond with a mocked response that combines the actual and mock data.
  //   return HttpResponse.json({
  //     ...impersonation,
  //     expires_at: dayjs().add(12, "second").toISOString(), // 15 seconds from now
  //   });
  // }),

  // useInternalLocationAddTokens:
  // http.post(apiURL("/internal/locations/:locationUuid/manual-token-recharge/:tokens/"), async () => {
  //   return new HttpResponse(null, { status: 403 }); // expected code when user doesn't have permission to do the internal token recharge
  // }),

  // useInternalTestDataPopulate:
  // http.post(apiURL("/internal/locations/:locationUuid/test-data/"), async () => {
  //   await delay();
  //   return new HttpResponse(null, { status: 200 }); // expected code when user doesn't have permission to do the internal token recharge
  // }),

  // useGotLocation:
  // http.get(apiURL("/merchant/location/:locationUuid/"), () => {
  //   return HttpResponse.json(gotLocation);
  // }),
  // useGotLocation:
  // http.get(apiURL("/merchant/location/:locationUuid/"), async ({ request }) => {
  //   const original = await fetch(bypass(request)).then((response) => response.json());
  //   const mergedDedupedSortedFeatures = union(original.fulfillment.features, gotLocation.fulfillment.features).sort(
  //     (a, b) => a.localeCompare(b),
  //   );
  //   return HttpResponse.json({
  //     ...original,
  //     fulfillment: {
  //       ...original.fulfillment,
  //       features: mergedDedupedSortedFeatures,
  //     },
  //   });
  // }),

  // useMerchantLocation:
  // http.get(apiURL("/merchant/locations/:locationUuid/"), () => {
  //   return HttpResponse.json(location);
  // }),

  // useNotifications:
  // http.get(apiURL("/merchant/:merchantUuid/notifications/"), () => {
  //   return HttpResponse.json(notifications);
  // }),

  // useReviewsReport:
  // http.get(apiURL("/review/reporting/location/:locationUuid/reviews/"), () => {
  //   return HttpResponse.json(reviewsReport);
  // }),

  // useStripeLocationDetails:
  // http.get(apiURL("/stripe/location/:locationUuid"), () => {
  //   return HttpResponse.json(stripeLocationDetails);
  // }),
  // useStripeLocationDetails: (404)
  // http.get(apiURL("/stripe/location/:locationUuid"), () => {
  //   return new HttpResponse(null, { status: 404 });
  // }),

  // useStripeLocationRecharge:
  // http.post(apiURL("/stripe/location/:locationUuid/recharge/"), () => {
  //   return HttpResponse.json(stripeLocationRecharge);
  // }),

  // useStripeLocationRecharge: (406)
  // http.post(apiURL("/stripe/location/:locationUuid/recharge/"), () => {
  //   return new HttpResponse(null, { status: 406 });
  // }),

  // useSurveyReports:
  // http.get(apiURL("/campaign/reporting/location/:locationUuid/surveys/"), () => {
  //   return HttpResponse.json(surveysSummaryReport);
  // }),

  // useUser:
  // http.get(apiURL("/user/"), async () => {
  //   return HttpResponse.json(user);
  // }),

  // useUpdateUser;
  // http.put(apiURL("/user/"), async (info) => {
  //   const { request } = info;
  //   const body = await request.json()
  //   const result = { ...user, ...body };
  //   return HttpResponse.json(result);
  // }),

  // useInternalMobileUsers:
  // NB: This isn't working quite right
  // http.get(apiURL("/internal/customers/"), async ({ request, params }) => {
  //   const original = await fetch(bypass(request)).then((response) => response.json());
  //   const mergedMobileUsers = [...original.data, ...mobileUsers];
  //   const page = Number(params.page) ?? 1;
  //   const itemsPerPage = Number(params.items_per_page) || 10;
  //   const search = params.search || "";
  //   const filteredMobileUsers = search
  //     ? mergedMobileUsers.filter((user) => {
  //         return user.user_tag.includes(search);
  //       })
  //     : mergedMobileUsers;
  //   const start = (page - 1) * itemsPerPage;
  //   const end = start + itemsPerPage;
  //   const last = Math.ceil(filteredMobileUsers.length / itemsPerPage);
  //   const prev = page > 1 ? page - 1 : null;
  //   const next = page < last ? page + 1 : null;
  //   return HttpResponse.json({
  //     items: filteredMobileUsers.length,
  //     next,
  //     current: page,
  //     prev,
  //     last,
  //     data: filteredMobileUsers.slice(start, end),
  //   });
  // }),

  // useInternalMobileUserActions:
  // http.get(apiURL("/internal/customers/:userUuid/"), async () => {
  //   await delay();
  //   return HttpResponse.json(mobileUserActions);
  // }),

  // useInternalMobileUserRedeemTokens:
  // http.post(apiURL("/internal/customers/:customerUuid/redeem/"), () => {
  //   return new HttpResponse(null, { status: 403 });
  // }),

  // useInternalMobileUserActions:
  // http.get(apiURL("/internal/customers/:mobileUserUuid/"), async ({ request }) => {
  //   const original = await fetch(bypass(request)).then((response) => response.json());
  //   const data = original.data;
  //   const newData = data.map((item) => {
  //     return {
  //       ...item,
  //       token_amount: randomNumber(),
  //     };
  //   });
  //   await delay();
  //   return HttpResponse.json({
  //     ...original,
  //     data: newData,
  //   });
  // }),
];

// random number generator with 1/3 chance of 1-10, 1/3 chance of 10-100, 1/3
// chance of 100-1000, and 50/50 chance of positive or negative
// function randomNumber() {
//   const posNeg = Math.random() < 0.5 ? -1 : 1;
//   const r = Math.random();
//   return r < 0.33
//     ? posNeg * Math.floor(Math.random() * 10)
//     : r < 0.67
//       ? posNeg * Math.floor(10 + Math.random() * 90)
//       : posNeg * Math.floor(100 + Math.random() * 900);
// }
