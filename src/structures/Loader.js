'use strict';

class Loader {
  constructor(client) {
    this.client = client;
    this.required = false;
  }

  load() {
    throw new Error(`${this.constructor.name} is incorrectly completed`);
  }
}

module.exports = Loader;
