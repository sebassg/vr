const express = require(`express`);
const { faker } = require(`@faker-js/faker`);

const router = express.Router();

router.get(`/`, (req, res) => {
  res.send(`soy la capa principal de notas`);
});

router.get(`/:id`, (req,res) => {
  const { id } = req.params
  res.json({
    title: `nota ${id}`,
    id
  });
});

router.post(`/`, (req,res) => {
  const body = req.body;
  res.json({
    message: `created`,
    data: body
  });
});

module.exports = router;
