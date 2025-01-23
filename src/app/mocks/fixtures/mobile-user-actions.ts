import { faker } from "@faker-js/faker";

import { InternalMobileUserAction, InternalMobileUserActions } from "~/lib/types-internal";

import { mobile_user_actions_count } from "./constants";

// NB: ledger returns "CheckInQRCode" not "QrCodeCheckIn"
const newMobileUserAction = (): InternalMobileUserAction => {
  return {
    id: faker.number.int({ min: 1, max: 100 }),
    type: faker.helpers.arrayElement(["CheckIn", "CheckInQRCode", "Referral", "Review", "Survey", "transfer"]),
    uuid: faker.string.uuid(),
    createdTimestamp: faker.date.past().toISOString(),
    updateTimestamp: faker.date.past().toISOString(),
    actionDescription: faker.lorem.words(2),
    merchantUUID: null,
    merchantLocationUUID: null,
    fromCustomerUUID: null,
    recentOperations: [],
    customerUUID: faker.string.uuid(),
    rewardGetToken: faker.number.int({ min: 1, max: 500 }),
    status: faker.helpers.arrayElement(["status1", "status2", "status3"]),
    processed: faker.datatype.boolean(),
    location_name: faker.company.name(),
  };
};

export function makeData(length: number): InternalMobileUserActions {
  const method2 = Array.from({ length }, newMobileUserAction);
  return method2;
}

export const mobileUserActions: InternalMobileUserActions = {
  pageable: {
    sort: {
      sorted: faker.datatype.boolean(),
      unsorted: faker.datatype.boolean(),
      empty: faker.datatype.boolean(),
    },
    pageSize: 20,
    pageNumber: 0,
    offset: 0,
    paged: faker.datatype.boolean(),
    unpaged: faker.datatype.boolean(),
  },
  last: false,
  totalElements: mobile_user_actions_count,
  totalPages: 2,
  first: true,
  sort: {
    // @ts-expect-error: Object literal
    sorted: faker.datatype.boolean(),
    unsorted: faker.datatype.boolean(),
    empty: faker.datatype.boolean(),
  },
  number: 1,
  numberOfElements: mobile_user_actions_count,
  size: 2,
  empty: faker.datatype.boolean(),
  content: makeData(mobile_user_actions_count),
};
