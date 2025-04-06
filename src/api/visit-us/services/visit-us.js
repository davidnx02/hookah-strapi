'use strict';

/**
 * visit-us service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::visit-us.visit-us');
