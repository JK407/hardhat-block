const ethers = require('ethers');

function accountNew() {
    const wallet = ethers.Wallet.createRandom();
    return {
        address: wallet.address,        // 钱包地址
        privateKey: wallet.privateKey,  // 私钥
        publicKey: wallet.publicKey     // 公钥（通常不直接使用，私钥更常用）
    };
}

module.exports = accountNew;





// const wallet = accountNew();
// console.log("New Wallet Created:");
// console.log("Address:", wallet.address);
// console.log("Private Key:", wallet.privateKey);
// console.log("Public Key:", wallet.publicKey);



