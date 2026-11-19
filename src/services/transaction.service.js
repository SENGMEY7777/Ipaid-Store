const crypto = require('crypto');
const transaction.Model = require('../models/transaction.Model');

const findAll = async (filters) => {
    return transaction.Model.findAll(filters);
};

const findById = async (id) => {
    return transaction.Model.findById(id);
};

const create = async (payload) => {
    const id = 'tra_' + crypto.randomUUID().slice(0, 8);
    return transaction.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await transaction.Model.findById(id);
    if (!existing) {
        const error = new Error('Transaction. not found');
        error.status = 404;
        throw error;
    }
    return transaction.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return transaction.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
