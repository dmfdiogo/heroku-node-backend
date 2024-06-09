const exportSwaggerEndpoints = (app) => {

    // app.get('/users/:id', (req, res) => {
    //     const filter = req.query.filter;

    //     const version = req.headers.version;

    //     return res.status(200).send("some data");
    // });

    // app.post('/users', (req, res) => {
    //     const { name, age } = req.body;

    //     return res.status(201).send();
    // });

    app.post('/api/user/register', (req, res) => {
        /*
            #swagger.tags = ['Register user']
            #swagger.summary = 'Returns a user by id'
            #swagger.description = 'This endpoint will return a user by id...'
        */
        const { name, email, password } = req.body;

        return res.status(201).send();
    });

    app.post('/api/user/login', (req, res) => {
        const { email, password } = req.body;

        return res.status(201).send();
    });

    app.get('/user/profile', (req, res) => {
        const filter = req.query.filter;

        const version = req.headers.version;

        return res.status(200).send("some data");
    });

};

export default exportSwaggerEndpoints