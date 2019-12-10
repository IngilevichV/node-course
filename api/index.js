import express from 'express';
const data =require('../src/testData.json');

const router = express.Router();

router.get('/contests', (req, res) => {
  res.send({contests: data.contests});
});

export default router;