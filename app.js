// *** Properties ***
const sdk = require('api')('@easybroker-staging/v1.0#887olbbcuq6n');

// in a real-world app this token must be
// obtained from an environment variable
sdk.auth('l7u502p8v46ba3ppgvj5y2aad50lb9');

const properties = {

  printTitles: (limit = 50, page = 1) => {

    sdk.getProperties({page: page, limit: limit})
      .then(({data}) => {

        data.content.forEach(prop => console.log(prop.title));

        if (data.pagination.next_page != null) {
          properties.printTitles(limit, ++page);
        }

      })
      .catch(err => console.error(err));
  }
}

module.exports = properties;
