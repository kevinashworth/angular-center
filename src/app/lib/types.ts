import { z } from 'zod';

export const CustomerSchema = z.object({
  uuid: z.string(),
  user_tag: z.string(),
  name: z.string(),
  first_action_date: z.string(),
  checkins: z.number(),
  actions: z.number(),
  most_recent_action: z.string().datetime()
});

export type Customer = z.infer<typeof CustomerSchema>;
