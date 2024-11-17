// Controllers for hobby routes

const getHobbies = (req, res) => {
    res.json({
        hobby: 'Programming',
    });
};

module.exports = { getHobbies };
