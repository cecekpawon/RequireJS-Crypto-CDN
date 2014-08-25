;(function (root, factory, undef) {
	if (typeof define === "function" && define.amd) {
		define(['cdn_crypto_js/aes', 'cdn_crypto_js/hmac-md5', 'cdn_crypto_js/hmac-ripemd160', 'cdn_crypto_js/hmac-sha1', 'cdn_crypto_js/hmac-sha224', 'cdn_crypto_js/hmac-sha256', 'cdn_crypto_js/hmac-sha3', 'cdn_crypto_js/hmac-sha384', 'cdn_crypto_js/hmac-sha512', 'cdn_crypto_js/md5', 'cdn_crypto_js/pbkdf2', 'cdn_crypto_js/rabbit', 'cdn_crypto_js/rabbit-legacy', 'cdn_crypto_js/rc4', 'cdn_crypto_js/ripemd160', 'cdn_crypto_js/sha1', 'cdn_crypto_js/sha224', 'cdn_crypto_js/sha256', 'cdn_crypto_js/sha3', 'cdn_crypto_js/sha384', 'cdn_crypto_js/sha512', 'cdn_crypto_js/tripledes'], factory);
	}
}(this, function (CryptoJS) {
	return this.CryptoJS;
}));