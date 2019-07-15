const db = require('./dbConfig');

function getAccounts(){
    return db('accounts')
};

function getAccountsById(id) {
    return db('accounts')
            .where({id})
            .first()
};

function addAccounts(account) {
    return db('accounts')
            .returning(['id','name','budget'])
            .insert(account)
            .then(id=> getAccountsById(id[0]))
};

function updateAccount(id, account) {
    return db('accounts')
            .where({id})
            .update(account)
            .then(ids=> {
                if(ids>= 1) {
                    return getAccountsById(id)
                }
            })
}

function deleteAccount(id) {
    return db('accounts')
            .where({id})
};


module.exports = {
    getAccounts, 
    addAccounts, 
    getAccountsById,
    updateAccount,
    deleteAccount
};