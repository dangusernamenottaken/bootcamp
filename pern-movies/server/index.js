const express = require("express") //requiring express module

const app = express();
const cors = require("cors")

app.listen(PORT,() => {

    console.log(`server has started on port ${PORT}`)
})
