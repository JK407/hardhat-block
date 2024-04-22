
function formatBlockData(block) {
    return {
        hash: block.hash,
        parentHash: block.parentHash,
        number: block.number,
        timestamp: new Date(block.timestamp * 1000).toLocaleString(),
        nonce: block.nonce,
        difficulty: block.difficulty.toString(),
        gasLimit: block.gasLimit.toString(),
        gasUsed: block.gasUsed.toString(),
        miner: block.miner,
        extraData: block.extraData,
        transactionsCount: block.transactions.length,
        baseFeePerGas: block.baseFeePerGas ? block.baseFeePerGas.toString() : 'N/A',
        transactions: block.transactions
    };
}

module.exports = formatBlockData;
