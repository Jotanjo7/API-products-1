import app from "./app.js";
import fs from 'fs';
import { product } from './models/products.js'
import { sequelize } from "./database/database.js";


sequelize.sync({ force: true }).then(() => {
  app.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
  fs.readFile("Products.json", (error, data) => {
    if (error) throw error;
    let json = JSON.parse(data);
    let arr = json.results?.map((e) => {

      return product.create({
        id: e.id,
        title: e.title,
        price: e.price,
        image: e.image,
        stock: e.stock,
        categories: e.categories,
        description: e.description,
      })
    })
    Promise.all(arr)
  })
});