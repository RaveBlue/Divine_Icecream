const client = require("./client");

async function dropTables() {
  try{
    console.log("Dropping All Tables...")
    await client.query(`DROP TABLE IF EXISTS ice_cream_flavors;`)
    await client.query(`DROP TABLE IF EXISTS  ;`)
    await client.query(`DROP TABLE IF EXISTS  ;`)
    await client.query(`DROP TABLE IF EXISTS users;`)
  } catch(error){
    throw new Error(error)
  }
}
//drop all tables, in the correct order

async function createTables() {
  console.log("Starting to build tables...")
  try{
    //create all tables, in the correct order
    await client.query(`
    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      firstname VARCHAR(255) NOT NULL,
      lastname VARCHAR(255) NOT NULL,
      street VARCHAR(255) NOT NULL,
      city VARCHAR(255) NOT NULL,
      state VARCHAR(255) NOT NULL,
      zip VARCHAR(255) NOT NULL,
      phone VARCHAR(255) NOT NUll, 
      isadmin BOOLEAN DEFAULT FALSE

    );
  `)
  await client.query(`
  CREATE TABLE ice_cream_flavors (
    flavor_id SERIAL PRIMARY KEY,
    flavor_name VARCHAR(50) NOT NULL

  );
`)

  }
}
