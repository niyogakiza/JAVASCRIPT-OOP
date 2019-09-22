'use strict';

class RemoteLogger {
    constructor() {}

    sendMessage(message, value) {
        console.log('\nLogging Remote Message --->>', [
            new Date().getTime(), message, value
        ]);
    }
}

const thing = new RemoteLogger();
thing.sendMessage('Anything at all', { id: 3433 });

/**
 * Mapping of colors to an array with their css and command line (bash) equivalents.
 * {
 *     colorName: [ <css-style>, <shell-style> ]
 * }
 */

const styles = {
    red: ['color: red',                         '\x1b[31m'],
    black: ['color: black',                       '\x1b[34m'],
    darkBlue: ['color: darkBlue',                 '\x1b[35m'],
    green: ['color: green',                     '\x1b[32m'],
    yellow: ['color: yellow',                   '\x1b[33m'],
    blue: ['color: blue',                       '\x1b[34m'],
    magenta: ['color: magenta',                 '\x1b[35m'],
    cyan: ['color: cyan',                       '\x1b[36m'],
    lightGray: ['color: lightGray',             '\x1b[37m'],
    darkGray: ['color: darkGray',               '\x1b[90m'],
    lightRed: ['color: lightRed',               '\x1b[91m'],
    lightGreen: ['color: lightGreen',           '\x1b[92m'],
    lightYellow: ['color: lightYellow',         '\x1b[93m'],
    lightBlue: ['color: lightBlue',             '\x1b[94m'],
    lightMagenta: ['color: lightMagenta',       '\x1b[95m'],
    lightCyan: ['color: lightCyan',             '\x1b[96m'],
    white: ['color: white',                     '\x1b[97m'],
    reset: ['color: unset',                     '\x1b[0m'],
};

function logger( styles, useCss = true) {
    let entry;

    return  function configLogger(logger, logMethod = 'log') {
        const log = logger[logMethod];
        debugger;
        return function loggerColor(color, message = '') {
            const style = styles[color];
            return function (value = null) {
                // Create entry message (true = browser / false = server)
                if (useCss)
                    entry = [`%${message}`, style[0]];
                else
                    entry = [`${style[1]} ${message} ${styles['reset'][1]}`];

                //log message
                log.apply(logger,  [...entry, value]);
                return value;
            };

        };
    };

}

logger(styles, false)(console)('blue')('Try anything', {id: 322});
const baseLogger = logger(styles, false);
const consoleLog = baseLogger(console);
const remoteLog = baseLogger(new RemoteLogger(), 'sendMessage')
const infoLog = consoleLog('green', 'info')
const warningLog = consoleLog('yellow', 'warning')
const errorLog = consoleLog('red', 'error')

infoLog({ id: 223, name: 'John'})
warningLog( 'Server warning')
errorLog({ id: 223, error: 'Something went wrong'})
debugger;
