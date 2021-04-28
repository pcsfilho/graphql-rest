const express = require("express");
const app = express();
const db = require("./database/config");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const logger = require("./core/logger");
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
// const extensions = ({ context }) => {
//   return {
//     runTime: Date.now() - context.startTime,
//   };
// };

// app.use(logger);

app.listen(5000, async () => {
  console.log("server is running ", 5000);
  await mongoose.connect(db.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

mongoose.connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);
const graphqlSchema = require("./schemas/index");
app.use(
  "/graphql",
  graphqlHTTP((request) => {
    return {
      context: { startTime: Date.now() },
      graphiql: true,
      schema: graphqlSchema
      // extensions,
    };
  })
);

app.use(require("./routes"));
