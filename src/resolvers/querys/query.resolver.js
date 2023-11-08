import { 
    pfCategories 
} from "../portfolio/category.js";

import { 
    portfolioByCategory,
    allPortfolio
} from "../portfolio/portfolio.js";

import { 
    skCategories,
 
} from "../skils/category.js";

import { 
    skilsByCategory,
    allSkils
} from "../skils/skils.js";

const query_resolver = {
    skilsByCategory,
    allSkils,
    skCategories,
    portfolioByCategory,
    allPortfolio,
    pfCategories
}

export default query_resolver