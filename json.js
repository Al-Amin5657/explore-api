const user = { id: 1, name: 'Gorib Aamir', job: 'actor' };
// javascript object notation (JSON)
const stringified = JSON.stringify(user);
console.log(stringified);
console.log(user);


/* 
{ "id": 1, "name": "Gorib Aamir", "job": "actor" }
{ id: 1, name: 'Gorib Aamir', job: 'actor' }
*/

const shop = {
    owner: 'Alia',
    address: {
        street: 'kochukhet voot er goli',
        city: 'ranbir',
        country: 'bd'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);