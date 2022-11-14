const app = require("express");
const router = app.Router();

const controller = require("../svc1/controller");

router.get("/change_color", controller.changeColor);

module.exports = router;
