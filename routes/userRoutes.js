const express = require('express');
const router = express.Router();
const usuarioCtrl = require('../controllers/userController');

router.post('/', usuarioCtrl.crearUser);
router.get('/', usuarioCtrl.consultarUsers);
router.get('/', usuarioCtrl.consultarUser);
router.delete('/', usuarioCtrl.deleteUser);
router.put('/', usuarioCtrl.updateUser);

module.exports = router;