const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./ticket');

const router = express.Router();

router.get('/', (req, res, next) => {
  const tickets = adminData.tickets;
  res.render('userDashboard', {
    prods: tickets,
    pageTitle: 'User Dashboard',
    path: '/',
    hasProducts: tickets.length > 0,
    activeUserDashboard: true,
    ticketCSS: true
  });
});

module.exports = router;
