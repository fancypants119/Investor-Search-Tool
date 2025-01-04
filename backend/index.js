
const express = require('express')
const connectDB = require('./src/db.js')
const cors = require('cors')
const port = process.env.PORT || 3000;
const Investor = require('./src/models/investor.js')
const app = express()
const routes = require("./src/routes/apis.js")

connectDB()
.then(() => {
    console.log("Starting server");
    const corsConfig = {
      credentials: true,
      origin: "http://localhost:5173",
      methods: ["POST", "DELETE", "GET"], 
      sameSite: "none",
      allowedHeaders: ["Content-Type", "Authorization"], 
      exposedHeaders: ["Content-Length", "X-Kuma-Revision"],
      Secure: true,
    };

    app.use(cors(corsConfig));
    app.use(express.json());
    
    app.use("/api", routes);

    app.use((err, req, res, next) => {
      res.status(422).send({ error: err.message });
    });

    app.listen(port, () => 
      console.log(`Server is running on port ${port}`)
  );
  })
  .catch((err) => {
    console.log("Error: ", err);
  });