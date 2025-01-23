import { GetAllCampaigns, GetAllCampaignsIndividual, GetOneCampaign } from "~/lib/types";

// Export campaigns for use in handlers-for-tests.ts, and campaignsOne for use
// in Details.test.tsx.
// Using one array for all campaigns and one campaign is tricky, given our
// current types. Use `campaigns` for lists of campaigns and `campaignsOne` for
// a single campaign.

const campaign0All: GetAllCampaignsIndividual = {
  action_frequency: "1D",
  actions_per_frequency: 1,
  active: true,
  auto_renew: true,
  budget: 1000,
  campaign_type: "CheckIn",
  end_date: "2023-01-31",
  length: "30D",
  location_uuid: "locations0",
  name: "Check In [0]",
  reward: 10,
  start_date: "2023-01-01",
  tokens_paid: 0,
  uuid: "6b334c6e-5162-4d7d-90ed-c9abf465981a",
};

export const campaign0One: GetOneCampaign = {
  ...campaign0All,
  awarded_tokens: 0,
  first_time_bonus: 5,
  renewal_date: "2023-01-01",
  short_code: "123456",
};

const campaign1All: GetAllCampaignsIndividual = {
  action_frequency: "ONCE",
  actions_per_frequency: 1,
  active: true,
  auto_renew: true,
  budget: 1000,
  campaign_type: "Survey",
  end_date: "2023-01-31",
  length: "30D",
  location_uuid: "cd389c6d-2370-4a3e-94e9-3716ff8d2626",
  name: "This Is the Mock Survey",
  reward: 10,
  start_date: "2023-01-01",
  tokens_paid: 0,
  uuid: "f3b1a05d-fabc-4a25-9c8c-5c862d39d9d7",
};

export const campaign1One: GetOneCampaign = {
  ...campaign1All,
  awarded_tokens: 90,
  first_time_bonus: 5,
  renewal_date: "2023-01-01",
  short_code: "123456",
  title: "Hey Customer, This is Survey 1",
};

const campaign2All: GetAllCampaignsIndividual = {
  action_frequency: "60D",
  actions_per_frequency: 1,
  active: true,
  // awarded_tokens: 0,
  auto_renew: true,
  budget: 90,
  campaign_type: "Review",
  end_date: "2023-03-03",
  length: "30D",
  location_uuid: "locations0",
  name: "January Review [1]",
  reward: 5,
  start_date: "2023-01-31",
  tokens_paid: 0,
  uuid: "campaigns1",
  // first_time_bonus: 5,
  // short_code: "123456",
};

const campaign2One: GetOneCampaign = {
  ...campaign2All,
  awarded_tokens: 0,
  first_time_bonus: 5,
  renewal_date: "2023-01-31",
  short_code: "123456",
};

export const campaigns: GetAllCampaigns = [
  campaign0All,
  campaign1All,
  campaign2All,
  {
    action_frequency: "1D",
    actions_per_frequency: 1,
    active: true,
    auto_renew: false,
    budget: 1000,
    campaign_type: "Referral",
    end_date: "2023-08-06",
    length: "30D",
    location_uuid: "locations0",
    name: "Initial Email",
    reward: 1,
    start_date: "2023-07-07",
    tokens_paid: 10,
    uuid: "campaigns2",
  },
  {
    action_frequency: "30D",
    actions_per_frequency: 1,
    active: true,
    auto_renew: false,
    budget: 90,
    campaign_type: "Review",
    end_date: null,
    length: "UNLMT",
    location_uuid: "locations0",
    name: "Ree Vue",
    reward: 10,
    start_date: "2023-11-01",
    tokens_paid: 24,
    uuid: "campaigns3",
  },
  {
    action_frequency: "ONCE",
    actions_per_frequency: 5,
    active: true,
    auto_renew: false,
    budget: 1000,
    campaign_type: "Survey",
    end_date: "2025-01-31",
    length: "30D",
    location_uuid: "locations0",
    name: "Survey",
    reward: 10,
    start_date: "2023-01-01",
    tokens_paid: 70,
    uuid: "campaigns4",
  },
];

export const campaignsOne: GetOneCampaign[] = [
  campaign0One,
  campaign1One,
  campaign2One,
  {
    ...campaigns[3],
    awarded_tokens: 0,
    first_time_bonus: 5,
    renewal_date: "2023-07-07",
    short_code: "123456",
  },
  {
    ...campaigns[4],
    awarded_tokens: 0,
    first_time_bonus: 5,
    renewal_date: "2023-11-01",
    short_code: "123456",
  },
  {
    ...campaigns[5],
    awarded_tokens: 0,
    first_time_bonus: 5,
    renewal_date: "2023-01-01",
    short_code: "123456",
    title: "Hey Customer, This is Survey 2",
  },
];

export const campaign: GetOneCampaign = campaignsOne[0];
