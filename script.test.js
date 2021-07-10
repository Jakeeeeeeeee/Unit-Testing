const googleSearch = require('./script');

dbMock = [
  'dog.com',
  'cheese.com',
  'animal.com',
  'dogpicture.com'
];

describe('googleSearch', () => {
  it('test googleSearch', () => {
    expect(googleSearch('test', dbMock)).toEqual([])
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpicture.com'])
  })
  
  it('work with undefined and null input', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  })
  
  it('does not return more than 3 mathes', () => {
    expect(googleSearch('c', dbMock).length).toEqual(3);
  })
})