import crypto from 'crypto';
const secret = crypto.randomBytes(32);

const encrypt = (text) => {
  const iv = Buffer.from(crypto.randomBytes(16));
  const cipher = crypto.createCipheriv("aes-256-ctr", Buffer.from(secret), iv);

  const encryptedtext = Buffer.concat([
    cipher.update(text),
    cipher.final(),
  ]);

  return {
    iv: iv.toString("hex"),
    text: encryptedtext.toString("hex"),
  };
};

const decrypt = (encryptiontext) => {
  const decipher = crypto.createDecipheriv(
    "aes-256-ctr",
    Buffer.from(secret),
    Buffer.from(encryptiontext.iv, "hex")
  );

  const decryptedText = Buffer.concat([
    decipher.update(Buffer.from(encryptiontext.text, "hex")),
    decipher.final(),
  ]);

  return decryptedText.toString();
};

export default { encrypt, decrypt };