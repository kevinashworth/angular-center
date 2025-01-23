import { GetCampaignsSummary } from "~/lib/types";

// today and yesterday at 14:32:56
const today = new Date();
today.setHours(14);
today.setMinutes(32);
today.setSeconds(56);
today.setMilliseconds(0);
const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);
yesterday.setHours(14);
yesterday.setMinutes(32);
yesterday.setSeconds(56);
yesterday.setMilliseconds(0);

const completedToday = today.toISOString();
const completedYesterday = yesterday.toISOString();

export const campaignsSummary: GetCampaignsSummary = {
  total_campaigns: 4,
  total_actions: 8,
  unique_users: 37,
  tokens_paid: 19,
  total_actions_date: [
    {
      month: "2023-07-01T00:00:00Z",
      actions: 629,
    },
    {
      month: "2023-06-01T00:00:00Z",
      actions: 19,
    },
  ],
  latest_actions: [
    {
      action_type: "CheckInQRCode",
      completed: completedToday,
    },
    {
      action_type: "CheckIn",
      completed: completedToday,
    },
    {
      action_type: "Review",
      completed: completedYesterday,
    },
    {
      action_type: "Referral",
      completed: "2023-07-19T17:34:42Z",
    },
    {
      action_type: "Survey",
      completed: "2023-07-18T21:53:25Z",
    },
  ],
};
