const GridPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="grid-pattern"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M 40 0 L 0 0 0 40"
          fill="none"
          stroke="#a7f3d0"
          strokeWidth="0.5"
        />
      </pattern>
    </defs>
    <rect
      width="100%"
      height="100%"
      fill="url(#grid-pattern)"
    />
  </svg>
);

export default GridPattern;
