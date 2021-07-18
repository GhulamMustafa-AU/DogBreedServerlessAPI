const express = require("express");
const router = express.Router();
const pool = require("../database/connection")

// @route  GET /
// @desc   GET the index page
// @access Public
router.get("/", async (req, res) => {
    res.json({status: "Bark Bark! Ready to roll!"})
});

// @route  GET /breeds
// @desc   GET all breeds
// @access Public
router.get("/breeds", async (req, res) => {
    pool.query("SELECT * FROM breeds",(err, results) => {
        if (err) res.json(err)   
        if (!results) res.json({status: nothing})
        else res.json([...results])
    })
});

// @route  GET /:breed
// @desc   GET a breed by name
// @access Public
router.get("/:breed", async (req, res) => {
    pool.query("SELECT * FROM breeds WHERE name = ?", [ req.params.breed ], (err, roes) => {
        if (err) res.json(err)   
        if (!rows) res.json({status: "nothing"})
        else res.json(rows)
    })
});
 

// @route  POST /
// @desc   POST a breed
// @access Public
router.post("/", async (req, res) => {
    if (req.body.name != null){
        var query = "INSERT INTO breeds VALUES('"+req.body.name+"', '"+req.body.type+"', '"+req.body.lifeExpectancy+"', '"+ req.body.origin+"')";
    }
    else
        return res.send({Error: "Unique value cannot be NULL"})
    pool.query(query,  (err, rows) => {
        if (err) res.json({status: "error", reson: err})   
        else res.json({status: "success", data: rows})
    })
})

// @route  DELETE breeds/breed
// @desc   DELETE a breed by name
// @access Public
router.delete("/breeds/:breed", (req, res) => {
    var query = "DELETE FROM breeds WHERE name = '"+req.params.breed+"';"
    pool.query(query, (err, rows) => {
        if (err) res.json({status: "error", reson: err})   
        else res.json({status: "success", data: rows})
    })
})


// @route  UPDATE /:breed
// @desc   UPDATE a breed by name
// @access Public
router.put("/:breed", async (req, res) => {
    var query = "UPDATE breeds SET name = '"+req.body.name+"', type = '"+req.body.type+"', lifeExpectancy = '"+req.body.lifeExpectancy+"', origin = '"+ req.body.origin+"' WHERE name = '"+req.params.breed+"';"
    pool.query(query,  (err, rows) => {
        if (err) res.json({status: "error", reson: err})   
        else res.json({status: "success", data: rows})
    })
})

module.exports = router