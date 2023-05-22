const { Router } = require('express');
const fs = require('fs');

const router = Router();

const files = fs.readdirSync(__dirname).filter(file => file !== 'index.js');

files.forEach(file => {
  import(`./${file}`)
    .then(route => {
      const fileName = file.split('.')[0];
      router.use(`/${fileName}`, route.default);
    });
});

module.exports = router;
