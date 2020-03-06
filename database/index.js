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
    const sql = `INSERT INTO products(name_book, description_book, price_book, caregory_book, img_book) VALUES("${el.name_book}","${el.description_book}","${el.price_book}","${el.caregory_book}","${el.img_book}")`;
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
    const sql = `SELECT * FROM products`;
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
    const sql = `UPDATE products SET title="${el.name_book}", price="${el.price_book}", description="${el.description_book}" WHERE id="${el.offer_id}"`;

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
