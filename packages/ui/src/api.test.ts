import path from "path";
import { describe, test, expect } from 'vitest'
import {
    PactV3,
    MatchersV3,
  } from "@pact-foundation/pact";
import { API } from "./api";

const { eachLike } = MatchersV3;

const provider = new PactV3({
  dir: path.resolve(process.cwd(), "pacts"),
  logLevel: "info",
  consumer: "productsUI",
  provider: "productsService",
});

describe('getting all products',()=>{
  test('products exists',async ()=>{
    await provider.addInteraction({
      states: [{ description: "products exist" }],
      uponReceiving: "get all products",
      withRequest: {
        method: "GET",
        path: "/products"
      },
      willRespondWith: {
        status: 200,
        body: eachLike({
          id: "01",
          website: "https://test.com",
          name: "Gem Visa"
        }),
      },
    });
    await provider.executeTest(async (mockService) => {
      const api = new API(mockService.url);

      const product = await api.getAllProducts();

      expect(product).toStrictEqual([
        { id: "01", name: "Gem Visa", website: "https://test.com" },
      ]);
    });
  })
})