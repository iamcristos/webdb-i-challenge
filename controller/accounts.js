const db = require('../data/db');
const response = require('../helper/response');

async function getAccounts(req, res) {
    try {
        const accounts = await db.getAccounts()
        if(!accounts.length) {
            return response.errorHelper(res, 200, "No Accounts")
        }
        return response.successHelper(res, 200, accounts)
    } catch (error) {
        return response.errorHelper(res, 500, "Error cannot get accounts")
    }
};

async function addAccount(req,res) {
    try {
        const {body} = req;
        const newAccount = await db.addAccounts(body)
        return response.successHelper(res, 201, newAccount);
    } catch (error) {
        return response.errorHelper(res, 500, "Error cannot add accounts");
    }
};

async function getAccountsId(req, res) {
    return response.successHelper(res, 200, req.account);
};

async function updateAccount(req, res) {
    const {body} = req;
    const {id} = req.params;
    try {
        const updateAccount = await db.updateAccount(id,body);
        return response.successHelper(res, 200, updateAccount);
    } catch (error) {
        return response.errorHelper(res, 500, "Error cannot update accounts");
    }
};

async function deleteAccount(req, res) {
    const {id} = req.params;
    try {
        const deleted = await db.deleteAccount(id)
        return response.successHelper(res, 200, "deleted account succesfully")
    } catch (error) {
        return response.errorHelper(res, 500, "Error cannot delete accounts");
    }
}

module.exports = {
    getAccounts, 
    addAccount, 
    getAccountsId, 
    updateAccount,
    deleteAccount
};