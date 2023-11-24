const filterClicks = require('./index.js'); 

describe('processClicks', () => {
  it('should return the correct subset of clicks', () => {
    const clicks = [
      { "ip": "22.22.22.22", "timestamp": "3/11/2020 02:02:58", "amount": 7.0 },
      { "ip": "11.11.11.11", "timestamp": "3/11/2020 02:12:32", "amount": 6.5 },
    ];

    const resultSet = filterClicks(clicks);

    expect(resultSet).toEqual([
      { "ip": "22.22.22.22", "timestamp": "3/11/2020 02:02:58", "amount": 7.0 },
      { "ip": "11.11.11.11", "timestamp": "3/11/2020 02:12:32", "amount": 6.5 },
    ]);
  });

});
