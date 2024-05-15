import { Client } from "pg";

const client = new Client({
  connectionString:process.env.DATABASE_URL,
});

export async function createUsers() {
  await client.connect();
  const result = await client.query(`
 CREATE TABLE users(
id SERIAL PRIMARY KEY,
username VARCHAR(50) UNIQUE NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) UNIQUE NOT NULL,
created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
 );
`);


const res=await client.query(`
CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    street VARCHAR(255) NOT NULL,
    pincode VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE);
`);
  console.log(res);
  console.log(result);
}



createUsers();
