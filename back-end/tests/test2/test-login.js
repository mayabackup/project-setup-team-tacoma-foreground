/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const path = require('path');
const chai = require('chai');
const chaiHttp = require("chai-http");

const request = require("supertest");////
const app = require('../../app.js');////
// const request = chai.request;  
const { expect } = chai;
chai.use(chaiHttp);
const modulePath = path.join(__dirname, '../app.js');
const host = "http://localhost:5000";

/*
describe('GET /login', function ()  {
    //this.timeout(15000);
    it('login: check get request', function(done) {
        console.log('testing login page')
      chai
        .request(app)
        .get('/login')
        .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        done()
        });
    });
    
});
*/
describe("POST /login", () => {
        
    it("should return status 200", done => {
        let formData = {
            username: "Test1",
            password: "Test123"
        }
        console.log('running the test')
        
        chai.request(app)
          .post('/login')
          .send({formData})
          .end((err, res) => {
            expect(res.status).to.equal(200);
            done()
          });
    
       
        });
})