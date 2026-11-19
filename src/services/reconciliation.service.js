const crypto = require('crypto');
const reconciliation.Model = require('../models/reconciliation.Model');

const findAll = async (filters) => {
    return reconciliation.Model.findAll(filters);
};

const findById = async (id) => {
    return reconciliation.Model.findById(id);
};

const create = async (payload) => {
    const id = 'rec_' + crypto.randomUUID().slice(0, 8);
    return reconciliation.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await reconciliation.Model.findById(id);
    if (!existing) {
        const error = new Error('Reconciliation. not found');
        error.status = 404;
        throw error;
    }
    return reconciliation.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return reconciliation.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
