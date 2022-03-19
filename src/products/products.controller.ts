import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { CreateProductDto } from './dtos/create-products.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    @Post('/signup')
    createProduct(@Body() body: CreateProductDto){
        console.log(body);
    }
    // constructor(private readonly productsService: ProductsService) {

    // }
    // @Post()
    // addProduct(
    //     @Body('title') prodTitle: string,
    //     @Body('description') prodDesc: string,
    //     @Body('price') prodPrice: number,
    // ) {
    //     const generatedId = this.productsService.insertProduct(
    //         prodTitle,
    //         prodDesc,
    //         prodPrice
    //     );
    //     return { id: generatedId };
    // }
    // @Get()
    // gerAllProducts() {
    //     return this.productsService.getProducts();
    // }
    // @Get(':id')
    // getProduct(@Param('id') ProdId: string,) {
    //     return this.productsService.getSingleProduct(ProdId);
    // }
    // @Patch(':id')
    // updateProduct(
    //     @Param('id') prodId: string,
    //     @Body('title') prodTitle: string,
    //     @Body('description') prodDesc: string,
    //     @Body('price') prodPrice: number,
    // ) {
    //     this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
    //     return null;
    // }
    // @Delete(':id')
    // removeProduct(@Param('id') prodId: string,) {
    //     this.productsService.deliteProduct(prodId);
    //     return null;
    // }
}
