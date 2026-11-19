const crypto = require('crypto');
const khqr.Model = require('../models/khqr.Model');

const findAll = async (filters) => {
    return khqr.Model.findAll(filters);
};

const findById = async (id) => {
    return khqr.Model.findById(id);
};

const create = async (payload) => {
    const id = 'khq_' + crypto.randomUUID().slice(0, 8);
    return khqr.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await khqr.Model.findById(id);
    if (!existing) {
        const error = new Error('Khqr. not found');
        error.status = 404;
        throw error;
    }
    return khqr.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return khqr.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
