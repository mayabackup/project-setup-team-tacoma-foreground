/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const path = require('path'); //
const chai = require('chai');
const chaiHttp = require("chai-http");
const request = require("supertest");////
const app = require('../../app.js');////
//const request = chai.request; 
const { expect } = chai;
chai.use(chaiHttp);
const host = "http://localhost:5000";


describe('GET /confirmation', function ()  {
    //this.timeout(15000);

    it('check the status of the get request', function(done) {
   
        console.log('running the test')
        request(app)
        .get('/confirmation')
        .end((err, res) => {
            //console.log(res)
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        //expect(res.body.message).to.equals("success");
        done();
        });
    });
});

/*
describe('GET /confirmation', function ()  {
    it('check the confirmation page has all user data', function(done) {
   
        console.log('running the test')
        request(app)
        .post('/').send({citizenship: "American", location: "New York", airport:"JFK"})
        .end((err, res) => {
            
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
   
        });
        request(app)
        .get('/confirmation')
        .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.have.all.keys('citizenship', 'location','airport','entered');
        done();
        });
    });
    
  });
*/