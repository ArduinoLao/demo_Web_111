const express = require("express")
const router = express.Router()

router.post("/login", (req, res) => {
    console.log("login: " + JSON.stringify(req.body));
    res.json({ result: "Login", account: req.body })
})

module.exports = router