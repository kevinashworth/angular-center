import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';

import { Customer } from '~/lib/types';

import { client_count } from './constants';

const newCustomer = (): Customer => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const name = `${firstName} ${lastName}`;
  return {
    uuid: uuidv4(),
    user_tag: faker.internet.username({ firstName, lastName }),
    name,
    first_action_date: faker.date.recent({ days: 183 }).toISOString(),
    checkins: faker.number.int(18),
    actions: faker.number.int(31),
    most_recent_action: faker.date.recent({ days: 61 }).toISOString()
  };
};

export function makeData(length: number): Customer[] {
  const method2 = Array.from({ length }, newCustomer);
  return method2;
}

export const customers: Customer[] = makeData(client_count);
