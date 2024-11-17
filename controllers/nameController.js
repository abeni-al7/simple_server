// Controller for the name route
const getName = (req, res) => {
    res.send('Abenezer Alebachew Endalew');
    res.status(200);
};

module.exports = {
    getName,
};
