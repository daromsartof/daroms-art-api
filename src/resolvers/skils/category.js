import prisma from "../../utils/prisma.client";

const skCategories = () => prisma.sk_Category.findMany({
    include: {
        skils: true
    }
})

export {
    skCategories
}