const app = require("./interfaces/http/server");

const port = 3000;

const main = async () => {
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
};

(async () => {
  await main();
})();
