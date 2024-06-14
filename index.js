const jwt = require('jsonwebtoken')

const secretKey = 'secret';

const value = {
    name: "Sahil Darandale",
    phone: "1234567890"
}

const token = jwt.sign(value, secretKey);

console.log('Generated Token:', token);

// Verify a token
try {
  const decoded = jwt.verify(token, secretKey);
  console.log('Decoded Token:', decoded);
} catch (err) {
  console.error('Token verification failed:', err);
}

console.log("Decoded Value using decode:", jwt.decode(token));