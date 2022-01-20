require('dotenv').config()
module.exports = {
  "development": {
    "database": "CongoP3_development",
    "dialect": "postgres"
  },
  "test": {
    "database": "CongoP3_test",
    "dialect": "postgres"
  },
  "production": {
    use_env_variable: 'DATABASE_URL',
    "dialect": "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
