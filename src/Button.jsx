import PropTypes from 'prop-types'

const Button = (props) => {
    console.log(props)
  return (
    <div>
        <button style={{backgroundColor : `${props.bgColor}`}}>{props.textInsideButton}</button>
    </div>
  )
}
Button.propTypes = {
    textInsideButton : PropTypes.string.isRequired
}

Button.defaultProps = {
    bgColor  : 'yellow',
    textInsideButton : "hello world"
}

export default Button