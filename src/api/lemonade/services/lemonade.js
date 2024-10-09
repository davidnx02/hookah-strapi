'use strict';

/**
 * lemonade service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lemonade.lemonade');
