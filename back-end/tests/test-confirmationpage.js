const path = require('path');
const chai = require('chai');
const chaiHttp = require("chai-http");

 
const request = chai.request; 
const { expect } = chai;
chai.use(chaiHttp);
const host = "http://localhost:5000";


describe('GET /confirmation', function ()  {
    this.timeout(15000);
     selectedOption={
        selectedOption:{
            value:"JFK"
        }
    }
    it('check the status of the get request', function(done) {
   
        console.log('running the test')
      chai
        .request(host)
        .get('/confirmation')
        .end((err, res) => {
            //console.log(res)
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        //expect(res.body.message).to.equals("success");
        done();
        });
    });

    it('check tif confirmation page has all user data', function(done) {
   
        console.log('running the test')
      chai
        .request(host)
        .post('/').send({citizenship: "American", location: "New York", airport:selectedOption})
        .end((err, res) => {
            
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
   
        });
        chai
        .request(host)
        .get('/confirmation')
        .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.have.all.keys('citizenship', 'location','airport');
        done();
        });
    });
    
  });