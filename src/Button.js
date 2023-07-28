import PropTypes from "prop-types";

export function Button({ text, name }) {
  return <button onClick={Click}>
      {text} - {name}
  </button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired
}

Button.defaultProps = {
  name: "Some User"
}

function Click(){
  return console.log("Hola React")
}
