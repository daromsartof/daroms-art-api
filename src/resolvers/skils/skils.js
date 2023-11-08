import prisma from "../../utils/prisma.client";

const skilsByCategory = (_, { category_id }) => prisma.skils.findUnique({
    where: {
        sk_category_id: parseInt(category_id)
    },
    include:{
        sk_category: true
    }
})

const allSkils = () => prisma.skils.findMany({
    include: {
        sk_category: true
    }
})

export {
    skilsByCategory,
    allSkils
}