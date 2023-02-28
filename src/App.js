import AddTask from './components/tasks/AddTask';
import TaskList from './components/tasks/TaskList';
import EditTask from './components/tasks/EditTask';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 bg-light text-dark mt-5 p-3 shadow">
          <h1 className="text-center mb-3">TODO LIST</h1>
          <AddTask />
          <TaskList />
          <EditTask />
        </div>
      </div>
    </div>
  );
}

export default App;