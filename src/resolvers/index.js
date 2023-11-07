
import { dateTimeScalar } from "../services/scalar.js";
import mutation_resolver from "./mutations/mutation.resolver.js";
import query_resolver from "./querys/query.resolver.js";



const resolvers = {
    Query: query_resolver,
    Mutation: mutation_resolver,
    DateTime: dateTimeScalar,
};

export default resolvers