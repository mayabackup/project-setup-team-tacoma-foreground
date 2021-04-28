/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
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


describe('GET /top_locations', function ()  {
    this.timeout(15000);
    
    it('check the status of top_locations get request', function(done) {
   
        console.log('running the test')
      chai
        .request(host)
        .get('/top_locations')
        .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        done();
        });
    });

    it('check the keys of the airports api', function(done) {
 
        console.log('running the test')
        chai
          .request(host)
          .get('/top_locations')
          .end((err, res) => {
        //get the keys of the within each dic key of airports
        const locations=[];

        for (let x in res.body.message){
            locations.push(Object.keys(res.body.message[x]))
            
        }
        
        for (let x=0;x<=locations.length-1;x++){
            if(x===0){
              expect(locations[x]).to.have.members(['user_location']);
            }else{
              expect(locations[x]).to.have.any.keys([ 
                '0',  '1',  '2',  '3',
                '4',  '5',  '6',  '7',
                '8',  '9',  '10', '11',
                '12', '13',
              'data',
              'continent',
              'location',
              'Workplace',
              'Internal',
              'International',
              'ranking']);
            }
             
        }
          done();
        });
    });
   
    
  });

  describe("POST /", () => {
    selectedOption={
        selectedOption:{
            value:"JFK"
        }
        
      };
    it("should return status 200", done => {
        console.log('running the test')
        
        chai
          .request(host)
          .post('/')
            .send({citizenship: "American", location: "New York", airport:selectedOption
          
           })
          .end((err, res) => {
              
            expect(res.status).to.equal(200)
            done()
          });
    
       
        });
})