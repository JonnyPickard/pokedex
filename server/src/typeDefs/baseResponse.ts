export default {
  typeDef: `#graphql
  type BaseResponse {
    message: String
    status: Boolean
    response: JSON
    params: JSON
  }
`,
};
