// Entry point for server
const express = require('express');
const nameRoutes = require('./routes/nameRoutes');

const app = express();

app.use(express.json());
app.use(nameRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
