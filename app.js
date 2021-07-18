const express = require("express")
const routes = require("./routes/routes")
const app = express()

// Routes Middleware
app.use(express.json())
// Routes of Application
app.use("/", routes)
// Envoironmental Port
port = process.env.PORT || 8080
// Start server
app.listen(port, ()=>{
    console.log("Bark Bart API is now live!")
});
