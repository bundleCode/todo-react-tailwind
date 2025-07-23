function AddTodo() {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center space-y-4 md:flex-row md:space-y-0 md:space-x-5 py-5">
      <input
        type="text"
        className="border-gray-400 border-1 p-2 rounded w-3/4 md:w-100"
        placeholder="Enter todo here"
      />
      <input
        type="date"
        className="border-gray-400 border-1 p-2 rounded w-3/4 md:w-100"
        placeholder="Enter todo here"
      />
      <button className="bg-emerald-700 text-emerald-200 px-4 py-2 rounded w-3/4 md:w-30 cursor-pointer">
        Add
      </button>
    </div>
  );
}

export default AddTodo;
