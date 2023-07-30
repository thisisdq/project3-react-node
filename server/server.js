const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// MongoDB connection string
const url = 'mongodb://localhost:27017';
const dbName = 'TestDatabase';

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected to MongoDB successfully');

  const db = client.db(dbName);

  // Start your server here
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
});
