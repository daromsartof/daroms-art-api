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
    
    type Query {
        allUsers: [User]
    }
`;

export default shemas