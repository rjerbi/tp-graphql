const fs = require('fs');
const path = require('path');
const { buildSchema } = require('graphql');

const schemaPath = path.join(__dirname, 'taskSchema.gql');

const schemaString = fs.readFileSync(schemaPath, 'utf8');

const schema = buildSchema(schemaString);

module.exports = schema;