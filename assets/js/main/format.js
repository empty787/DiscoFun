/**
 * @file format.js
 * @author ToastBox
 * @license GPL-3.0
 */

function format(command, value) {
  document.execCommand(command, false, value);
}
