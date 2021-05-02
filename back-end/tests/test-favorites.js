const path = require('path');
const chai = require('chai');
const chaiHttp = require("chai-http");

 
const request = chai.request; 
const { expect } = chai;
chai.use(chaiHttp);
const host = "http://localhost:5000";


describe('GET /favorites', function ()  {
    this.timeout(15000);
    it('favorites: check get request', function(done) {
        console.log('testing favorites page')
      chai
        .request(host)
        .get('/favorites')
        .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        done()
        });
    });
    
  });