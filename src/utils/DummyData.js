let id = 1;
function getId() {
  return id++;
}

const result = function(amount) {
  let result = [];
  for (let i = 0; i < amount; i++) {
    const obj = {
      _id: getId(),
      title: 'Fix the computers on the first floor',
      assignedUser: 'Bert',
      date: new Date(),
      label: ['priority 1'],
    };

    result.push(obj);
  }

  return result;
};

export default [...result(50)];
