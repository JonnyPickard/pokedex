export default {
  typeDef: `#graphql
  type BaseList {
    count: Int
    next: String
    previous: String
    results: [BaseName]
    status: Boolean
    message: String
  }
`,
};
