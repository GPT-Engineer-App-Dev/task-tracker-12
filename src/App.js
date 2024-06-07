import React, { useState } from 'react';
import { ChakraProvider, Box, Heading, VStack, Input, Button, List, ListItem, Checkbox } from '@chakra-ui/react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <ChakraProvider>
      <Box p={4}>
        <Heading mb={4}>Todo App</Heading>
        <VStack spacing={4}>
          <Input 
            placeholder="Enter a new task" 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} 
          />
          <Button onClick={addTask}>Add Task</Button>
          <List spacing={3} width="100%">
            {tasks.map((task, index) => (
              <ListItem key={index} display="flex" alignItems="center">
                <Checkbox 
                  isChecked={task.completed} 
                  onChange={() => toggleTaskCompletion(index)}
                >
                  {task.text}
                </Checkbox>
              </ListItem>
            ))}
          </List>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;