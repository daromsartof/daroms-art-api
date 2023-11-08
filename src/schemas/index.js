const shemas = `#graphql
    scalar DateTime

    type User {
        id :       Int!       
        email :    String!    
        name   :   String!
        firstName: String
        bio    :   String
        birthday:  DateTime
        degree   : String
    }
    type Sk_Category {
        id: Int!
        name: String
        skils: [Skils]
    }
    type Skils {
        id  :     Int!
        name : String!
        logo_path : String
        sk_category_id : Int
        sk_category : Sk_Category
    }
    type Pf_Category {
        id : Int!
        name : String!
        portfolios : [PortFolio]
    }
    type PortFolio {
        id : Int !
        name : String!
        description : String
        link : String
        path : String
        pf_category_id : Int
        pf_category : Pf_Category 
    }

    type Query {
        user: User
        skilsByCategory(category_id: Int): Skils
        allSkils: [Skils]
        skCategories: [Sk_Category]
        portfolioByCategory(category_id: Int): [PortFolio]
        allPortfolio: [PortFolio]
        pfCategories: [Pf_Category]
    }

    type Mutation {
        addSkilsCategory(name: String!): Sk_Category
        addPortfolioCategory(name: String!): Pf_Category
    }
`;

export default shemas