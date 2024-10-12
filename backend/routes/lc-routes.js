const express = require('express');
const router = express.Router();
const { postData, readData, readDataById, updateById, deleteById } = require('../controller/lc-controller');

router.get('/get', readData);
router.get('/get/:id', readDataById);
router.post('/post', postData);
router.put('/update/:id', updateById);
router.delete('/delete/:id', deleteById);

module.exports = router;
