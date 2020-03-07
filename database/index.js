const { connection } = require("../config");
connection.connect(function(err) {
  if (err) {
    return console.error("Ошибка: " + err.message);
  } else {
    console.log("Подключение к серверу MySQL успешно установлено");
  }
});

class Offer {
  static async add(el) {
    const sql = `INSERT INTO products(name, content, price, caregory, image, description) VALUES("${el.name}","${el.content}","${el.price}","${el.caregory}","${el.image}","${el.description}")`;
    return await connection
      .query(sql)
      .then(result => {
        console.log("Data post, saved");
        return result[0];
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }
  static async get(el) {
    const sql =` SELECT * FROM products`;
    return await connection
      .query(sql)
      .then(result => {
        console.log("Data post, saved");
        return result[0];
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }
  static async getCurrent(id) {
    const sql = `SELECT * FROM products WHERE id="${id}"`;
    return await connection
      .query(sql)
      .then(result => {
        console.log("Data post, saved");
        return result[0];
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }
  static async update(el) {
    const sql = `UPDATE products SET title="${el.name}", price="${el.price}", description="${el.content}" WHERE id="${el.offer_id}"`;

    return await connection
      .query(sql)
      .then(result => {
        console.log("Data post, saved");
        return result[0];
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }
}



module.exports.Offer = Offer;
