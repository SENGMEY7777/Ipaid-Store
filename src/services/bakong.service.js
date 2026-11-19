const crypto = require('crypto');
const bakong.Model = require('../models/bakong.Model');

const findAll = async (filters) => {
    return bakong.Model.findAll(filters);
};

const findById = async (id) => {
    return bakong.Model.findById(id);
};

const create = async (payload) => {
    const id = 'bak_' + crypto.randomUUID().slice(0, 8);
    return bakong.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await bakong.Model.findById(id);
    if (!existing) {
        const error = new Error('Bakong. not found');
        error.status = 404;
        throw error;
    }
    return bakong.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return bakong.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
