const crypto = require('crypto');
const store.Model = require('../models/store.Model');

const findAll = async (filters) => {
    return store.Model.findAll(filters);
};

const findById = async (id) => {
    return store.Model.findById(id);
};

const create = async (payload) => {
    const id = 'sto_' + crypto.randomUUID().slice(0, 8);
    return store.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await store.Model.findById(id);
    if (!existing) {
        const error = new Error('Store. not found');
        error.status = 404;
        throw error;
    }
    return store.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return store.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
