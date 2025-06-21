import Formulario from "./components/Formulario";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <main className="px-3">
        <h1 className="text-center my-3">Formulario</h1>
        <Formulario />
      </main>
       <footer className="bg-dark text-light text-center py-3">&copy; Todos los derechos reservados</footer>
    </>
  );
}

export default App;
