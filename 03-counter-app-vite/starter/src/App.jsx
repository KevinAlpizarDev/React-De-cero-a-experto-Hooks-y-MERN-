
import PropTypes from "prop-types";


export const App = ({ title="No hay titulo", subtitle=123}) => {

if (!title) {
  throw new Error("El title es nulo")
  
}




  return (
    <div>
      <h1>{title}</h1>
      <h1>{subtitle}</h1>
      {/* <h1>{props.tittle}</h1> */}

      {/* 
      <h1 className="font-bold text-6xl text-red-500">
        Not Found :(
      </h1>
      */}
    </div>
  );
};

App.propTypes = {

title: PropTypes.string.isRequired,
subtitle:PropTypes.number


}


// App.defaultProps = {
//   title: "No hay titulo",
//   subtitle: 123,
//   name: "Kevin Alpizar"
  


// }