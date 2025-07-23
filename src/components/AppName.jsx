function AppName() {
  let appName = "React-tailwind Todo App";
  return (
    <header className="w-full h-30 bg-emerald-300 flex flex-col justify-center items-center">
      <h1 className="text-5xl text-emerald-700 uppercase text-shadow-emerald-950 text-shadow-lg font-semibold text-center">
        {appName}
      </h1>
    </header>
  );
}

export default AppName;
