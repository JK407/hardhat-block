// hardhatConnector.js
const { ethers } = require('ethers');
require('dotenv').config();

let ethProvider;

try {
    // 尝试创建 provider
    ethProvider = new ethers.providers.JsonRpcProvider(process.env.REMOTE_NODE_RPC_URL);

    // 验证连接，尝试获取区块号
    ethProvider.getBlockNumber()
        .then((blockNumber) => {
            console.log("Successfully connected to the Hardhat node at block number:", blockNumber);
        })
        .catch((error) => {
            // 如果获取区块号失败，抛出错误
            throw new Error("Connection to Hardhat node failed: " + error.message);
        });
} catch (error) {
    // 如果创建 provider 失败，记录错误并可能进一步处理
    console.error("Failed to create provider:", error);
    // 这里可以选择抛出错误，或者进行其他的错误处理
    throw error;
}

// 导出已配置的 provider
module.exports = ethProvider;
