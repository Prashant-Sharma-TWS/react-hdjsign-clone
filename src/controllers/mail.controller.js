const path = require("path");
const router = require("express").Router();
const multer = require("multer");
const { transporter } = require("../configs/mail");

let nameOfImage = "";
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, path.join(__dirname, "/../uploads"));
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
    nameOfImage = `${file.originalname}`;
  },
});

const upload = multer({
  dest: `${__dirname}/../uploads`,
  storage: storage,
});

router.post("/", upload.single("image"), async (req, res) => {
  const { name, email, phone, size, budget, image } = req.body;
  
  let info = await transporter.sendMail({
    from: '"HDJsign" <apsharma142500@gmail.com>', // sender address
    to: "apsharma142500@gmail.com", // list of receivers
    subject: "Testing email", // Subject line
    text: "HDJsign", // plain text body
    html: `Hello ${name},
    email: ${email},
    phone: ${phone},
    size: ${size},
    budget: ${budget}`,
    attachments: [
      {
        filename: "attachement",
        path: `${__dirname}/../uploads/${nameOfImage}`,
      },
    ],
  });
  
  res.status(200).send(`Email sent.`);
});

module.exports = router;
