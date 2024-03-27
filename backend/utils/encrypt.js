const crypto = require('crypto');
const config = require('dotenv').config().parsed;
const SALT = config.ENCRYPT_SALT;



const encrypt = (text) => {
    const encrypted = crypto.pbkdf2Sync(text, SALT, 1000, 32, `sha512`).toString(`hex`);
    return encrypted;
}

const decrypt = (encryptedText) => {
    try {
        const hash = crypto.pbkdf2Sync(encryptedText,
            SALT, 1000, 32, `sha512`).toString(`hex`)
        return hash;
    } catch (error) {
        console.error("Decryption error:", error.message);
        throw error;
    }
}


module.exports = { encrypt, decrypt };