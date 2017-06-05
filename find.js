var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(function(user) {
    return user.admin;
});


var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(function(account) {
    return account.balance === 12;
});


function findWhere(array, criteria) {
  const key = Object.keys(criteria)[0];
  const value = criteria[key];

  return array.find(function(item) {
     return item[key] === value;
  });
}
