const index = (req, res) => {
  res.status(200);
  res.json({
    text: 'Hello from express server.'
  });
};

module.exports = {
  index,
};