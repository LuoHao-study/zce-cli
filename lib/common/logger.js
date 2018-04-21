const readline = require('readline')

const boxen = require('boxen')
const symbols = require('log-symbols')

/**
 * Log message.
 * @param {String} message message
 */
exports.log = (...args) => {
  console.log(...args)
}

/**
 * Log message with a success symbol.
 * @param {String} message message
 */
exports.success = message => {
  exports.log(symbols.success, message)
}

/**
 * Log message with a error symbol.
 * @param {String} message message
 */
exports.error = message => {
  exports.log(symbols.error, message)
}

/**
 * Log message with a warn symbol.
 * @param {String} message message
 */
exports.warn = message => {
  exports.log(symbols.warning, message)
}

/**
 * Log message with a info symbol.
 * @param {String} message message
 */
exports.info = message => {
  exports.log(symbols.info, message)
}

/**
 * Boxen log message.
 * @param {String} message message
 */
exports.boxen = message => {
  const styles = { padding: 1, margin: 1, borderColor: 'yellow', borderStyle: 'round', dimBorder: false }
  exports.log(boxen(message, styles))
}

/**
 * Clear console.
 * @param {String} title default title
 */
exports.clearConsole = title => {
  // istanbul ignore if
  if (!process.stdout.isTTY) return
  const blank = '\n'.repeat(process.stdout.rows)
  exports.log(blank)
  readline.cursorTo(process.stdout, 0, 0)
  readline.clearScreenDown(process.stdout)
  title && exports.log(title)
}
