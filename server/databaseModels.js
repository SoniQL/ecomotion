const { Pool } = require('pg');

// url from ElephantSQL
const PG_URI =
  'postgres://vgcrzoyk:sAb-v-WSjeIf4PxmjqRRAyX9CDjONQrL@queenie.db.elephantsql.com:5432/vgcrzoyk';

// create a new pool using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
