

const Button = ({children, btnColor, onClickHandler}) => {
  return (
    <span onClick={onClickHandler} className={`text-white px-4 py-2 ${btnColor} mr-2 capitalize rounded-md cursor-pointer`}>{children}</span>
  )
}

export default Button