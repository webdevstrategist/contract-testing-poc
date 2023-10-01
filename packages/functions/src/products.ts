import { ProductRepository } from "./products.repository";

export async function handler() {
  const repository = new ProductRepository();
    return {
      statusCode: 200,
      body: JSON.stringify(repository.fetchAll()),
      "headers": {
        'Content-Type': 'application/json',
    }
    };
  }