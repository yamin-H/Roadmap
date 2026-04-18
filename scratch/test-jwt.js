const jwt = require('jsonwebtoken');
const secret = "ymjf*($Y@E92kcdh965)ef8y98";
const token = jwt.sign({ userId: '123' }, secret);
console.log('Token:', token);
try {
    const decoded = jwt.verify(token, secret);
    console.log('Decoded:', decoded);
    process.exit(0);
} catch (e) {
    console.error('Verify failed:', e);
    process.exit(1);
}
