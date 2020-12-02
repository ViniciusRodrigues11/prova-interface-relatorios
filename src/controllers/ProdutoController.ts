import { Request, Response } from "express";
import { getRepository } from "typeorm";


import productView from '../views/productView';
import productModel from "../models/productModel";

export default {
    async index(request: Request, response: Response) {
        const productsRepository = getRepository(productModel);

        const products = await productsRepository.find();

        return response.json(productView.renderMany(products));
    },

    async create(request: Request, response: Response) {
        const {
            codigo,
            descricao,
            altura,
            largura,
            profundidade,
            peso,
            valorCompra,
            valorVenda
        } = request.body;

        const productsRepository = getRepository(productModel);

        const data = {
            codigo,
            descricao,
            altura,
            largura,
            profundidade,
            peso,
            valorCompra,
            valorVenda
        };


        const product = productsRepository.create(data);

        await productsRepository.save(product);

        return response.status(201)
            .json(productView.render(product));
    }
}