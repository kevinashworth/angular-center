import { SurveyReports } from "~/lib/types";

const response = {
  data: {
    response_total: 2,
    response_total_by_day: {
      "2024-04-01": 2,
    },
    surveys: {
      "83b61f7a-f4aa-479c-89c7-a2bae6daf7a6": {
        uuid: "83b61f7a-f4aa-479c-89c7-a2bae6daf7a6",
        campaign_name: "Sirvei",
        active: false,
        start_date: "2024-03-28T07:00:00Z",
        renewal_date: "2024-05-08T07:00:00Z",
        end_date: "2024-05-15T07:00:00Z",
        total_responses: 2,
        responses_by_day: {
          "2024-04-01": 2,
        },
      },
      "918a5895-dad3-4cad-baec-e88e56e06c3d": {
        uuid: "918a5895-dad3-4cad-baec-e88e56e06c3d",
        campaign_name: "999 Very Long Campaign Name 999",
        active: false,
        start_date: "2024-04-05T07:00:00Z",
        renewal_date: "2024-04-26T07:00:00Z",
        end_date: "2024-05-03T07:00:00Z",
        total_responses: 0,
        responses_by_day: {},
      },
      "ea8a0f8b-bb3f-4c06-8392-bfe1975394e8": {
        uuid: "ea8a0f8b-bb3f-4c06-8392-bfe1975394e8",
        campaign_name: "Long Prompt",
        active: false,
        start_date: "2024-04-05T07:00:00Z",
        renewal_date: null,
        end_date: "2024-04-12T07:00:00Z",
        total_responses: 0,
        responses_by_day: {},
      },
      "31067b30-e0d5-4daa-bd19-ff7c091e9f76": {
        uuid: "31067b30-e0d5-4daa-bd19-ff7c091e9f76",
        campaign_name: "808",
        active: false,
        start_date: "2024-04-18T07:00:00Z",
        renewal_date: null,
        end_date: "2024-04-25T07:00:00Z",
        total_responses: 0,
        responses_by_day: {},
      },
      "087945d6-9362-4ed8-8368-175a2e5ed7ba": {
        uuid: "087945d6-9362-4ed8-8368-175a2e5ed7ba",
        campaign_name: "After Sentry Back Online",
        active: false,
        start_date: "2024-04-22T07:00:00Z",
        renewal_date: null,
        end_date: "2024-05-22T07:00:00Z",
        total_responses: 0,
        responses_by_day: {},
      },
    },
  },
};

const newSurveys = Object.values(response.data.surveys).reverse();
export const surveysSummaryReport: SurveyReports = {
  ...response.data,
  surveys: newSurveys,
};
