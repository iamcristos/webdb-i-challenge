const db = require('../data/db');
const response = require('../helper/response');

function validateBody(req,res,next) {
    const {body} = req
    if(!Object.keys(body).length) {
        return response.errorHelper(res, 400, 'Empty Body Field');
    } if(!body.name || !body.budget) {
        return response.errorHelper(res, 400, "name and budget are required")
    } if(typeof(body.name) !== 'string' || !Number(body.budget)) {
        return response.errorHelper(res,400, 'Invalid name or budget type')
    }

    next()
};

async function validateId(req,res,next) {
    const {id} = req.params;
    if(!Number(id)) {
        return response.errorHelper(res,400, "Invalid Id type")
    } 
    try {
        const account = await db.getAccountsById(id)
        console.log(account)
        if(!Object.keys(account).length) {
            return response.errorHelper(res, 404, "Account don't exist")
        }
        req.account = account
    } catch (error) {
        return response.errorHelper(res, 500, "Error cannot get Account")
    }

    next();
};

module.exports = {validateBody, validateId}