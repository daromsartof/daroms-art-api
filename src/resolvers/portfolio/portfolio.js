import prisma from "../../utils/prisma.client";

const portfolioByCategory = (_, { category_id }) => prisma.portFolio.findUnique({
    where: {
        pf_category_id: parseInt(category_id)
    },
    include: {
        pf_category: true
    }
})

const allPortfolio = () => prisma.portFolio.findMany({
    include: {
        sk_category: true
    }
})

export {
    portfolioByCategory,
    allPortfolio
}