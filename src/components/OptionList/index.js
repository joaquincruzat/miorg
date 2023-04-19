import "../OptionList/OptionList.css";

const OptionList = ({ equipos, value, setValue }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="option-list">
      <label>Equipos</label>
      <select value={value} onChange={handleChange}>
        <option value="" disabled defaultValue="Seleccionar Opción" hidden>
          Seleccionar opción
        </option>
        {equipos.map((equipo, index) => (
          <option key={index}>{equipo.title}</option>
        ))}
      </select>
    </div>
  );
};

export default OptionList;
