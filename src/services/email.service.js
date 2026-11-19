const crypto = require('crypto');
const email.Model = require('../models/email.Model');

const findAll = async (filters) => {
    return email.Model.findAll(filters);
};

const findById = async (id) => {
    return email.Model.findById(id);
};

const create = async (payload) => {
    const id = 'ema_' + crypto.randomUUID().slice(0, 8);
    return email.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await email.Model.findById(id);
    if (!existing) {
        const error = new Error('Email. not found');
        error.status = 404;
        throw error;
    }
    return email.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return email.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
