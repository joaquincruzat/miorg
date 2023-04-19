import "./FormWorker.css";
import { useState } from "react";
import Input from "../Input";
import OptionList from "../OptionList";
import FormButton from "../FormButton";

const FormWorker = (props) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");

  //State Equipo

  const [teamTitle, setTeamTitle] = useState("");
  const [teamColor, setTeamColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let newWorker = {
      equipo,
      foto,
      nombre,
      puesto,
    };
    props.registerNewWorker(newWorker);
  };

  const handleSubmitTeam = (e) => {
    e.preventDefault();
    let newTeam = {
      title: teamTitle,
      colorCard: teamColor,
    };
    props.createTeam(newTeam);
  };

  return (
    <section className="form-worker">
      <form onSubmit={handleSubmit}>
        <h2>Rellena el formulario para crear el colaborador</h2>
        <Input
          title="Nombre"
          placeholder="Ingrese nombre"
          value={nombre}
          setValue={setNombre}
          type="text"
          required
        />
        <Input
          title="Puesto"
          placeholder="Ingrese puesto"
          value={puesto}
          setValue={setPuesto}
          type="text"
          required
        />
        <Input
          title="Foto"
          placeholder="Ingrese foto"
          value={foto}
          setValue={setFoto}
          type="text"
          required
        />
        <OptionList
          placeholder="Seleccione una opción"
          required
          value={equipo}
          setValue={setEquipo}
          equipos={props.data}
        />
        <FormButton text="Crear" />
      </form>
      <form onSubmit={handleSubmitTeam}>
        <h2>Rellena el formulario para crear un equipo</h2>
        <Input
          title="Nombre"
          placeholder="Ingrese nombre de equipo"
          value={teamTitle}
          setValue={setTeamTitle}
          type="text"
          required
        />
        <Input
          title="Color"
          placeholder="Ingrese color en Hex"
          value={teamColor}
          setValue={setTeamColor}
          type="color"
          required
        />
        <FormButton text="Crear" />
      </form>
    </section>
  );
};

export default FormWorker;
