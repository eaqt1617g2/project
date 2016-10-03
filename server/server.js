/**
 * Created by Jordi on 27/09/2016.
 */
 

// incluir requisitos
require('./config/complements');
require('./models/UserModel');
require('./routes/users');

app.use('/', express.static('../public'));

// Conexión con la base de datos
mongoose.connect('mongodb://localhost:27017/users-seminario');


// Escucha en el puerto 2709 y corre el server
app.listen(2709, function() {
    console.log('App listening on port 2709');
});