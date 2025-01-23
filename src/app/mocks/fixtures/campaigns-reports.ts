import dayjs from "dayjs";

import { CampaignsReport } from "~/lib/types";

const myDateFormat = "YYYY-MM-DD";
const today = dayjs().format(myDateFormat);
const todayMinus1 = dayjs().subtract(1, "day").format(myDateFormat);
const todayMinus2 = dayjs().subtract(2, "day").format(myDateFormat);
const todayMinus3 = dayjs().subtract(3, "day").format(myDateFormat);
const todayMinus8 = dayjs().subtract(8, "day").format(myDateFormat);
const todayMinus16 = dayjs().subtract(16, "day").format(myDateFormat);
const todayMinus31 = dayjs().subtract(31, "day").format(myDateFormat);
const todayMinus59 = dayjs().subtract(59, "day").format(myDateFormat);

export const campaignsReport: CampaignsReport = {
  actions_by_type_and_date: [
    { completed__date: todayMinus59, action_type: "CheckInQRCode", actions: 1 },
    { completed__date: todayMinus59, action_type: "Survey", actions: 17 },
    { completed__date: todayMinus31, action_type: "CheckIn", actions: 7 },
    { completed__date: todayMinus31, action_type: "Referral", actions: 5 },
    { completed__date: todayMinus31, action_type: "Review", actions: 6 },
    { completed__date: todayMinus16, action_type: "CheckIn", actions: 9 },
    { completed__date: todayMinus16, action_type: "Referral", actions: 7 },
    { completed__date: todayMinus16, action_type: "Review", actions: 8 },
    { completed__date: todayMinus8, action_type: "CheckIn", actions: 8 },
    { completed__date: todayMinus8, action_type: "CheckInQRCode", actions: 3 },
    { completed__date: todayMinus8, action_type: "Referral", actions: 6 },
    { completed__date: todayMinus8, action_type: "Review", actions: 5 },
    { completed__date: todayMinus8, action_type: "Survey", actions: 7 },
    { completed__date: todayMinus3, action_type: "Survey", actions: 13 },
    { completed__date: todayMinus3, action_type: "CheckIn", actions: 1 },
    { completed__date: todayMinus2, action_type: "CheckIn", actions: 1 },
    { completed__date: todayMinus2, action_type: "CheckInQRCode", actions: 1 },
    { completed__date: todayMinus1, action_type: "CheckIn", actions: 3 },
    { completed__date: todayMinus1, action_type: "Referral", actions: 1 },
    { completed__date: todayMinus1, action_type: "Review", actions: 1 },
    { completed__date: today, action_type: "CheckInQRCode", actions: 9 },
    { completed__date: today, action_type: "Referral", actions: 1 },
    { completed__date: today, action_type: "Survey", actions: 1 },
  ],
  actions_by_type: [
    { action_type: "CheckIn", actions: 70 },
    { action_type: "CheckInQRCode", actions: 35 },
    { action_type: "Referral", actions: 12 },
    { action_type: "Review", actions: 10 },
    { action_type: "Survey", actions: 27 },
  ],
  actions: [
    {
      action_type: "Survey",
      completed: today,
      campaign__name: "First Survey Campaign",
      campaign__uuid: "d1b0a0a0-1a1a-1a1a-1a1a-1a1a1a1a1a1a",
      reward_tokens: 1,
      meta: {
        stuff: null,
      },
    },
    {
      action_type: "CheckInQRCode",
      completed: today,
      campaign__name: "October CheckInQRCode",
      campaign__uuid: "c1b0a0a0-1a1a-1a1a-1a1a-1a1a1a1a1a1b",
      reward_tokens: 1,
      meta: {
        stuff: null,
      },
    },
    {
      action_type: "CheckIn",
      completed: todayMinus1,
      campaign__name: "First Check-in Campaign",
      campaign__uuid: "d1b0a0a0-1a1a-1a1a-1a1a-1a1a1a1a1a1c",
      reward_tokens: 1,
      meta: {
        stuff: null,
      },
    },
    {
      action_type: "Review",
      completed: todayMinus8,
      campaign__name: "Like Us Please",
      campaign__uuid: "123",
      reward_tokens: 1,
      meta: {
        stuff: null,
      },
    },
    {
      action_type: "Referral",
      completed: todayMinus16,
      campaign__name: "October Referral",
      campaign__uuid: "c1b0a0a0-1a1a-1a1a-1a1a-1a1a1a1a1a1d",
      reward_tokens: 1,
      meta: {
        stuff: null,
      },
    },
    {
      action_type: "CheckIn",
      completed: todayMinus8,
      campaign__name: "First Check-in Campaign",
      campaign__uuid: "d1b0a0a0-1a1a-1a1a-1a1a-1a1a1a1a1a1c",
      reward_tokens: 5,
      meta: {
        what: null,
      },
    },
    {
      action_type: "CheckIn",
      completed: todayMinus16,
      campaign__name: "First Check-in Campaign",
      campaign__uuid: "d1b0a0a0-1a1a-1a1a-1a1a-1a1a1a1a1a1c",
      reward_tokens: 4,
      meta: {
        stuff: 1,
      },
    },
    {
      action_type: "CheckIn",
      completed: todayMinus31,
      campaign__name: "First Check-in Campaign",
      campaign__uuid: "d1b0a0a0-1a1a-1a1a-1a1a-1a1a1a1a1a1c",
      reward_tokens: 5,
      meta: {
        stuff: "checkin",
      },
    },
    {
      action_type: "CheckIn",
      completed: todayMinus59,
      campaign__name: "First Check-in Campaign",
      campaign__uuid: "d1b0a0a0-1a1a-1a1a-1a1a-1a1a1a1a1a1c",
      reward_tokens: 1,
      meta: {
        stuff: null,
      },
    },
  ],
};
