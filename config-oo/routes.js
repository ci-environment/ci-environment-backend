'use strict';

class RoutesClass {
  constructor(server) {
    const express = require('express');
    const itemQuerys = require('../api/item/itemQuerys');
    // API Routes
    const router = new express.Router();
    server.use('/api', router);

    // Registering API methods in router
    const itemService = require('../api/item/itemService');
    itemService.register(router, '/item');

    // Search's routes
    router.get('/search-name/:name', itemQuerys.searchByName);
  }
}

module.exports = RoutesClass;
