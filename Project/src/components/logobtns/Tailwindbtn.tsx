function Tailwindbtn() {
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
          className="h-30 w-30 mr-3"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg"
        />

        {/* Centered text */}
      </button>
    </div>
  );
}

export default Tailwindbtn;
