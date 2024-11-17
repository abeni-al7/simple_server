// Controllers for hobby routes

const getHobbies = (req, res) => {
    res.json({
        hobby: 'Programming',
    });
    res.status(200);
};

module.exports = { getHobbies };
