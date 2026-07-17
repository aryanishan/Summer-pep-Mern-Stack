const express = require('express');

const app = express();

const students = [
  {
    id: 1, 
    name: "Aryan", 
    age: 20
  },
  {
    id: 2, 
    name: "Harsh", 
    age: 20
  },
  {
    id: 3, 
    name: "Ashish", 
    age: 21
  }
]


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/login', (req, res) => {
  res.send('Login Page');
});

app.post('/login', (req, res) =>{
  res.status(202).json({
    success: true,
    message: 'Logging in...'
  });
});

app.get('/students', (req, res) => {
  res.json(students);
});

app.get('/students/:id', (req, res) => {
  const id = Number(req.params.id);

  const student = students.find(student => student.id === id);

  if(student){
    return res.json(student);
  }

  res.status(404).json({
    success: false,
    message: 'Student not found'
  });
});

app.post('/students', (req, res) => {
  const {name, age} = req.body;

  if(!name || !age){
    return res.status(400).json({
      success: false,
      message: 'Name and age are required'
    });
  }

  const newStudent = {
    id: students.length > 0 ? students[students.length - 1].id + 1 : 1,
    name,
    age
  };

  students.push(newStudent);

  res.status(201).json({
    success: true,
    data: newStudent
  });
});

app.put('/students/:id', (req, res) => {
  const id = Number(req.params.id);

  const index = students.findIndex(student => student.id === id);

  if(index === -1){
    return res.status(404).json({
      success: false,
      message: 'Students not found'
    });
  }

  const { name, age } = req.body;

  students[index] = {
    id,
    name,
    age
  };

  res.json({
    success: true,
    data: students[index]
  });
});

app.patch('/students/:id', (req, res) => {
  const id = Number(req.params.id);

  const student = students.find(student => student.id === id);

  if(!student){
    return res.status(404).json({
      success: false,
      message: 'Student not found'
    });
  }

  if(req.body.name !== undefined){
    student.name = req.body.name;
  }

  if(req.body.age !== undefined){
    student.age = req.body.age;
  }

  res.json({
    success: true,
    data: student
  });
});

app.delete('/students/:id', (req, res) => {

  const id = Number(req.params.id);

  const index = students.findIndex(student => student.id === id);

  if(index === -1){
    return res.status(404).json({
      success: false,
      message: 'Student not found'
    });
  }

  const deletedStudent = students.splice(index, 1);

  res.json({
    success: true,
    message: 'Student deleted successfully',
    data: deletedStudent[0]
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000')
});