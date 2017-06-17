import {schema, normalize} from 'normalizr';

const productsSchema = new schema.Entity('products');
const productArraySchema = new schema.Array(productsSchema);

export interface ProductInterface{
  id: number;
  title: string;
  description: string;
  price: number;
}


const makeProduct = (id:number,title:string,price:number,description:string = ''):ProductInterface => {
  return {
    id,
    title,
    price,
    description
  }
};

//
const productsData = [
  makeProduct(1,'Toy Car',9.99),
  makeProduct(2,'Doll',19.99),
  makeProduct(3,'RC Helicopter',59.99),
  makeProduct(4,'Coffee Grinder',26.99),
  makeProduct(5,'Rigol Oscilloscope',355.99),
  makeProduct(6,'Beach Towel',19.99),
  makeProduct(7,'Ear Plugs',6.99),
  makeProduct(8,'Desk Lamp',15.99),
  makeProduct(9,'Dune Buggy',12000),
  makeProduct(10,'Gift Card',20.00)
];

const normalizedProducts = normalize(productsData, productArraySchema);
console.log(normalizedProducts);
export makeProduct;
export defaultProduct;


