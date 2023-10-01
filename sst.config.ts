import { SSTConfig } from "sst";
import { ProductsStack } from "./stacks/ProductsStack";

export default {
  config(_input) {
    return {
      name: "contract-testing-poc",
      region: "ap-south-1",
    };
  },
  stacks(app) {
    app.stack(ProductsStack);
  }
} satisfies SSTConfig;
