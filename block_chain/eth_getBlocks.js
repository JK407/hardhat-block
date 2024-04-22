const ethProvider = require('./eth_provider');
const formatBlockData = require('./eth_formatBlock');

// 获取全部区块信息
async function fetchBlocks() {
    try {
        const latestBlockNumber = await ethProvider.getBlockNumber();
        const blocksData = [];

        for (let number = 0; number <= latestBlockNumber; number++) {
            const block = await ethProvider.getBlock(number);
            blocksData.push(formatBlockData(block));
        }
        console.log(blocksData);  // 在实际应用中，这里可以是更新 DOM 的代码
    } catch (error) {
        console.error("Error fetching blocks:", error);
    }
}

module.exports = fetchBlocks;
// fetchBlocks()
//     .then(() => {
//         console.log('Finished fetching blocks.');
//     })
//     .catch(error => {
//         console.error('Error fetching blocks:', error);
//     });
