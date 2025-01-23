import { StripeLocationDetails } from "~/lib/types";

export const stripeLocationDetails: StripeLocationDetails = {
  billing_email: "example@example.com",
  default_payment_method: {
    id: "pm_1234567890ABCDEFGHIJKLMN",
    // method_type: "amex",
    // method_type: "mastercard",
    // method_type: "default",
    method_type: "us_bank_account",
    last4: "9876",
  },
  // default_payment_method: null,
  subscription_details: {
    name: "Standard Devlocal Test Experience",
    status: "active",
    amount: 3000,
    interval: "month",
    next_invoice: "2023-12-25T22:57:35",
  },
};
