const aprendizController = require('../Controllers/aprendizController');
const express = require('express');
const router = express.Router();

router.route('/list').get(aprendizController.all_aprendices);

router.route('/details/:id').get(aprendizController.aprendiz_details);

router.route('/create').post(aprendizController.aprenidz_create);

router.route('/update/:id').put(aprendizController.aprendiz_update);

router.route('/delete/:id').delete(aprendizController.aprendiz_delete);

module.exports = router;