import { ReviewsReport } from "~/lib/types";

export const reviewsReport: ReviewsReport = {
  total_average: 3.7,
  reviews_per_month: [
    {
      month: "2024-01-01",
      reviews: 1,
    },
    {
      month: "2023-10-01",
      reviews: 8,
    },
    {
      month: "2023-09-01",
      reviews: 13,
    },
    {
      month: "2023-08-01",
      reviews: 21,
    },
    {
      month: "2023-07-01",
      reviews: 4,
    },
    {
      month: "2023-06-01",
      reviews: 2,
    },
  ],
  average_per_month: [
    {
      month: "2024-01-01",
      average: 5.0,
    },
    {
      month: "2023-10-01",
      average: 3.625,
    },
    {
      month: "2023-09-01",
      average: 4.8,
    },
    {
      month: "2023-08-01",
      average: 3.2,
    },
    {
      month: "2023-07-01",
      average: 3.8,
    },
    {
      month: "2023-06-01",
      average: 5.0,
    },
  ],
  reviews: [
    {
      user__user_tag: "jakelocal",
      rating: 5,
      review_date__date: "2023-08-15",
      comment: "",
    },
    {
      user__user_tag: "jaker3",
      rating: 1,
      review_date__date: "2023-08-15",
      comment: "",
    },
    {
      user__user_tag: "jake2",
      rating: 5,
      review_date__date: "2023-09-26",
      comment: "",
    },
    {
      user__user_tag: "This Is A Really Long User Name",
      rating: 3,
      review_date__date: "2023-09-29",
      comment: "I am really long",
    },
    {
      user__user_tag: "Carnitas@4th",
      rating: 3,
      review_date__date: "2023-10-23",
      comment: "",
    },
    {
      user__user_tag: "TerrificCarrot",
      rating: 5,
      review_date__date: "2024-01-08",
      comment: "",
    },
  ],
};
