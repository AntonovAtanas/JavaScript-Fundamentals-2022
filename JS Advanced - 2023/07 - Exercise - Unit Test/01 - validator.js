function validator(obj) {

    let methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']


    if (obj.hasOwnProperty('method')) {
        if (!methods.includes(obj['method'])) {
            throw new Error('Invalid request header: Invalid Method');
        }
    } else {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (obj.hasOwnProperty('uri')) {
        if (!obj['uri'].match(/^[\w.]+$/) || obj['uri'] === '' || !obj['uri'] === '*') {
            throw new Error('Invalid request header: Invalid URI');
        }
    } else {
        throw new Error('Invalid request header: Invalid URI');
    };

    if (obj.hasOwnProperty('version')) {
        if (!versions.includes(obj['version'])) {
            throw new Error('Invalid request header: Invalid Version');
        }
    } else {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (obj.hasOwnProperty('message')) {
        if (obj['message'].match(/[<>\\&'"]+/gm)) {
            throw new Error('Invalid request header: Invalid Message');
        }
    } else {
        throw new Error('Invalid request header: Invalid Message');
    };


    return obj;
}

console.log(validator({
    method: 'GET',
    uri: '"documents"',
    version: 'HTTP/1.1',
    message: ''
}
));

// console.log('-------------')

// console.log(validator({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
// }));

console.log('---------');

// console.log(validator({
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
// }
// ));

console.log('-------');

console.log(validator({
    method: 'POST',
    version: 'HTTP/2.0',
    message: 'rm -rf /*'
}))