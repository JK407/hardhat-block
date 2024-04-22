const ethProvider = require('./eth_provider'); // 确保这里的路径正确
const ethers = require('ethers');

async function getAccountBalance(address) {
    try {
        const balance = await ethProvider.getBalance(address);
        // 将余额从 wei 转换为 ether，以便更容易阅读
        const balanceInEther = ethers.utils.formatEther(balance);
        console.log(`The balance of address ${address} is: ${balanceInEther} ETH`);
        return balanceInEther;
    } catch (error) {
        console.error(`Error fetching balance for address ${address}:`, error);
    }
}


module.exports = getAccountBalance;
// getAccountBalance(newAccount.address).then(() => {
//     console.log('Finished fetching balance.');
// }).catch(error => {
//     console.error('Error fetching balance:', error);
// });