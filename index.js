const express = require(`express`);
const { faker } = require(`@faker-js/faker`);
const routerApi = require(`./routes`);

const app = express();
const port = 3000;
const IP = `192.168.0.24`;

app.use(express.json());

app.get(`/`, (req, res) => {
  res.send(`hola mi server en express`);
});

app.get(`/nueva-ruta`, (req, res) => {
  res.send(`soy una nueva ruta`);
});

routerApi(app);

app.listen(port, () => {
  console.log(`http://${IP}:${port}/`);
});
