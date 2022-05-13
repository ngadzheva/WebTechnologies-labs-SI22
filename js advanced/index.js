var a = 5;

function asdf() {
    var b = 6;
    const d = 7;

    for (var i = 0; i < b; i++) {
        let c = b + 1;
        var f = c - 3;

        console.log (a + b + c);
    }

    console.log(f);
}

const obj = {
    prop: 'prop1',
    num: 5
};

obj.num = 6;
obj.newProp = 'new prop';

const frozenObject = Object.freeze({
    prop: 'prop',
    num: 6,
    func: () => console.log('Frozen'),
    obj: { 
        prop1: 'prop1',
        prop2: 'prop2'
    },
    arr: [1, 2, 3]
});

// forzenObject.num = 7;
frozenObject.obj.prop1 = 'asdf';
frozenObject.arr[1] = 6;

const conf = {
    host: 'localhost',
    port: '3000',
    connect: () => console.log('Connected')
};

conf.host;

const lib = (function() {
    const basket = [];

    function addItem(item) {
        basket.push(item);
    }

    function removeLastItem() {
        basket.pop();
    }

    function getBasket() {
        return basket;
    }

    function getItem(item) {
        return basket.filter(function(value) {
            return value === item;
        });
    }

    return {
        add: addItem,
        get: getBasket,
        remove: removeLastItem
    };
})();

lib.add('orange');
lib.add('banana');
lib.get();

for (var i = 0; i < 5; ++i) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

for (let i = 0; i < 5; ++i) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}