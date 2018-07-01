/**
 * Run this script to generate the `search.json` file in this directory
 * which the frontend Search Demo relies on (/__demo/search)
 */
const fs = require('fs');
const path = require('path');
const Faker = require('faker');

let data = [];

for (let i = 0; i < 500; ++i) {
  data.push({
    name: Faker.name.findName(),
    bio: Faker.hacker.phrase(),
    username: Faker.internet.userName(),
    email: Faker.internet.email(),
    password: Faker.internet.password(),
  });
}

fs.writeFileSync(
  path.join(__dirname, 'search.json'), JSON.stringify(data, null, 2)
);
