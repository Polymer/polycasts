var app = document.querySelector('#app');
app.data = generateContacts();

function generateContacts() {
  var data = [];
  for(var i = 0; i < 1000; i++) {
    data.push({
      name: faker.name.findName(),
      avatar: faker.internet.avatar()
    });
  }
  return data;
}
