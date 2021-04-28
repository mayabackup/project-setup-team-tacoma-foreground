/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const path = require('path');
const chai = require('chai');
const chaiHttp = require("chai-http");

 
const request = chai.request; 
const { expect } = chai;
chai.use(chaiHttp);
const modulePath = path.join(__dirname, '../app.js');
const host = "http://localhost:5000";

const app = require(modulePath);
console.log(modulePath);


describe('GET /covid_info', function ()  {
    this.timeout(15000);
    
    it('check the status of covid_info get request', function(done) {
   
        console.log('running the test')
      chai
        .request(host)
        .get('/covid_info')
        .end((err, res) => {
            //console.log(res)
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        //expect(res.body.message).to.equals("success");
        done();
        });
    });
    
  });

  
