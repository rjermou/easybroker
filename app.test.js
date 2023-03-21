const proxyquire = require('proxyquire');
const sinon = require('sinon');
const chai = require('chai');


describe('Properties', () => {
    describe('Print Titles', () => {
        it('The function must be called twice to print all mocked titles', async () => {

            const spy = sinon.spy(properties, 'printTitles');

            await properties.printTitles(1).then(() => {

              chai.expect(spy.callCount).to.equal(2);

              spy.restore();

            });

        });
    });
});

// *** Test helpers ***
const apiMock = (name) => sdkMock;

const sdkMock = {
    auth: (apiToken) => {},
    getProperties: ({page, limit}) => {
      return new Promise((resolve, reject) => {
        const data = fakeData;
        if (page == 2) {
            data.pagination.next_page = null;
        }
        resolve({data});
      });
    }
}

const fakeData =
  {
    "pagination": {
        "limit": 1,
        "page": 1,
        "total": 2,
        "next_page": "fakeURL"
    },
    "content": [
        {
            "title": "Title test."
        }
    ]
  };

  const properties =
    proxyquire('./app', {
        'api': apiMock
    });
