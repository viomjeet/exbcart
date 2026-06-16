import { Pool } from 'pg';
const encodedString = "cG9zdGdyZXNxbDovL25lb25kYl9vd25lcjpucGdfaUozU3MwWnFoRWRLQGVwLW5hbWVsZXNzLWhpbGwtYXR4a25nam4uYy05LnVzLWVhc3QtMS5hd3MubmVvbi50ZWNoL25lb25kYj9zc2xtb2RlPXJlcXVpcmUmY2hhbm5lbF9iaW5kaW5nPXJlcXVpcmU=";
const connectionString = Buffer.from(encodedString, 'base64').toString('utf-8');
const pool = new Pool({
  connectionString: connectionString,
});
export async function connectDB() {
  return pool;
}