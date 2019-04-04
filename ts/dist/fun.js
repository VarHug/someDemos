// variable annotation
var sampleVariable;
// function parameter annotation
function foo(sampleParameter) { }
function padding(a, b, c, d) {
    if (b === undefined && c === undefined && d === undefined) {
        b = c = d = a;
    }
    else if (c === undefined && d === undefined) {
        c = a;
        d = b;
    }
    return {
        top: a,
        right: b,
        bottom: c,
        left: d
    };
}
var overloaded;
var simple = function (foo) { return foo.toString(); };
function logName(something) {
    console.log(something.name);
}
var ffoo = {
    bar: 123
};
function iMutateFoo(foo) {
    foo.bar = 456;
}
iMutateFoo(ffoo);
console.log(ffoo);
