export const Form = ({ children, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            {children}
            <InputButton label="Crear" />
        </form>
    );
};

export const InputCheck = ({ handleChange, label }) => {
    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input type="checkbox" name={label} id={label} onChange={(event) => handleChange(event.target.checked)} />
        </div>
    );
};

export const InputButton = ({ label }) => {
    return <button type="submit">{label}</button>;
};

export const InputText = ({ field, handleChange, label, maxLength = 50 }) => {
    return (
        <div>
            <label htmlFor={field}>{label}</label>
            <input type="text" name={field} id={field} maxLength={maxLength} onChange={(event) => handleChange(event.target.value)} required />
        </div>
    );
};

export const InputTextArea = ({ field, handleChange, label }) => {
    return (
        <div>
            <label htmlFor={field}>{label}</label>
            <textarea name={field} id={field} onChange={(event) => handleChange(event.target.value)}></textarea>
        </div>
    );
};

export const InputNumber = ({ field, handleChange, label, max = 9223372036854775807, min = 0 }) => {
    return (
        <div>
            <label htmlFor={field}>{label}</label>
            <input type="number" name={field} id={field} max={max} min={min} onChange={(event) => handleChange(event.target.value)} required />
        </div>
    );
};

export const InputSelect = ({ field, handleChange, label, options }) => {
    let count = 1;
    return (
        <div>
            <label htmlFor={field}>{label}</label>
            <select name={field} id={field} onChange={(event) => handleChange(event.target.value)}>
                {options.map((option) => (
                    <option key={count++} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};
