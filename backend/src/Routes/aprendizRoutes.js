const express = require('express');
const router = express.Router();

// --------- Import the controllers ----------
const aprendizController = require('../Controllers/aprendizController');

router.route('/list').get(aprendizController.all_aprendices);

router.route('/details/:id').get(aprendizController.aprendiz_details);

router.route('/ingreso').post(aprendizController.aprendiz_ing);

router.route('/create').post(aprendizController.aprenidz_create);

router.route('/update/:id').put(aprendizController.aprendiz_update);

router.route('/delete/:id').delete(aprendizController.aprendiz_delete);


// ------ Count registros ---------
router.route('/countDocuments').get(aprendizController.countDocuments)

module.exports = router;