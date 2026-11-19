const crypto = require('crypto');
const notification.Model = require('../models/notification.Model');

const findAll = async (filters) => {
    return notification.Model.findAll(filters);
};

const findById = async (id) => {
    return notification.Model.findById(id);
};

const create = async (payload) => {
    const id = 'not_' + crypto.randomUUID().slice(0, 8);
    return notification.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await notification.Model.findById(id);
    if (!existing) {
        const error = new Error('Notification. not found');
        error.status = 404;
        throw error;
    }
    return notification.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return notification.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
