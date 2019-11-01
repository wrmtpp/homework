const homework = require('./homework.js')

test('input is 0', () => {
    expect(homework(0)).toEqual('$0');
});
test('input is 1', () => {
    expect(homework(1)).toEqual('$0.033');
});
test('input is 10', () => {
    expect(homework(10)).toEqual('$0.33');
});
test('input is 100', () => {
    expect(homework(100)).toEqual('$3.31');
});
test('input is 1000', () => {
    expect(homework(1000)).toEqual('$33.13');
});
test('Thai baht to US dollar', () => {
    expect(homework('Thai baht to US dollar')).toEqual('error');
});