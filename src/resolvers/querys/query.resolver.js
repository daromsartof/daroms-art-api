import prisma from "../../utils/prisma.client.js";

const query_resolver = {
    user: () => prisma.user.findFirst(),
    skilsByCategory: (_, { category_id }) => prisma.sk_Category.findUnique({
        where: {
            id: parseInt(category_id)
        },
        include: {
            skils: true
        }
    }),
    allSkils: () => prisma.skils.findMany({
        include: {
            sk_category: true
        }
    }),
    skCategories: () => prisma.sk_Category.findMany({
        include: {
            skils: true
        }
    }),
    portfolioByCategory: (_, { category_id }) => prisma.pf_Category.findUnique({
        where: {
            id: parseInt(category_id)
        },
        include: {
            portfolios: true
        }
    }),
    allPortfolio: () => prisma.portFolio.findMany({
        include: {
            sk_category: true
        }
    }),
    pfCategories: () => prisma.pf_Category.findMany({
        include: {
            skils: true
        }
    })
}

export default query_resolver