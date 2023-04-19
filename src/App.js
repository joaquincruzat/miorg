import "./App.css";
import { v4 as id } from "uuid";
import Header from "./components/Header/Header";
import FormWorker from "./components/FormWorker";
import MiOrg from "./components/MiOrg";
import Team from "./components/Team";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [workers, setWorkers] = useState([
    {
      id: id(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true,
    },
    {
      id: id(),
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav: true,
    },
    {
      id: id(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: true,
    },
    {
      id: id(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false,
    },
    {
      id: id(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: true,
    },
  ]);
  const [equipos, setEquipos] = useState([
    {
      id: id(),
      title: "Programación",
      colorBackground: "var(--background-programacion)",
      colorCard: "#d9f7e9",
    },
    {
      id: id(),
      title: "Front End",
      colorBackground: "#FFFFFF",
      colorCard: "#82cffa",
    },
    {
      id: id(),
      title: "Data Science",
      colorBackground: "#FFFFFF",
      colorCard: "#a6d157",
    },
    {
      id: id(),
      title: "Devops",
      colorBackground: "#FFFFFF",
      colorCard: "#e06b69",
    },
    {
      id: id(),
      title: "UX y Diseño",
      colorBackground: "#FFFFFF",
      colorCard: "#db6ebf",
    },
    {
      id: id(),
      title: "Móvil",
      colorBackground: "#FFFFFF",
      colorCard: "#ffba05",
    },
    {
      id: id(),
      title: "Innovación y Gestión",
      colorBackground: "#FFFFFF",
      colorCard: "#ff8a29",
    },
  ]);

  const [showForm, updateShow] = useState(false);

  //Registro de colaborador
  //RECORDAR PONER LOS CORCHETES DE ARRAY

  const registerNewWorker = (worker) => {
    setWorkers([...workers, worker]);
  };

  //Eliminar colaborador

  const deleteWorker = (id) => {
    const newWorkers = workers.filter((worker) => worker.id !== id);
    setWorkers(newWorkers);
  };

  //Crear nuevo equipo

  const createTeam = (team) => {
    setEquipos([...equipos, { ...team, id: id() }]);
  };

  //Actualizar Color

  const changeColor = (color, id) => {
    const updatedEquipos = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorCard = color;
      }
      return equipo;
    });

    setEquipos(updatedEquipos);
  };

  //Favoritos

  const like = (id) => {
    const likedWorker = workers.map((worker) => {
      if (worker.id === id) {
        worker.fav = !worker.fav;
      }
      return worker;
    });
    setWorkers(likedWorker);
  };

  //Switch
  const changeForm = () => {
    updateShow(!showForm);
  };

  return (
    <div className="App">
      <Header />
      {showForm ? (
        <FormWorker
          data={equipos}
          registerNewWorker={registerNewWorker}
          createTeam={createTeam}
        />
      ) : (
        <></>
      )}
      <MiOrg changeForm={changeForm} />
      {equipos.map((equipo) => (
        <Team
          data={equipo}
          key={equipo.title}
          workers={workers.filter((worker) => worker.equipo === equipo.title)}
          deleteWorker={deleteWorker}
          changeColor={changeColor}
          like={like}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
