// Controller for dream routes

const getDream = (req, res) => {
    res.send('Work hard and do not ever give up. Then you will achieve your dreams.');
    res.status(200);
}

module.exports = { getDream };
