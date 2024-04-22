// formatTransaction.js

function formatTransaction(tx) {
    return {
        hash: tx.hash,
        from: tx.from,
        to: tx.to,
        value: tx.value.toString(),
        nonce: tx.nonce,
        gasLimit: tx.gasLimit.toString(),
        gasPrice: tx.gasPrice.toString(),
        data: tx.data
    };
}

module.exports = formatTransaction;
