let tasks = [

  {
    id: '1',
    title: 'Task 1',
    description: 'Description 1',
    completed: false,
    duration: 5,
  },

  {
    id: '2',
    title: 'Task 2',
    description: 'Description 2',
    completed: false,
    duration: 3,
  },

];

const taskResolver = {

  Query: {

    task: (_, { id }) =>
      tasks.find(task => task.id === id),

    tasks: () => tasks,
  },

  Mutation: {

    // Ajouter une tâche
    addTask: (_, { title, description, completed, duration }) => {

      const task = {
        id: String(tasks.length + 1),
        title,
        description,
        completed,
        duration,
      };

      tasks.push(task);

      return task;
    },

    // Terminer une tâche
    completeTask: (_, { id }) => {

      const task = tasks.find(task => task.id === id);

      if (task) {
        task.completed = true;
      }

      return task;
    },

    // Modifier description
    changeDescription: (_, { id, description }) => {

      const task = tasks.find(task => task.id === id);

      if (task) {
        task.description = description;
      }

      return task;
    },

    // Supprimer tâche
    deleteTask: (_, { id }) => {

      const index =
        tasks.findIndex(task => task.id === id);

      if (index !== -1) {

        const deletedTask =
          tasks.splice(index, 1);

        return deletedTask[0];
      }

      return null;
    },

  },

};

module.exports = taskResolver;