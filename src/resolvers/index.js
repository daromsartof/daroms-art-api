import { PrismaClient } from "@prisma/client";
import { dateTimeScalar } from "../services/scalar.js";

const prisma = new PrismaClient();

const resolvers = {
    Query: {
        allUsers: () => prisma.user.findMany()
    },
    DateTime: dateTimeScalar,
};

export default resolvers