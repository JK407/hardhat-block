// 获取交易详情
const ethProvider = require('./eth_provider');
const formatTransaction = require("./eth_formatTransaction"); // 确保这里的路径正确


async function getTransactionDetails(txHash) {
    try {
        const transaction = await ethProvider.getTransaction(txHash);
        if (transaction) {
            return formatTransaction(transaction);
        } else {
            console.log(`No transaction found with hash: ${txHash}`);
            return null;
        }
    } catch (error) {
        console.error(`Error fetching transaction details for hash ${txHash}:`, error);
        return null;
    }
}

module.exports = getTransactionDetails;