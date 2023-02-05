const express = require('express');

const router = express.Router();

router.get('/data', (req, res) => {
  if (req.userAgent.includes('Mobile')) {
    return res.status(200).json({ message: 'Mobile device detected' });
  }
  if (req.userAgent.includes('Chrome')) {
    return res.status(200).json({ message: 'Web browser detected' });
  }
  return res.status(200).json({ message: 'Other device detected' });
});

module.exports = router;
