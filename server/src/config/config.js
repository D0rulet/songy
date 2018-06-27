module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'songy',
    user: process.env.DB_USER || 'songy',
    password: process.env.DB_PASS || 'songy',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './songy.sqlite'
    }
  }
}
