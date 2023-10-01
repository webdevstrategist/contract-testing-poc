import { faker } from '@faker-js/faker'

interface Product {
    id: string;
    name: string;
    website?: string;
  }

export class ProductRepository {
    products:Product[] = []
    constructor() {
        Array.from(Array(5).keys()).forEach(_ => {
            this.products.push({
                id: faker.string.uuid(),
                name:faker.commerce.productName(),
                website:faker.image.url()
            })
        });
    }

    updateProducts(products:Product[]){
        this.products = products
    }

    fetchAll() {
        return this.products
    }
}

