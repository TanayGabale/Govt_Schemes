const AWS = require('aws-sdk');

// Configure AWS SDK
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

// Create an S3 instance
const s3 = new AWS.S3();

// Create a DynamoDB instance
const dynamoDB = new AWS.DynamoDB();

// Export the configured services
module.exports = {
    s3,
    dynamoDB
};