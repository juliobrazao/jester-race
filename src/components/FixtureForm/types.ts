import * as z from "zod";

export const FixtureFormSchema = z.object({
  firstField: z.string().min(1).max(40),
  secondField: z.string().min(1).max(40),
  thirdField: z.string().min(1).max(40),
});

export type FixtureFormType = z.infer<typeof FixtureFormSchema>;
