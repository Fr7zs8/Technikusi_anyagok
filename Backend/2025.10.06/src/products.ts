export interface IProducts{
    id: number | null | undefined,
    name: string,
    description: string,
    price: number,
    stock:number,
    pictururl:string
}

class Products implements IProducts{
    id: number | null | undefined = null
    name: string
    description: string
    price: number
    stock:number
    pictururl:string

    constructor(product: IProducts){
        this.id = product.id;
        this.name = product.name;
        this.description = product.description;
        this.price = product.price;
        this.stock = product.stock;
        this.pictururl = product.pictururl
    }
}

export default Products;