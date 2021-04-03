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


describe('GET /', function ()  {
    this.timeout(15000);
    it('check the status of the get request', function(done) {
        this.timeout(15000);
        setTimeout(done, 15000);
        console.log('running the test')
      chai
        .request(host)
        .get('/')
        .end((err, res) => {
            //console.log(res)
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        //expect(res.body.message).to.equals("success");
        done();
        });
    });

    it('check the keys of the airports api', function(done) {
        this.timeout(15000);
    setTimeout(done, 15000);
        console.log('running the test')
        chai
          .request(host)
          .get('/')
          .end((err, res) => {
        //get the keys of the within each dic key of airports
        const keysAirports=[];

        for (let x in res.body.message){
            keysAirports.push(Object.keys(res.body.message[x]))
            
        }
        console.log(Object.keys(res.body.message).length)
        //console.log(keysAirports)
        for (let x=0;x<=keysAirports.length-1;x++){
            expect(keysAirports[x]).to.have.members(['icao', 'iata', 'name', 'city', 'state','country','elevation', 'lat','lon','tz']);
        }
          done();
        });
    });
    it('check the length of the api to make sure it make ALL airports', function(done ) {
        this.timeout(15000);
    setTimeout(done, 15000);
        console.log('running the test')
      chai
        .request(host)
        .get('/')
        .end((err, res) => {
            //console.log(res)
            expect(Object.keys(res.body.message)).to.have.lengthOf(28868);
        //expect(res.body.message).to.equals("success");
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