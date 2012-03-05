

var Terminal = exports.Terminal = function () {
    this.name = 'VT100 Terminal';
};

//
// Cursor
//

Terminal.prototype.moveCursor = function (line, column) {
    process.stdout.write("\033[A\033[" + line + ";" + column + "H");
};

Terminal.prototype.moveCursorUp = function (lines) {
    process.stdout.write("\033[A\033[" + lines + "A");
};

Terminal.prototype.moveCursorDown = function (lines) {
    process.stdout.write("\033[A\033[" + lines + "B");
};

Terminal.prototype.restoreCursor = function () {
    process.stdout.write("\033[A\0338");
};

//
// Clearing Screen Functions
//
Terminal.prototype.clearScreen = function () {
    process.stdout.write("\033[A\033[2J");
};

Terminal.prototype.clearLastLine = function () {
    process.stdout.write("\033[A\033[2K");
};

//
// Writing functions
//

Terminal.prototype.write = function (str, line, column) {
    this.moveCursor(line, column);
    process.stdout.write(str);
};

//
// Window Getters Options
//

Terminal.prototype.getWindowColumns = function () {
    return process.stdout.getWindowSize()[0];
};

Terminal.prototype.getWindowLines = function () {
    return process.stdout.getWindowSize()[1];
};
