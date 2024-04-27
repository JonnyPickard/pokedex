import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./schema.graphql",
  generates: {
    "./server/src/resolvers/resolvers-types.ts": {
      config: {
        useIndexSignature: true,
        maybeValue:
          "T extends PromiseLike<infer U> ? Promise<U | null> : T | null",
      },
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};

export default config;
