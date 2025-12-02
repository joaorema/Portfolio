function Vitebtn() {
  return (
    <div className="flex gap-5">
      <button
        type="button"
        className="text-white bg-bg1 hover:bg-bg1/90 
        focus:ring-4 focus:outline-none focus:ring-[#0f1419]/50 
        h-20 w-40 box-border border border-transparent font-medium
        rounded-base text-sm px-4 py-2 flex items-center"
      >
        {/* Left icon */}
        <img
          className="h-10 w-10 mr-3"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
        />

        {/* Centered text */}
        <span className="flex-1 text-center text-white text-[20px] font-bold">
          Vite
        </span>
      </button>
    </div>
  );
}

export default Vitebtn;
