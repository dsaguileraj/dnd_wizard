export const Form = ({ children, errorMessage, handleSubmit, header }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h1>{header}</h1>
      {children}
      <Button label='Submit' />
      {errorMessage && <span>{errorMessage}</span>}
    </form>
  );
};

export const Button = ({ label }) => {
  return <button type='submit'>{label}</button>;
};

// Inputs
export const InputCheck = ({ field, handleChange, label }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        type='checkbox'
        name={label}
        id={label}
        value={field}
        onChange={event => handleChange(event.target.checked)}
      />
    </div>
  );
};

export const InputText = ({ field, handleChange, label, maxLength = 50 }) => {
  return (
    <div>
      <label htmlFor={field}>{label}</label>
      <input
        type='text'
        name={field}
        id={field}
        maxLength={maxLength}
        value={field}
        onChange={event => handleChange(event.target.value)}
        required
      />
    </div>
  );
};

export const InputTextArea = ({ field, handleChange, label }) => {
  return (
    <div>
      <label htmlFor={field}>{label}</label>
      <textarea
        name={field}
        id={field}
        value={field}
        onChange={event => handleChange(event.target.value)}
      ></textarea>
    </div>
  );
};

export const InputNumber = ({ field, handleChange, label, max = 9223372036854775807, min = 0 }) => {
  return (
    <div>
      <label htmlFor={field}>{label}</label>
      <input
        type='number'
        name={field}
        id={field}
        max={max}
        min={min}
        value={field}
        onChange={event => handleChange(event.target.value)}
        required
      />
    </div>
  );
};

export const InputSelect = ({ field, handleChange, label, multiple = false, options }) => {
  let count = 0;
  return (
    <div>
      <label htmlFor={field}>{label}</label>
      <select
        name={field}
        id={field}
        value={field}
        multiple={multiple}
        onChange={event => handleChange(event.target.value)}
      >
        {options.map(option => (
          <option
            key={count++}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
