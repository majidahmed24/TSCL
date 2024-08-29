const {Translate} = require('@google-cloud/translate').v2;
require('dotenv').config();

// Your credentials
const CREDENTIALS = require('./tscl-434007-c013da92977a.json');

// Configuration for the client
const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id
});

const detectLanguage = async (text) => {

    try {
        let response = await translate.detect(text);
        return response[0].language;
    } catch (error) {
        console.log(`Error at detectLanguage --> ${error}`);
        return 0;
    }
}

// detectLanguage('Oggi è lunedì')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

const translateText = async (text, targetLanguage) => {

    try {
        let [response] = await translate.translate(text, targetLanguage);
        return response;
    } catch (error) {
        console.log(`Error at translateText --> ${error}`);
        return 0;
    }
};

 translateText('we are going out', 'ta')
    .then((res) => {
         console.log(res);
     })
     .catch((err) => {
         console.log(err);
     });


//CREDENTIALS={"type": "service_account", "project_id": "tscl-434007", "private_key_id": "c013da92977afb12abb8ac4921bd2d20d31ceac8", "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCaiC+KUqdD73a+\nsTLq9c7/Jrtf2+BI0BYgmlO8zVOFvTveHisp7q9Q2O7VDkxrKlTiF9HxE4oMOQKK\noW5+8eDrrREOOQ7u3G2TdN/7vLq508q98aXsocJrg0tcgwWuTz1LF/5XL6w7sNTW\nVCP6XmXfsbCfrDn0EC0+M8H2mUtk6OiMLkgM15k3Y4mFE3C/MIG9b4XZtnb+Rwk3\nXsOWRoO6dbHGOSs+ESHcbgWn9hvYqmRae6Ccyc+5LoaeA1yRbRW9091iBy1qyFsZ\n28YWgQpsrXnNOP3Q7oFgJ+bhh1ZPXX63b5YxPZ30MiK4Y6UEH1evWpaFXQyZ5eln\nWCWLT+A3AgMBAAECggEAD1q/HTI3lCdROAMOXqHxoTudfERc2uSbgOjPWjVX+l7C\nT0CAechRcNSP7T6K9vj7+dfJEKL9jAJcJMnZMKbi+jfg4nYRQZ2dtlGeHHrKXkLT\njx+uz2jb6GfheeiQ4hrV1HDRYPiygd8rqWeEiFDkiXSz6oxSg9Qu/VJnkD5MwKgW\nJ/CWZ8G+8yYcX3KST7/rR/NawJp68pZ4V5tWSPJv3ZGNqvC473tKBtDvBVMTdxNh\n3DCdBHM/YRDUdEJFpJbsI1RyIH2XPVatfhME5zc6Y0l13ILPx3uPtqvWnHnnSP5x\niu4nSWHpace+ipBQxsSStJwuOHUMehoYStZOi5JWmQKBgQDWzA3xPmXA1Gj1IT++\nljHLMfrJBlgVI5oj9xzcCJtkKehF29jcF6nUWWHplr3whdKTAEdHIt+/4r0d6B0A\nH8NJHyvYvjxBvaRstz8d5Nq5OjYm91VTVW01mtcKEXT5w/v/GyMVHqlRf/fSG0UI\nIzPbMp0ehgkge7jL0o7KpzBUyQKBgQC4LLgS6ZCUduHHYG21LLN0HgyM0B9tTFUm\ny8JgkvDW2TFpxfGifgD6JqgaiXll2SR0XG7q9U0NYaK/AXhkrdDz497FEQqmr0lC\nTwOQ+8QXvZMhuLZVSTrdkTD3899KRkQd+ZnD9KyGBTpPDinPaYg1cqyEtANaU3mw\nPBDy36IM/wKBgBlXcb2okvCxHsDs70xZA/7pIqFc8j9sN99OZEVBbrPejdzQF0HA\nOPUopnicpEQgRbu6KK6n2qYU5iMFI4bEOJID73Re3VUUPrXk2Ll6KqP3zjPCsnpm\ndcABSKWTca2WBcEPPpBbUbaf1mkfdoGDRbbyvb7AKYt/jUneyaH3H6ihAoGBAK5K\ng5hCOHSHXHsVojzGJL1Kgo3vlw4UIrEoOrax2AE6YSy8CkPAAqS4WHVki+H6cCk+\nIClyIoz7TMx9U7XTV962UmckDXRYhXee1r0pxRTCbq6G4uYq+u4bLMA5paHghS3o\nu79ZmLrrz5ZozOBf+mq6LtEWmeWtAYfqEBAH2o95AoGBALh0Qx8BS0IIubIfo3O7\n51IRbzh6b+q4k/SHzfVZoAArRX/Mu5RzjjuGDCP4vXNR8OrZej32vNO3ADeQOREK\nczKqfup/WPoONa4757IGl4qWUgC0TWw6m6+eho16EEcY8Pz4Shj+5zCmJwfUo89S\nWuTMxRlYSrVS9BK42qzxCZqD\n-----END PRIVATE KEY-----\n", "client_email": "tcsl-912@tscl-434007.iam.gserviceaccount.com", "client_id": "102242045349921937467", "auth_uri": "https://accounts.google.com/o/oauth2/auth", "token_uri": "https://oauth2.googleapis.com/token", "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs", "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/tcsl-912%40tscl-434007.iam.gserviceaccount.com", "universe_domain": "googleapis.com"}
