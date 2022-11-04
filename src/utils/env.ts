export default {
    mongoURL: process.env.MONGO_URL || "mongodb://localhost:27017/db-bethehero",
    port: process.env.PORT || 3333,
    jwtSecret: process.env.JWT_SECRET || "6500124473e97506e6f746ed606ad760",
};
