import { Api, StackContext } from "sst/constructs";

export function ProductsStack({ stack }: StackContext) {
  // Create the HTTP API
  const api = new Api(stack, "Api", {
    routes: {
      "GET /products": "packages/functions/src/products.handler",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}