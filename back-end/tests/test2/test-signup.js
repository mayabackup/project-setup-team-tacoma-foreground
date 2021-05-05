const path = require('path');
const chai = require('chai');
const chaiHttp = require("chai-http");

const request = require("supertest");////
const app = require('../../app.js');////
// const request = chai.request; 
const { expect } = chai;
chai.use(chaiHttp);
const host = "http://localhost:5000";


describe('GET /signup', function ()  {
    //this.timeout(15000);
    it('signup: check get request', function(done) {
        console.log('testing signup page')
      chai
        .request(app)
        .get('/signup')
        .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        done()
        });
    });
    
  });