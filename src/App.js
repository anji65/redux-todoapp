import './App.css';
import Counter from './components/Counter';
import TodoApp from './components/TodoApp';
import UseRef from './components/UseRef';
import Users from './components/Users/Users';
import ReduxTodo from './TODO/index'

function App() {
  return (
    <div style={{marginLeft:30}}>
      {/* <Counter /> */}
      {/* <TodoApp/> */}
      <Users />
      <ReduxTodo /><br/>
      {/* <UseRef /> */}
    </div>
  );
}

export default App;
