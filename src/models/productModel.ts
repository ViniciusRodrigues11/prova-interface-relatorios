import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";

@Entity('products')
export default class Orphanage {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  codigo: string;

  @Column()
  descricao: string;

  @Column()
  altura: number;

  @Column()
  largura: number;

  @Column()
  profundidade: number;

  @Column()
  peso: number;

  @Column()
  valorCompra: number;

  @Column()
  valorVenda: number;

}

