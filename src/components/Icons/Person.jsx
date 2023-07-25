export const Person = ({ width = 24, height = 24, fill = '#000'}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      style={{
        fill
      }}
      viewBox='0 0 24 24'
    >
      <circle cx={6} cy={4} r={2} />
      <path d="M9 7H3a1 1 0 0 0-1 1v7h2v7h4v-7h2V8a1 1 0 0 0-1-1z" />
      <circle cx={17} cy={4} r={2} />
      <path d="M20.21 7.73a1 1 0 0 0-1-.73h-4.5a1 1 0 0 0-1 .73L12 14h2l-1 4h2v4h4v-4h2l-1-4h2z" />
    </svg>
  )
}