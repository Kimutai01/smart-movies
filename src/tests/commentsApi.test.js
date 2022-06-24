import commentCounter from '../modules/__mocks__/commentsApi';
describe('testing counter', ()=>{
      //arrage
      const data1= [
        { id: 1, comment: 'hello', username: 'john' },
        { id: 2, comment: 'hello', username: 'john' },
        { id: 3, comment: 'hello', username: 'john' },
        { id: 4, comment: 'hello', username: 'john' }
      ];
    test('test counter', async()=>{
          //act
          const result = await commentCounter(data1);
          //assert
          expect(result).toBe(4);
    })
})