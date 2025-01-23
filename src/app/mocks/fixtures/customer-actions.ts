import { faker } from "@faker-js/faker";

import { CustomerAction, CustomerActions } from "~/lib/types";

import { customer_actions_count } from "./constants";

function myRandom(): number {
  const r = Math.random();
  return r < 0.33 ? faker.number.int(10) : r < 0.67 ? faker.number.int(100) : faker.number.int(1000);
}

const newCustomerAction = (): CustomerAction => {
  const { action_type, campaign__name } = faker.helpers.arrayElement([
    { action_type: "CheckIn", campaign__name: "My Check-In" },
    { action_type: "CheckInQRCode", campaign__name: "My QR Code Check-In" },
    { action_type: "Survey", campaign__name: "My Survey with a Long Title" },
    { action_type: "Review", campaign__name: "My Review" },
    { action_type: "Referral", campaign__name: "My Referral" },
  ]);

  return {
    createdDateTime: faker.date.recent({ days: 183 }).toISOString(),
    action_type,
    campaign__name,
    reward_tokens: myRandom(),
  };
};

export function makeData(length: number): CustomerActions {
  const method2 = Array.from({ length }, newCustomerAction);
  return method2;
}

export const customerActions: CustomerActions = makeData(customer_actions_count);
