import prisma from "../../utils/prisma.client";

const pfCategories = () => prisma.pf_Category.findMany({
    include: {
        skils: true
    }
})

export {
    pfCategories
}