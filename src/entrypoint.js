require("dotenv").config();

const app = require("./interfaces/http/server");
const database = require("./infra/database");

const port = 3000;

const main = async () => {
  await database.connect();

  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
};

(async () => {
  await main();
})();
