// Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task')

//  Load all event listeners
loadEventListeners();

function loadEventListeners(){
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear task event
  clearBtn.addEventListener('click', clearTasks);
}

// Add task
function addTask(e) {
  
  if (taskInput.value === '') {
    alert('You should add a task')
  };

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to the li
  li.appendChild(document.createTextNode(taskInput.value));
  
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon HTML
  link.innerHTML = `<i class="fa fa-remove"></i>`;
  // Append the link to the li
  li.appendChild(link);

  // Append the li to the ul
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';


  e.preventDefault();
};

// Remove task 
function removeTask(e){

  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure to delete item?')) {
      e.target.parentElement.parentElement.remove();
    }
  }

};

// Clear tasks
function clearTasks(e) {
  // One way 
  //taskList.innerHTML = '';

  //this way is faster
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  
}