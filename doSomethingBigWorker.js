var bigString = '';
function _doSomethingBig(value) {
    bigString += '' + value;
    console.log(bigString);
    console.log(value);

    if (value < 1000000) {
        _doSomethingBig(++value);
    } else {
        self.postMessage('GOT MESSAGE FROM WORKER');
    }
}

self.addEventListener('message', function(event) {
    switch (event.data.functionToRun) {
        case 'somethingBig':
            console.log('startSomethingBig');
            _doSomethingBig(event.data.startingValue);
            break;

        case '':
            break;
    }
}, false);
