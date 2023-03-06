const express = require('express');
const db = require('./utils/database');
const UserRoutes = require('./routes/users.routes');
const ToDosRouter = require('./routes/toDo.routes');
const CategoriesRouter = require ('./routes/categories.routes')

const app = express();

const PORT = 8000;

app.use(UserRoutes);
app.use(ToDosRouter);
app.use(CategoriesRouter);

db.authenticate()
    .then(() => {
        console.log('authentication successful');
});

// db.sync()
db.sync({ force: true})  
// db.sync({ alter: true})  

 .then(() => {
   console.log('Base de datos sincronizada. :)');
 })
  .catch((error) =>{
    console.log(error);
});


app.get('/', (req,res) => {
    res.send("welcome to ToDosApi")
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});