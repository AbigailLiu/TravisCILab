var request = require("request");
var helloWorld = require("../index.js")

var base_url = "http://localhost:49003/";

console.log('this is a new guy');

describe("Hello World Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns Hello World", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(body).toBe("Hello world");
        done();
      });								            });
  });								   
});
