require.config({
  baseUrl: 'js/lib',
  paths: {
    cdn_crypto_js: 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups'
    //cdn_crypto_js: 'http://localhost/cdn/cryptojs/rollups'
  }
});

function dbg(key, str) {
  str = (key || '') + (str ? (': ' + str.toString()) : '');
  //console.log(str);
  document.write(str + '<br />');
}

require(['crypto-js'], function (CryptoJS) {
  str = 'Message';
  key = 'Secret Passphrase';

  dbg('Start Test');

  dbg();

  dbg('String', str);
  dbg('Passphrase', key);

  dbg();

  // MD5
  dbg('MD5', CryptoJS.MD5(str, key));

  // SHA-1
  dbg('SHA1', CryptoJS.SHA1(str, key));

  // SHA-2
  dbg('SHA256', CryptoJS.SHA256(str, key));
  dbg('SHA512', CryptoJS.SHA512(str, key));

  // SHA-3
  dbg('SHA3', CryptoJS.SHA3(str, key));
  dbg('SHA3 {outputLength: 512}', CryptoJS.SHA3(str, { outputLength: 512 }));
  dbg('SHA3 {outputLength: 384}', CryptoJS.SHA3(str, { outputLength: 384 }));
  dbg('SHA3 {outputLength: 256}', CryptoJS.SHA3(str, { outputLength: 256 }));
  dbg('SHA3 {outputLength: 224}', CryptoJS.SHA3(str, { outputLength: 224 }));

  // RIPEMD-160
  dbg('RIPEMD-160', CryptoJS.RIPEMD160(str, key));

  // HMAC
  dbg('HmacMD5', CryptoJS.HmacMD5(str, key));
  dbg('HmacSHA1', CryptoJS.HmacSHA1(str, key));
  dbg('HmacSHA256', CryptoJS.HmacSHA256(str, key));
  dbg('HmacSHA512', CryptoJS.HmacSHA512(str, key));

  // PBKDF2
  dbg('PBKDF2 {keySize: 128/32}', CryptoJS.PBKDF2(key, str, { keySize: 128/32 }));
  dbg('PBKDF2 {256/32}', CryptoJS.PBKDF2(key, str, { keySize: 256/32 }));
  dbg('PBKDF2 {keySize: 512/32}', CryptoJS.PBKDF2(key, str, { keySize: 512/32 }));
  //dbg('PBKDF2 {keySize: 512/32, iterations: 1000}', CryptoJS.PBKDF2(key, str, { keySize: 512/32, iterations: 1000 }));

  // Ciphers

  // AES
  dbg('AES', CryptoJS.AES.encrypt(str, key));

  // DES
  dbg('DES', CryptoJS.DES.encrypt(str, key));

  // TripleDES
  dbg('TripleDES', CryptoJS.TripleDES.encrypt(str, key));

  // Rabbit
  dbg('Rabbit', CryptoJS.Rabbit.encrypt(str, key));

  // RC4
  dbg('RC4', CryptoJS.RC4.encrypt(str, key));

  // RC4Drop
  dbg('RC4Drop', CryptoJS.RC4Drop.encrypt(str, key));
  dbg('RC4Drop { drop: 3072/4 }', CryptoJS.RC4Drop.encrypt(str, key, { drop: 3072/4 }));

  dbg();

  dbg('End Test');
});
