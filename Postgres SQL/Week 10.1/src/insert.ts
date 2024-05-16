import { Client } from 'pg';

async function insertData(username: string, email: string, password: string,user_id:number,city:string,country:string,street:string,pincode:number) {
  const client = new Client({
   connectionString:process.env.DATABASE_URL
  });

  try {
    await client.connect(); 

    const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    console.log('Insertion success:', res); 
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end(); // Close the client connection
  }

  try {
    await client.connect(); 

    const insertQuery = "INSERT INTO addresses (user_id, city, country,street,pincode) VALUES ($1, $2, $3, $4, $5)";
    const values = [user_id,city,country,street,pincode ];
    const res = await client.query(insertQuery, values);
    console.log('Insertion success:', res); 
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end(); // Close the client connection
  }

}


// Example usage
insertData('username5', 'user5@example.com', 'user_password',3,"mumbai","india","delhi 100 street",87882).catch(console.error);