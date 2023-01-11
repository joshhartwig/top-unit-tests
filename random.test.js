const Random = require('./random');

describe('#capitalize', () => {
  test('first letter is capitalized', () => {
    let random = new Random();
    let name = 'bob';
    name = random.capitalize(name);
    expect(name[0]).toBe('B');
  }),
  test('ensure length is correct', () => {
    let random = new Random();
    let name = 'bob';
    name = random.capitalize(name);
    expect(name.length).toBe(3);
  })
})

describe('#reverseString', () => {
  test('ensure string is properly reverse', () => {
    let random = new Random();
    let test = 'helloworld';
    test = random.reverseString(test);
    expect(test).toBe('dlrowolleh');
  })
})

describe('#analyzeArray', () => {
  test('ensure avg is correct', () => {
    let random = new Random();
    let test = [1,22,343,55,7];
    test = random.analyzeArray(test);
    expect(test.avg).toBe(85.6);  // 1 + 22 + 343 + 55 + 7 / 5 = 85.6
  }),
  test('ensure min is correct', () => {
    let random = new Random();
    let test = [1,22,343,55,7];
    test = random.analyzeArray(test);
    expect(test.min).toBe(1);
  }),
  test('ensure max is correct', () => {
    let random = new Random();
    let test = [1,22,343,55,7];
    test = random.analyzeArray(test);
    expect(test.max).toBe(343);
  }),
  test('ensure length correct', () => {
    let random = new Random();
    let test = [1,22,343,55,7];
    test = random.analyzeArray(test);
    expect(test.length).toBe(5);
  })
})

describe('#ceaserCipher', () => {
  test('ensure correct order', () => {
    let random = new Random();
    let test = 'helloworld';
    test = random.caesarCipher(test);
    expect(test).toBe('dhelloworl');
  })
})

