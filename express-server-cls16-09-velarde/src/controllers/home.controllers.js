

const ctrlHome = {};


ctrlHome.getHome =(req, res) => {
    res.send({
        message: 'Petición GET'
    })
};


ctrlHome.postHome =(req, res) => {
    res.send({
        message: 'Petición POST'
    })
};

ctrlHome.putHome = (req, res) => {
    res.json({
        message: "Peticion  PUT"
    })
};

ctrlHome.deleteHome = (req, res) => {
    res.json({
        message: "Peticion DELETE"
    })
};


module.exports = ctrlHome;



