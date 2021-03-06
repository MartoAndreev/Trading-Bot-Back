import { Injectable, NotFoundException } from "@nestjs/common";
import { title } from "process";
import { Product } from "./product.model";
@Injectable()
export class ProductsService {
    private products: Product[] = [];

    insertProduct(title: string, desc: string, price: number) {
        const prodId = Math.random().toString();
        const newProduct = new Product(prodId, title, desc, price);
        this.products.push(newProduct);
        return prodId;
    }
    getProducts() {
        return [...this.products];
    }
    getSingleProduct(productId: string) {
        const product = this.findeProduct(productId)[0];
        return { ...product };
    }
    updateProduct(productId: string, title: string, desc: string, price: number) {
        const [product, index] = this.findeProduct(productId);
        const updateProduct = { ...product };
        if (title) {
            updateProduct.title = title;
        }
        if (desc) {
            updateProduct.description = desc;
        }
        if (price) {
            updateProduct.price = price;
        }
        this.products[index] = updateProduct;
    }

    deliteProduct(prodId: string) {
        const index = this.findeProduct(prodId)[1];
        this.products.splice(index, 1);
    }

    private findeProduct(id: string): [Product, number] {
        const productIndex = this.products.findIndex((prod) => prod.id == id);
        const product = this.products[productIndex];
        if (!product) {
            throw new NotFoundException('Could not find product');
        }
        return [product, productIndex];
    }

}   
