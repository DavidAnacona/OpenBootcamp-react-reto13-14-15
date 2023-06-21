import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/containers/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import AllCycles from './hooks/lifecycle/AllCycles';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/containers/father';
import OptionalRender from './components/pure/optionalRender';
import HomePage from './pages/home/HomePage';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import TaskFormik from './components/pure/forms/taskFormik';
function App() {
  return (
    <div className="App">
    {/*
      <header className="App-header">
       
        {/* Componente propio Greeting
        <Greeting name="David" />
        <GreetingF name="David" />
        <TaskListComponent />
        {/**Ejemplos de uso de hooks 
        {/* <Ejemplo1 /> 
        {/*<Ejemplo2 /> 
        {/*<MiComponenteConContexto />
        {/*<Ejemplo4 nombre="Martin" >
        {/**Todo lo que este aca adentro sera tratado como props.children 
          <h3>
            Contenidop del props.children
          </h3>
        </Ejemplo4>
        <AllCycles />
        <GreetingStyled name="David" /> 
      </header> */}
      {/** Ejemplos de renderizado condicional */}
      {/** <OptionalRender />*/}
      {/*<TaskListComponent />*/}
      {/**Gestion de eventos 
      <Father /> */}


      {/**Ejemplos de uso de formik y Yup */}
      {/*<LoginFormik></LoginFormik>*/}
      {/* <RegisterFormik></RegisterFormik> */}
      <TaskFormik />
    </div>
  );
}

export default App;
