import { pool } from "../config/database.js";
import "../config/dotenv.js";
import hollow_knights from "../data/hollow-knight.js";

const createBossesTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS bosses;

    CREATE TABLE IF NOT EXISTS bosses (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      health VARCHAR(10) NOT NULL,
      location VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL,
      description TEXT NOT NULL
    )
  `;

  try {
    await pool.query(createTableQuery);
    console.log("🎉 bosses table created successfully");
  } catch (err) {
    console.error("⚠️ error creating bosses table", err);
  }
};

const seedBossesTable = async () => {
  await createBossesTable();

  hollow_knights.forEach((boss) => {
    const insertQuery = {
      text: "INSERT INTO bosses (name, health, location, image, description) VALUES ($1, $2, $3, $4, $5)",
    };

    const values = [
      boss.name,
      boss.health,
      boss.location,
      boss.image,
      boss.description,
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting boss", err);
        return;
      }
      console.log(`✅ ${boss.name} added successfully`);
    });
  });
};

seedBossesTable();
