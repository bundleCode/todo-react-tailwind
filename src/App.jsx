import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
function App() {
  return (
    <>
      <AppName />
      <section class="w-full md:w-5xl h-auto d-flex flex-col justify-center md:mx-auto">
        <AddTodo />
        <TodoItem />
      </section>
    </>
  );
}

export default App;
