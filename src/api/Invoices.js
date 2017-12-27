let Request = require('../Request');

module.exports = class Invoices {

    constructor(options) {
        this.name = 'invoices';
        this.baseUri = 'https://api.harvestapp.com/v2/' + this.name;
        this.options = options;
    }

    list(cb) {
        this.options.url = this.baseUri;

        new Request(this.options, cb);
    }

    retrieve(id, cb) {
        this.options.url = this.baseUri + '/' + id;

        new Request(this.options, cb);
    }

    create(params, cb){
        this.options.url = this.baseUri;
        this.options.method = 'POST';
        this.options.body = JSON.stringify(params);

        new Request(this.options, cb);
    }
}