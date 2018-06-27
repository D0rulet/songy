module.exports = (app) => {
  app.post('/register', (req, res) => {
    res.send({
      message: `Hello ${req.body.email}! Your password is now public: ${req.body.password}! You are welcome!`
    })
  })
}
