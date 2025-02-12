const express = require('express');
const router = express.Router();
const policyController = require('../controllers/policyController');

// Route to fetch all policies
router.get('/policies', policyController.getAllPolicies);

// Route to fetch a specific policy by ID
router.get('/policies/:id', policyController.getPolicyById);

// Route to create a new policy
router.post('/policies', policyController.createPolicy);

// Route to update an existing policy by ID
router.put('/policies/:id', policyController.updatePolicy);

// Route to delete a policy by ID
router.delete('/policies/:id', policyController.deletePolicy);

module.exports = router;