import { publicProcedure, router } from "./trpc";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const appRouter = router({
  meal: publicProcedure.query(async () => {
    const res = await prisma.meal.findMany();

    return res;
  }),
});

export type AppRouter = typeof appRouter;
