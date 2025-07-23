function TodoItem() {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center space-y-4 md:flex-row md:space-y-0 md:justify-between py-1 md:px-8">
      <h2 className="text-base pl-1 w-3/4 md:w-100">Buy Coffee</h2>
      <h2 className="text-base pl-1 w-3/4 md:w-100">4/10/2025</h2>
      <button className="bg-emerald-700 text-emerald-100 px-4 py-2 rounded w-3/4 md:w-30 cursor-pointer">
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
