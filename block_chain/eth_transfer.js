const ethers = require('ethers');
const ethProvider = require('./eth_provider');

async function sendEther(privateKey, toAddress, amountEther) {
    try {
        // 从私钥创建一个钱包对象，同时链接到提供者
        const wallet = new ethers.Wallet(privateKey, ethProvider);

        // 创建交易对象
        const tx = {
            to: toAddress,
            value: ethers.utils.parseEther(amountEther),  // 将 Ether 转换为 Wei
            gasLimit: ethers.utils.hexlify(21000),  // GAS 限制 - 标准的 ETH 转账
            gasPrice: await wallet.getGasPrice()   // 获取当前的 gas 价格
        };

        console.log(`Attempting to send ${amountEther} ETH from ${wallet.address} to ${toAddress}`);

        // 使用钱包发送交易
        const transaction = await wallet.sendTransaction(tx);
        console.log("Transaction hash:", transaction.hash);
        console.log("Transaction was sent! Waiting for it to be mined...");

        // 等待交易被挖掘
        await ethProvider.waitForTransaction(transaction.hash);
        console.log("Transaction confirmed!");

        // 返回交易哈希
        return transaction.hash;
    } catch (error) {
        console.error("Failed to send transaction:", error);
        throw error; // 抛出异常
    }
}

module.exports = sendEther;
