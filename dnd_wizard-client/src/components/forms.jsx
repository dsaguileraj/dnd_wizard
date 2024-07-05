export const Form = ({ children, handleSubmit, header }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h1>{header}</h1>
      {children}
      <Button />
    </form>
  );
};

export const Button = ({ label = 'Submit' }) => {
  return <button type='submit'>{label}</button>;
};

// Inputs
export const InputCheck = ({ label, field, setField }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        type='checkbox'
        name={label}
        id={label}
        value={field}
        onChange={event => setField(event.target.checked)}
      />
    </div>
  );
};

export const InputText = ({ label, field, setField, required = true }) => {
  return (
    <div>
      <label htmlFor={field}>{label}</label>
      <input
        type='text'
        name={field}
        id={field}
        maxLength={50}
        value={field}
        onChange={event => setField(event.target.value)}
        required={required}
      />
    </div>
  );
};

export const InputTextArea = ({ label, field, setField, required = true }) => {
  return (
    <div>
      <label htmlFor={field}>{label}</label>
      <textarea
        name={field}
        id={field}
        value={field}
        onChange={event => setField(event.target.value)}
        required={required}
      ></textarea>
    </div>
  );
};

export const InputNumber = ({ label, field, setField, max = 9223372036854775807n, min = 0, required = true }) => {
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
        onChange={event => setField(event.target.value)}
        required={required}
      />
    </div>
  );
};

export const InputSelect = ({ label, field, setField, options, multiple = false, required = true }) => {
  let count = 0;
  return (
    <div>
      <label htmlFor={field}>{label}</label>
      <select
        name={field}
        id={field}
        value={field}
        multiple={multiple}
        onChange={event => setField(event.target.value)}
        required={required}
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
