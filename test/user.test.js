//During the test the env variable is set to test
//process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
//var registerModel = require('../models/registerModel');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Users', () => {
    //beforeEach((done) => { //Before each test we empty the database
      //  Book.remove({}, (err) => { 
        //   done();         
        //});     
    //});
/*
  * Test the /GET route
  */
  describe('#/GET All UserDetails', () => {
      it('it should GET all the UserDetails', (done) => {
        chai.request(server)
            .get('/user')
            .end((err, res) => {
              console.log('test case ')
                //res.should.have.status(200);
                //res.body.should.be.a('array');
                //res.body.length.should.be.eql(0);
              done();
            });
      });
  });

});
