const fs = require('fs');

const files = fs.readdirSync('./src/').filter((file) => file.includes('.ts'));
const stringFiles = files.map((file) => `"src/${file}"`);
const filesString = `
export default [${stringFiles.join(', ')}]
`;

fs.writeFileSync('./gen/files.js', filesString);
