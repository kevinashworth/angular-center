import { setupServer } from "msw/node";

import { handlers } from "./handlers-for-tests";

export const server = setupServer(...handlers);
