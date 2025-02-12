const mongoose = require('mongoose');

const policySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    eligibility: {
        type: String,
        required: true,
    },
    benefits: {
        type: String,
        required: true,
    },
    registrationLink: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

policySchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Policy = mongoose.model('Policy', policySchema);

module.exports = Policy;