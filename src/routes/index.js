const express = require('express');
const router = express.Router();
const controller = require('../controllers')

/* GET home page. */
router.get('/',controller.alumnos.getAlumnos);
router.post('/',controller.alumnos.createAlumnos);
router.get('/delete/:id',controller.alumnos.deleteAlumnos);

module.exports = router;
