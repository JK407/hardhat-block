// 彩色打印封装
const colors = {
    reset: "\x1b[0m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m"
};

function printColor(text, color) {
    console.log(`${color}${text}${colors.reset}`);
}

module.exports = {
    printRed: (text) => printColor(text, colors.red),
    printGreen: (text) => printColor(text, colors.green),
    printYellow: (text) => printColor(text, colors.yellow),
    printBlue: (text) => printColor(text, colors.blue),
    printMagenta: (text) => printColor(text, colors.magenta),
    printCyan: (text) => printColor(text, colors.cyan),
    printWhite: (text) => printColor(text, colors.white)
};
