
var vt100     = require('../lib/visualizer/vt100'),
    should    = require('should');


describe('VT100 Terminal', function () {

    var terminal = new vt100.Terminal();

    it('should write a line', function (done) {
        terminal.write('Herro', 0, 0);
        done();
    });

    it('should clear the line', function (done) {
        setTimeout(function () {
            terminal.clearLastLine();
            done();
        }, 1000);
    });

    it('should clear the whole screen', function (done){
            terminal.write('Another line', 1, 1);
            terminal.write('Can you handle it?', 2, 1);
            terminal.write('Woo...', 3, 4);
            setTimeout(function () {
                terminal.clearScreen();
                done();
        }, 1500);
    });

});