import { GraphQLScalarType } from "graphql";

const dateTimeScalar = new GraphQLScalarType({
    name: 'DateTime',
    description: 'DateTime custom scalar type',
    serialize(value) {
        // Convert outgoing Date to string for GraphQL
        return value.toISOString(); // Value sent to the client
    },
    parseValue(value) {
        // Convert incoming string to Date for JavaScript
        return new Date(value); // Value from the client input variables
    },
    parseLiteral(ast) {
        if (ast.kind === Kind.STRING) {
            // Convert string to Date when coming in inline in the query
            return new Date(ast.value); // Value from the client query
        }
        return null; // Invalid hard-coded value (not a string)
    }
});

export {
    dateTimeScalar
}