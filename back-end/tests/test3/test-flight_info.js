/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const path = require('path');
const chai = require('chai');
const chaiHttp = require("chai-http");

const request = require("supertest");////
const app = require('../../app.js');////
// const request = chai.request; 
const { expect } = chai;
chai.use(chaiHttp);
const host = "http://localhost:5000";
const modulePath = path.join(__dirname, '../app.js');

describe('GET request for /flight_info', function ()  {
    //this.timeout(15000);
    
    it('should check whether the get request works', function(done) {
   
        console.log('running test for flight_info')
        request(app)
        .get('/flight_info')
        .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        done();
        
    });
});
});