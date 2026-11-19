const webhook.Service = require('../services/webhook.Service');

const getAll = async (req, res, next) => {
    try {
        const data = await webhook.Service.findAll(req.query);
        return res.status(200).json({ success: true, count: data.length, data });
    } catch (error) {
        return next(error);
    }
};

const getById = async (req, res, next) => {
    try {
        const item = await webhook.Service.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ success: false, message: 'Webhook. not found' });
        }
        return res.status(200).json({ success: true, data: item });
    } catch (error) {
        return next(error);
    }
};

const create = async (req, res, next) => {
    try {
        const created = await webhook.Service.create(req.body);
        return res.status(201).json({ success: true, message: 'Webhook. created successfully', data: created });
    } catch (error) {
        return next(error);
    }
};

const update = async (req, res, next) => {
    try {
        const updated = await webhook.Service.update(req.params.id, req.body);
        return res.status(200).json({ success: true, message: 'Webhook. updated successfully', data: updated });
    } catch (error) {
        return next(error);
    }
};

const deleteItem = async (req, res, next) => {
    try {
        await webhook.Service.delete(req.params.id);
        return res.status(200).json({ success: true, message: 'Webhook. deleted successfully' });
    } catch (error) {
        return next(error);
    }
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: deleteItem,
};
