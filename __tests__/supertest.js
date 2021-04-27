const request = require('supertest');
const fs = require('fs');
const path = require('path');
const express = require('express');
const apiRouter = require('../server/routes/api.js');
const sampleController = require('../server/sampleController.js');
const passport = require('passport');
const cookieSession = require('cookie-session');
require('../passport');
const cookieParser = require('cookie-parser');

const server = 'http://localhost:3000';

describe('Route integration', () => {
  describe('Server Requests', () => {
    describe('/ to home page', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  });
  describe('/logout', () => {
    it('responds with 302 "Found"', () => {
      return request(server).get('/logout').expect(302);
    });
  });
  describe('/profile', () => {
    it('responds with status 200 OK', () => {
      return request(server).get('/profile').expect(200);
    });
  });
  describe('/auth/google', () => {
    it('responds with status 302 "Found"', () => {
      return request(server).get('/auth/google').expect(302);
    });
  });
  describe('/auth/google/callback', () => {
    it('responds with status 302 "Found"', () => {
      return request(server).get('/auth/google/callback').expect(302);
    });
  });
  describe('/failed', () => {
    it('responds with status 200 OK', () => {
      return request(server).get('/failed').expect(200);
    });
  });
  describe('/flights', () => {
    it('responds with status 200 OK', () => {
      return request(server).get('/flights').expect(200);
    });
  });
  describe('wrong url given', () => {
    it('responds with status 404 Not Found', () => {
      return request(server).get('/blahblahwrongurlgiven').expect(404);
    });
  });
});
   


