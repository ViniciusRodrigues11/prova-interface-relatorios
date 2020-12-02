import productModel from "../models/productModel";

export default {
    render(product: productModel) {
        return {
            id: product.id,
            codigo: product.codigo,
            descricao: product.descricao,
            valorVenda: product.valorVenda,
        }
    },

    renderMany(products: productModel[]) {
        return products.map(product => this.render(product));
    }
}