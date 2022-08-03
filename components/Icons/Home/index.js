export default function Home (props) {
  return (
    <svg
      height={props.height}
      width={props.width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke={props.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m1.5 10.5 9-9 9 9M3.5 11.5v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4" />
      </g>
    </svg>
  )
}
