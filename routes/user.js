const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./ticket');

const router = express.Router();

router.get('/', (req, res, next) => {
  const tickets = adminData.tickets;
  res.render('login', {
    prods: tickets,
    pageTitle: 'User Login',
    path: '/',
    // hasProducts: tickets.length > 0,
    // activeUserDashboard: true,
    // ticketCSS: true
  });
});

// router.get('/user/login', (req, res, next) => {
//   const tickets = adminData.tickets;
//   res.render('login', {
//     prods: tickets,
//     pageTitle: 'User Login',
//     path: '/user/login',
//     hasProducts: tickets.length > 0,
//     activeLogin: true,
//     loginCSS: true
//   });
// });

router.get('/signup', (req, res, next) => {
  const tickets = adminData.tickets;
  res.render('signup', {
    prods: tickets,
    pageTitle: 'Sign Up',
    path: '/signup',
    hasProducts: tickets.length > 0,
    activeSignup: true,
    loginCSS: true
  });
});

module.exports = router;
