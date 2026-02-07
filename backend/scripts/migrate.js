import mongoose from "mongoose";
import migration001 from "../migrations/001-init.js";

const MONGO_URI = process.env.MONGODB_URI;

if (!MONGO_URI) {
  console.error("MONGODB_URI is not set");
  process.exit(1);
}

const migrations = [
  { id: "001-init", run: migration001 }
];

async function runMigrations() {
  console.log("Starting database migration process...");

  await mongoose.connect(MONGO_URI);
  const db = mongoose.connection.db;

  const migrationCollection = db.collection("migrations");

  for (const migration of migrations) {
    const alreadyRun = await migrationCollection.findOne({ id: migration.id });

    if (alreadyRun) {
      console.log(`Skipping migration ${migration.id}`);
      continue;
    }

    console.log(`Applying migration ${migration.id}`);
    await migration.run(db);

    await migrationCollection.insertOne({
      id: migration.id,
      appliedAt: new Date()
    });

    console.log(`Migration ${migration.id} applied`);
  }

  await mongoose.disconnect();
  console.log("Database migration completed successfully");
}

runMigrations()
  .then(() => process.exit(0))
  .catch(err => {
    console.error("Migration failed:", err);
    process.exit(1);
  });

