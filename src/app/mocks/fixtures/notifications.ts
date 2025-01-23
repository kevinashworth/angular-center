import { NotificationsApiResponse } from "~/lib/types";

export const notifications: NotificationsApiResponse = {
  notifications: [
    {
      id: 10,
      createdDateTime: "2023-12-18T21:12:13.456789Z",
      uuid: "638354fa-8ab9-4fd7-8cc9-2af516ab9be6",
      notification_type: "ca",
      viewed: "2023-12-19T05:11:16.830948Z",
      message: "Your Fizzbuzz campaign has activated.",
      merchant: 5,
      viewed_by: 18,
    },
    {
      id: 8,
      createdDateTime: "2023-12-18T11:11:11.111111Z",
      uuid: "5f5bfee9-9b11-4bad-b35a-02c7279814df",
      notification_type: "oot",
      viewed: "2023-12-19T00:41:15.485650Z",
      message: "You are out of tokens, dude. Why did you let yourself become broke?",
      merchant: 5,
      viewed_by: 18,
    },
    {
      id: 5,
      createdDateTime: "2023-12-12T21:11:59.034947Z",
      uuid: "b9a1cdd8-e69f-4327-bfe2-9fc721cce3ce",
      notification_type: "lt",
      viewed: null,
      message: "You are running low on tokens.",
      merchant: 5,
      viewed_by: null,
    },
  ],
  count: 3,
  num_pages: 1,
  has_next: false,
  has_previous: false,
};
