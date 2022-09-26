const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config");

const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json(), urlencodedParser);
const PORT = process.env.PORT || 5000;
require("./routes")(app);

mongoose.connect(config.db_url, config.db_options).then((res) => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));
}).catch(err => console.log(err));