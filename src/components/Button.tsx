const Button = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <div className="w-full flex justify-center">
      <button
        className="p-2 border border-solid border-cyan-500 rounded-md text-cyan-500 font-bold"
        onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
