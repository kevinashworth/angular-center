import { ActivitySummary } from "~/lib/types";

import { client_count } from "./constants";

export const activitySummary: ActivitySummary = {
  campaigns: 7,
  client_count,
  engagements: 21582,
  reviews: 2,
  rating__avg: 3.0,
  latest_actions: [
    {
      action_type: "CheckIn",
      completed: "2024-06-04T19:38:02Z",
    },
    {
      action_type: "Review",
      completed: "2024-06-03T19:37:15Z",
    },
    {
      action_type: "Referral",
      completed: "2024-05-18T19:34:42Z",
    },
    {
      action_type: "CheckIn",
      completed: "2024-05-18T19:33:25Z",
    },
    {
      action_type: "CheckIn",
      completed: "2024-05-17T21:27:05Z",
    },
    {
      action_type: "CheckIn",
      completed: "2024-05-12T19:49:24Z",
    },
    {
      action_type: "CheckIn",
      completed: "2024-05-01T19:42:23Z",
    },
    // {
    //   action_type: "CheckIn",
    //   completed: "2024-04-01T20:09:53Z",
    // },
  ],
  actions_30days: 14,
  action_totals: [
    {
      action_type: "CheckIn",
      actions: 17,
    },
    {
      action_type: "Referral",
      actions: 4,
    },
    {
      action_type: "Review",
      actions: 4,
    },
    {
      action_type: "Survey",
      actions: 7,
    },
    {
      action_type: "CheckInQRCode",
      actions: 1,
    },
  ],
  action_totals_30days: [
    {
      action_type: "CheckIn",
      actions: 7,
    },
    {
      action_type: "Referral",
      actions: 2,
    },
    {
      action_type: "Review",
      actions: 1,
    },
    {
      action_type: "Survey",
      actions: 3,
    },
    {
      action_type: "CheckInQRCode",
      actions: 1,
    },
  ],
};
