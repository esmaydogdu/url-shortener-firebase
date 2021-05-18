const { serviceAccount } = require("./config");
const admin = require("firebase-admin");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount()),
  });
}

export const db = admin.firestore();
