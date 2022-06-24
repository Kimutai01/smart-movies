import homeCounter from '../modules/__mocks__/homeCounter.js';

describe('testing count', () => {
  const data = [
    {
      id: 1,
      name: 'Arrow',
    },
    {
      id: 2,
      name: 'Tinder',
    },
    {
      id: 3,
      name: 'girls',
    },
    {
      id: 4,
      name: 'The 100',
    },
  ];
  test('Testing movie count', () => {
    const res = homeCounter(data);
    expect(res).toBe(4);
  });
});
