const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const setupSwagger = require('./docs/swagger');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/api/users', userRoutes);
setupSwagger(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});