
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function(task) {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function(task) {
      this.complete = true;
    },
  }
  return task;
};

// TEST CONDITIONS

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box"); // task 1
const task2 = newTask("Do Laundry", "😨"); // task 2
const task3 = newTask(task1, task2);

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
