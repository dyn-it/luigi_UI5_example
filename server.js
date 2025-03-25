const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080; // Use Cloud Foundry assigned port

app.use(express.static(path.join(__dirname, "dist"))); // Serve UI5 app from dist folder

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
