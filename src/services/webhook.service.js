const crypto = require('crypto');
const webhook.Model = require('../models/webhook.Model');

const findAll = async (filters) => {
    return webhook.Model.findAll(filters);
};

const findById = async (id) => {
    return webhook.Model.findById(id);
};

const create = async (payload) => {
    const id = 'web_' + crypto.randomUUID().slice(0, 8);
    return webhook.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await webhook.Model.findById(id);
    if (!existing) {
        const error = new Error('Webhook. not found');
        error.status = 404;
        throw error;
    }
    return webhook.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return webhook.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
