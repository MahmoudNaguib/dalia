require('dotenv').config();
const express = require('express');
const multer = require('multer');
const upload = multer();
const cors = require('cors');

const app = express();
const port = process.env.PORT;
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(upload.array());

app.get('/', (req, res) => {
    res.send('Node express blog');
})
const chechAuth = require('./src/Middlewares/Auth');
app.use(chechAuth);
require('./src/routes')(app);



/*app.post('/example',function (req,res){
  // return res.send(req.body);
    let rows=req.body.data;
    let output=[];
    for(let i=0; i<rows.length; i++){
        if(output[rows[i].id]==undefined || output[rows[i].id]==''){
            if(rows[i].id!=undefined && rows[i].type!=undefined){
                console.log('fill '+i);
                output[rows[i].id]={
                    'id':rows[i].id,
                    'type':[rows[i].type]
                };
            }
        }
        else{
            output[rows[i].id].type.push(rows[i].type);
        }
    }
    return res.send(output);
});*/


app.listen(port, () => console.log('Listening to port ' + port + ' ....'));


