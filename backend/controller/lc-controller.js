const lc_schema = require('../model/lc-schema');
const mongoose = require('mongoose');

// GET ALL DATA
const readData = async (req, res) => {
    try {
        const data = await lc_schema.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving data', error });
    }
};

// GET DATA BY ID
const readDataById = async (req, res) => {
    const id = req.params.id;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid ID format' });
        }
        const data = await lc_schema.findById(id);
        if (!data) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving data', error });
    }
};

// POST DATA
const postData = async (req, res) => {
    const { name, link, tags, description } = req.body;
    
    try {
        const isExists = await lc_schema.findOne({ name });
        if (isExists) {
            return res.status(400).json({ message: 'Question already exists' });
        }
        const newData = new lc_schema({ name, link, tags, description });
        await newData.save();
        res.json({ message: 'Successfully posted question' });
    } catch (error) {
        res.status(500).json({ message: 'Error occurred while saving data', error });
    }
};

// UPDATE DATA BY ID
const updateById = async (req, res) => {
    const id = req.params.id;
    const updates = req.body;
    try {
        const updatedData = await lc_schema.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedData) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.json({ message: 'Data updated successfully', data: updatedData });
    } catch (error) {
        res.status(500).json({ message: 'Error updating data', error });
    }
};

// DELETE DATA
const deleteById = async (req, res) => {
    const id = req.params.id;
    
    try {
        const deletedData = await lc_schema.findByIdAndDelete(id);
        if (!deletedData) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.json({ message: 'Data deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting data', error });
    }
};

module.exports = { readData, readDataById, postData, updateById, deleteById };
