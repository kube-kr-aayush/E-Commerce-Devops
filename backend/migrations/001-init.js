export default async function migration001(db) {
  console.log("Running migration 001: initial setup");

  const collections = await db.listCollections().toArray();
  const names = collections.map(c => c.name);

  if (!names.includes("products")) {
    await db.createCollection("products");
    console.log("Created products collection");
  }

  if (!names.includes("users")) {
    await db.createCollection("users");
    console.log("Created users collection");
  }

  console.log("Migration 001 completed");
}

