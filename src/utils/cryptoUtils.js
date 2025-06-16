import CryptoJS from 'crypto-js';

let secretKey = '';

export function setSecretKey(key) {
  secretKey = key;
}

export function encryptNote(text) {
  return CryptoJS.AES.encrypt(text, secretKey).toString();
}

export function decryptNote(cipherText) {
  try {
    const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (err) {
    return '[Decryption Failed]';
  }
}