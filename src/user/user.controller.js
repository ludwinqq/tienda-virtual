'use strict';

const userModel = require('./user.model');

async function save(req, res) {
    const newUser = req.body;
    req.body.photo = await `photos/${req.file.filename}`;
    const userSaved = await userModel.save(newUser);
    return res.status(200).json(userSaved);
}

async function get(req, res) {
    const user = await userModel.getAll();
    return res.status(200).json(user);
}

async function getById (req, res) {
    const userFound = await userModel.getById(req.params.id);
    return res.status(200).json(userFound);
}

async function update(req, res) {
    const user = await userModel.put(req.params.id, req.body);
    return res.status(200).json(user);
}

async function remove(req, res) {
    const user = await userModel.remove(req.params.id);
    return res.status(200).json(user);
}

const user = {
    name: 'juan',
    lastname: 'perez',
    sex: 'm'
};

module.exports = {
    save,
    get,
    getById,
    update,
    remove
}