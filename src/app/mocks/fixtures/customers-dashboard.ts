import { PartialCustomer } from "~/lib/types";

import { client_count } from "./constants";

const allCustomersDashboard: PartialCustomer[] = [
  {
    name: "John Doe",
    user_tag: "jdoe",
    actions: 3,
  },
  {
    name: "Mike Doe",
    user_tag: "mikeDoe",
    actions: 1,
  },
  {
    name: "Nick",
    user_tag: "nick",
    actions: 2,
  },
  {
    name: "Marissa",
    user_tag: "rissa",
    actions: 5,
  },
];

export const customersDashboard = allCustomersDashboard.slice(0, client_count);
