'use strict';

const services = [];
for(let i = 0; i < 15; i++) {
  services.push({title: `service${i}`, category: `category${i}`, id: i});
}

export default services;
