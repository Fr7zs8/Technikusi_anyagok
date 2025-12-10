import { defineConfig } from "cypress";
import fs from "fs";
import mysql from "mysql2/promise";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      on("task", {
        async resetDb() {
          try {
            // Kapcsolódás a TEST adatbázishoz
            const connection = await mysql.createConnection({
              host: "localhost",
              user: "root",
              password: "jelszo",
              database: "dog",
              multipleStatements: true, // FONTOS: különben nem fut le több SQL egyszerre!
            });
            const sql = fs.readFileSync("cypress/db/seed.sql", "utf8");

            await connection.query(sql);

            await connection.end();
            console.log("Teszt adatbázis visszatöltve!");

            return null;
          } catch (err) {
            console.error("DB reset error:", err);
            throw err;
          }
        },
      });

      return config;
    },
  },
});
