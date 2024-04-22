const getBlockByNum = require('./eth_getBlockByBlockNum');
const fetchBlocks = require('./eth_getBlocks');
const createWallet = require('./eth_newAccount');
const getAccountBalance = require('./eth_getAccountBalance');
const loadWalletFromPrivateKey = require('./eth_getAccountByPrvKey');
const sendEther = require("./eth_transfer");
const getTransactionDetails = require('./eth_getTransactionByhash');


require('dotenv').config();


// 获取整个链上信息
fetchBlocks().then(r => {
    console.log('Ending fetching blocks.');
}).catch(error => {
    console.log('Error fetching blocks:', error);
});


// 获取区块编号为1的区块信息
getBlockByNum(1).then(r => {
    console.log('Ending fetching block.');
}).catch(error => {
    console.log('Error fetching block:', error);
});

// 创建新账号
const newAccount = createWallet();
console.log("New Wallet Created:");
console.log("Address:", newAccount.address);
console.log("Private Key:", newAccount.privateKey);
console.log("Public Key:", newAccount.publicKey);

// 查询账户余额
getAccountBalance(newAccount.address).then(() => {
    console.log('Finished fetching balance.');
}).catch(error => {
    console.error('Error fetching balance:', error);
});

// 通过私钥获取账号信息
loadWalletFromPrivateKey(newAccount.privateKey)
    .then(walletDetails => {
        if (walletDetails) {
            console.log("Wallet Details:", walletDetails);
        } else {
            console.log("No wallet could be loaded with the provided private key.");
        }
    })
    .catch(error => {
        console.error("Error while loading wallet:", error);
    });

// 转帐
sendEther(process.env.TEST_PRIVATE_KEY, newAccount.address, process.env.TEST_SEND_ETHER_VALUE)
    .then(transactionHash => {
        console.log('Transaction sent successfully. Transaction hash:', transactionHash);

        // 根据哈希获取交易详情
        return getTransactionDetails(transactionHash);
    })
    .then(txDetails => {
        console.log("Transaction Details:", txDetails);
        // 在这里可以使用交易详情执行任何后续操作
    })
    .catch(error => {
        console.error('Error sending ether:', error);
    });
