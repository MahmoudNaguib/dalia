const Model = require('../Models/UserModel');
module.exports = async function chechAuth(req, res, next) {
    console.log('check auth');
    const nonSecurePaths = ['/api/auth/login', '/api/auth/register'];
    if (nonSecurePaths.includes(req.path)) return next();
    const tokenHeader = req.header("Authorization");
    if(tokenHeader){
        const token = tokenHeader.replace("Bearer ", "");
        let row = await Model.query().modify('active').where('token',token).first();
        if(row){
            req.user = row;
            next();
        }
    }
    //return res.status(401).send("Unauthorized");
};