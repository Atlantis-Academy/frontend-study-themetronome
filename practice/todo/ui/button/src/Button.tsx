export const Button = ({ children, className = null, type = null }) => {
  return (
    <button className={className} type={type}>
      {children}
    </button>
  )
}
