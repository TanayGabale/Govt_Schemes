const Policy = require('../models/policyModel');

// Fetch all policies
exports.getAllPolicies = async (req, res) => {
    try {
        const policies = await Policy.find();
        res.status(200).json(policies);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching policies', error });
    }
};

// Create a new policy
exports.createPolicy = async (req, res) => {
    const newPolicy = new Policy(req.body);
    try {
        const savedPolicy = await newPolicy.save();
        res.status(201).json(savedPolicy);
    } catch (error) {
        res.status(400).json({ message: 'Error creating policy', error });
    }
};

// Update an existing policy
exports.updatePolicy = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedPolicy = await Policy.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedPolicy);
    } catch (error) {
        res.status(400).json({ message: 'Error updating policy', error });
    }
};

// Fetch a single policy by ID
exports.getPolicyById = async (req, res) => {
    const { id } = req.params;
    try {
        const policy = await Policy.findById(id);
        if (!policy) {
            return res.status(404).json({ message: 'Policy not found' });
        }
        res.status(200).json(policy);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching policy', error });
    }
};