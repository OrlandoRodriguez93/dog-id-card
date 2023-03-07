const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static(path.join(__dirname, 'app')));
 
router.get('/laura',function(req,res){
  res.sendFile(path.join(__dirname+'/app/lauras-id.html'));
});

app.use('/', router);

const port = process.env.PORT || 5000
app.listen(port, () => console.log('Escuchando Puerto: ' + port))