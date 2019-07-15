const express = require('express');
const route = express.Router();
const { getAccounts,
        addAccount,
        getAccountsId,
        updateAccount,
        deleteAccount
} = require('../controller/accounts');
const {
    validateBody,
    validateId,
} = require('../middleware/accounts');


route.get('/', getAccounts);
route.post('/', validateBody, addAccount);
route.get('/:id', validateId, getAccountsId);
route.put('/:id',validateId, validateBody, updateAccount);
route.delete('/:id', validateId, deleteAccount)

module.exports = route;