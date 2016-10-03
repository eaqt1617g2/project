

app.get('/api/users', function(req, res) {
    UserModel.find(function(err, users) {
        if(err) {
            res.send(err);
        }
        res.json(users);
    });
});


app.post('/api/users', function(req, res) {
    UserModel.create({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        alumno_id: req.body.alumno_id,
        email: req.body.email,        
        done: false
    }, function(err, user){
        if(err) {
            res.send(err);
        }

        UserModel.find(function(err, users) {
            if(err){
                res.send(err);
            }
            res.json(users);
        });
    });
});


app.delete('/api/users/:user', function(req, res) {
    UserModel.remove({
        _id: req.params.user
    }, function(err, user) {
        if(err){
            res.send(err);
        }

        UserModel.find(function(err, users) {
            if(err){
                res.send(err);
            }
            res.json(users);
        });

    })
});
