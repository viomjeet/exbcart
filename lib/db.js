import { Pool } from 'pg';

// Yahan apna poora link dalo, dhyan rakhna link ke aage peeche koi extra space ya "base" na likha ho
const connectionString = "postgresql://neondb_owner:npg_iJ3Ss0ZqhEdK@ep-nameless-hill-atxkngjn.c-9.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";

const pool = new Pool({
  connectionString: connectionString,
});

export async function connectDB() {
  return pool;
}