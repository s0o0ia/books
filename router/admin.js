const { Router } = require("express")
const router = Router()

const multer  = require("multer");

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "uploads");
    },
    filename: function (req, file, cb) {
            cb(null, Date.now()  + "-" + file.originalname)
    }
});

router.use(multer({storage:storageConfig}).single("filedata"));

router.post("/add_product", (req, res) => {
    console.log(req.body);
    let filedata = req.file;
    console.log(filedata);

    if(!filedata)
        res.send("Ошибка при загрузке файла");
    else{
        res.redirect("/add_product")
    }
   
});
// router.post("/add_product", (req, res) => {
//   const sql = `INSERT INTO products (name_book, description_book, price_book, caregory_book) VALUES ('${req.body.name_book}', '${req.body.description_book}','${req.body.price_book}','${req.body.caregory_book.value}')`;
//   connection
//     .query(sql)
//     .then(result => {
//       console.log(result);
//       res.redirect("/");
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

module.exports = router;