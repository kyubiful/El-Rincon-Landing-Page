export const Menu = ({ width = 24, height = 24, fill = '#000'}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      style={{
        fill,
      }}
      viewBox="0 0 24 24"
    >
      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
    </svg>
  )
}