const express = require("express");
const router = express.Router();
const { getMetadata, getRows, addRow, updateValue } = require("./controllers");

router.get("/metadata", getMetadata);
router.get("/getRows", getRows);
router.post("/addRow", addRow);
router.post("/updateValue", updateValue);

module.exports = router;
