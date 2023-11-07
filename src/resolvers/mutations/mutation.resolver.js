import prisma from "../../utils/prisma.client.js";

const mutation_resolver = {
    addSkilsCategory: (_, { name }) => prisma.sk_Category.create({
        data: {
            name
        }
    }),
    addPortfolioCategory: (_, { name }) => prisma.pf_Category.create({
        data: {
            name
        }
    })
}

export default mutation_resolver