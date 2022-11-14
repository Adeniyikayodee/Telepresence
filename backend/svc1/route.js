const app = require("express");
const router = app.Router();

const controller = require("./controller");

router.get("/change_color", controller.changeColor);

module.exports = router;
