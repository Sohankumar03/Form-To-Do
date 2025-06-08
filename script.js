// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  let isValid = true;

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';

  if (name === '') {
    document.getElementById('nameError').textContent = 'Name is required.';
    isValid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === '') {
    document.getElementById('emailError').textContent = 'Email is required.';
    isValid = false;
  } else if (!email.match(emailPattern)) {
    document.getElementById('emailError').textContent = 'Enter a valid email.';
    isValid = false;
  }

  if (message === '') {
    document.getElementById('messageError').textContent = 'Message is required.';
    isValid = false;
  }

  if (isValid) {
    alert('Form submitted successfully!');
    this.reset();
  }
});

// To-Do list add and remove
document.getElementById('addButton').addEventListener('click', function() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  const taskList = document.getElementById('taskList');

  const taskItem = document.createElement('div');
  taskItem.className = 'taskItem';

  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'deleteBtn';
  deleteBtn.textContent = 'Delete';

  deleteBtn.addEventListener('click', function() {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(taskContent);
  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);

  taskInput.value = '';
});
