import { Client } from 'pg';
import dotenv from 'dotenv';
dotenv.config();


async function getUser(email: string,userId:number) {
    const client = new Client({
        connectionString:process.env.DATABASE_URL
    });
    

  try {
    await client.connect(); 
    const query = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    const result = await client.query(query, values);
    
    if (result.rows.length > 0) {
      console.log('User found:', result.rows[0]); 
      return result.rows[0]; 
    } else {
      console.log('No user found with the given email.');
      return null; 
    }
  } catch (err) {
    console.error('Error during fetching user:', err);
    throw err;
  } finally {
    await client.end(); // Close the client connection
  }

  try {
    await client.connect();
    const query = `
        SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
        FROM users u
        JOIN addresses a ON u.id = a.user_id
        WHERE u.id = $1
    `;
    const result = await client.query(query, [userId]);

    if (result.rows.length > 0) {
        console.log('User and address found:', result.rows[0]);
        return result.rows[0];
    } else {
        console.log('No user or address found with the given ID.');
        return null;
    }
} catch (err) {
    console.error('Error during fetching user and address:', err);
    throw err;
} finally {
    await client.end();
}
}

// Example usage
getUser('user5@example.com',3).catch(console.error);