import { useState, useEffect } from "react";
import ListadoPacientes from "./components/ListadoPacientes";
import Formulario from "./components/Formulario";
import Header from "./components/Header";

function App() {
  const [pacientes, setPacientes] = useState(
    JSON.parse(localStorage.getItem("pacientes")) ?? [] //Ya no es necesario el userEffect para LS en las ultimas versiones de React
  );
  const [paciente, setPaciente] = useState({});

  //Obtener lo que haya en LocalStorage
  /*useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? []; //Si no hay nada en LS entonces agregale un arreglo vacio

      setPacientes(pacientesLS);
    };
    obtenerLS();
  }, []);*/ //Cuando se pasa un arreglo vacío significa que se ejecute una sola vez

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes)); //convierte un objeto o valor de JavaScript en una cadena de texto JSON
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
