const ethers = require('ethers');

async function loadWalletFromPrivateKey(privateKey) {
    try {
        const wallet = new ethers.Wallet(privateKey);
        console.log("Wallet loaded successfully.");
        return {
            address: wallet.address,       // 钱包地址
            privateKey: wallet.privateKey, // 私钥（通常应保密！）
            publicKey: wallet.publicKey    // 公钥
        };
    } catch (error) {
        console.error("Failed to load wallet:", error);
        return null;
    }
}

module.exports = loadWalletFromPrivateKey;


// loadWalletFromPrivateKey(newAccount.privateKey)
//     .then(walletDetails => {
//         if (walletDetails) {
//             console.log("Wallet Details:", walletDetails);
//         } else {
//             console.log("No wallet could be loaded with the provided private key.");
//         }
//     })
//     .catch(error => {
//         console.error("Error while loading wallet:", error);
//     });