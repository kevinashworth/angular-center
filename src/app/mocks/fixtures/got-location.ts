import { GotLocation } from "~/lib/types";

export const gotLocation: GotLocation = {
  name: "Nathan's Stripe Test Location",
  nickname: "Steve",
  token_balance: { token_balance_get: 106, token_balance_gyt: 0 },
  fulfillment: {
    product: "Premium Devlocal Test Experience",
    status: "active",
    valid: true,
    features: ["dev-test", "survey", "qrcodecheckin"],
  },
};
