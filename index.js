// Entry point for server
const express = require('express');
const nameRoutes = require('./routes/nameRoutes');
const hobbyRoutes = require('./routes/hobbyRoutes');
const dreamRoutes = require('./routes/dreamRoutes');

const app = express();
require('dotenv').config();

app.use(express.json());
app.use(nameRoutes);
app.use(hobbyRoutes);
app.use(dreamRoutes);

const PORT = process.env.PORT || 3000;

if (process.env.ENVIRONMENT === 'development') {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
} else {
    module.exports = app;
}
