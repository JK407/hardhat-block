const formatBlockData = require('./eth_formatBlock');
const ethProvider = require('./eth_provider'); // 确保这里的路径正确

async function getBlockByNum(blockNum) {
    try {
        const block = await ethProvider.getBlock(blockNum);
        if (block) {
            return formatBlockData(block); // 返回格式化后的区块信息
        } else {
            console.log(`No block found for block number ${blockNum}`);
            return { error: "No block found", blockNum }; // 返回错误信息
        }
    } catch (error) {
        console.error(`Error fetching and formatting block #${blockNum}:`, error);
        return { error: error.message, blockNum }; // 返回错误详情
    }
}

module.exports = getBlockByNum;
// getBlockByNum(1)
//     .then(blockInfo => {
//         console.log(blockInfo); // 这里可以进一步处理或返回这个区块信息
//     })
//     .catch(error => {
//         console.error('Error in fetching block:', error);
//     });