function Input({ label, id, ...props }) {
  return (
    <p className="flex flex-wrap flex-col">
      <label className="font-bold my-1" htmlfor="{id}">
        {label}
      </label>
      <input
        className="w-full max-w-80 p-1 rounded-md focus:border-blue-500"
        id={id}
        name={id}
        required
        {...props}
      />
    </p>
  );
}
export default Input;
