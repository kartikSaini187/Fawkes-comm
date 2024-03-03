// models/baseMongo.js
const { MongoClient } = require('mongodb');

class BaseMongo {
    constructor() {
        this.db = null;
    }

    async connect(url, dbName) {
        try {
            const client = new MongoClient(url);
            await client.connect();
            this.db = client.db(dbName);
            console.log("MongoDB connected on:", url);
        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
        }
    }

    async getCollection(collectionName) {
        if (!this.db) {
            throw new Error("Database Not Connected");
        }
        return this.db.collection(collectionName);
    }
}

const baseMongoInstance = new BaseMongo();
module.exports = baseMongoInstance;
