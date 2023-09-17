const SelectAge = (props) => {
  const ages = [];
  for (let i = 18; i <= 40; i++) {
    ages.push(i);
  }

  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative w-40">
        <select
          id="id-01"
          name="id-01"
          onChange={props.actionProvider.handleLast}
          className="relative w-full h-10 px-4 text-sm transition-all bg-white border outline-none appearance-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white focus:border-emerald-500 focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400">
          <option value="" disabled selected>
            Select age
          </option>
          {ages.map((age) => (
            <option key={age} value={age}>
              {age}
            </option>
          ))}
        </select>

        {/* <label
        htmlFor="id-01"
        className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
        Select an option
      </label> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-labelledby="title-01 description-01"
          role="graphics-symbol">
          <title id="title-01">Arrow Icon</title>
          <desc id="description-01">Arrow icon of the select list.</desc>
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default SelectAge;
