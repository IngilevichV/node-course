import express from 'express';
const data =require('../src/testData.json');

const router = express.Router();
const contests = data.contests.reduce((obj, contest) => {
  obj[contest.id] = contest;

  return obj;
}, {});

router.get('/contests', (req, res) => {
  res.send({contests});
});

router.get('/contests/:contestId', (req, res) => {
  let contest = contests[req.params.contestId];

  contest.description = 'Lorem ipsum dolor...';

  res.send(contest);
});

export default router;