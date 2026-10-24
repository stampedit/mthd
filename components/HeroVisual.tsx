const SCATTERED = [
  { label: "Spreadsheet", x: 14, y: 30, rotate: -5 },
  { label: "Email", x: 56, y: 78, rotate: 3 },
  { label: "Scheduling", x: 10, y: 126, rotate: -3 },
  { label: "Follow-ups", x: 52, y: 176, rotate: 4 },
  { label: "Inventory", x: 16, y: 224, rotate: -4 },
];

const ORGANIZED = [
  { label: "Automation", y: 30 },
  { label: "Dashboard", y: 77 },
  { label: "Workflow", y: 124 },
  { label: "Notifications", y: 171 },
  { label: "Reporting", y: 218 },
];

const CHIP_W = 96;
const CHIP_H = 26;
const RIGHT_X = 344;
const RIGHT_W = 118;
const RIGHT_H = 28;
const CENTER_X = 198;
const CENTER_Y = 102;
const CENTER_S = 76;
const MID_Y = CENTER_Y + CENTER_S / 2;

function inPath(chip: (typeof SCATTERED)[number]) {
  const sx = chip.x + CHIP_W;
  const sy = chip.y + CHIP_H / 2;
  return `M ${sx} ${sy} C ${sx + 45} ${sy}, ${CENTER_X - 45} ${MID_Y}, ${CENTER_X} ${MID_Y}`;
}

function outPath(ry: number) {
  const cx = CENTER_X + CENTER_S;
  return `M ${cx} ${MID_Y} C ${cx + 35} ${MID_Y}, ${RIGHT_X - 35} ${ry + RIGHT_H / 2}, ${RIGHT_X} ${ry + RIGHT_H / 2}`;
}

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-lg">
      <svg
        viewBox="0 0 480 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        role="img"
        aria-label="Scattered work flowing through MTHD into an organized system"
      >
        <style>{`
          .hv-label { font-family: var(--font-inter), Inter, system-ui, sans-serif; }
          .hv-flow { stroke-dasharray: 3 6; animation: hvDash 1.8s linear infinite; }
          .hv-ring { animation: hvPulse 2.6s ease-in-out infinite; }
          .hv-dot-live { animation: hvBlink 2.2s ease-in-out infinite; }
          .hv-dot-live.d2 { animation-delay: 0.7s; }
          .hv-dot-live.d3 { animation-delay: 1.4s; }
          @keyframes hvDash { to { stroke-dashoffset: -18; } }
          @keyframes hvPulse { 0%, 100% { opacity: 0.12; } 50% { opacity: 0.4; } }
          @keyframes hvBlink { 0%, 100% { opacity: 0.25; } 50% { opacity: 1; } }
          @media (prefers-reduced-motion: reduce) {
            .hv-flow, .hv-ring, .hv-dot-live { animation: none; }
            .hv-packet { display: none; }
          }
        `}</style>

        <text x="60" y="14" textAnchor="middle" className="hv-label" fontSize="9" letterSpacing="2" fill="#525252">
          SCATTERED
        </text>
        <text x={RIGHT_X + RIGHT_W / 2} y="14" textAnchor="middle" className="hv-label" fontSize="9" letterSpacing="2" fill="#525252">
          SYSTEM
        </text>

        {SCATTERED.map((chip) => (
          <path
            key={`in-${chip.label}`}
            d={inPath(chip)}
            stroke="#2dd4bf"
            strokeOpacity="0.45"
            strokeWidth="1.5"
            className="hv-flow"
          />
        ))}

        {ORGANIZED.map((chip) => (
          <path
            key={`out-${chip.label}`}
            d={outPath(chip.y)}
            stroke="#2dd4bf"
            strokeOpacity="0.55"
            strokeWidth="1.5"
            className="hv-flow"
          />
        ))}

        {[1, 3].map((i) => (
          <circle key={`pi-${i}`} r="2.5" fill="#2dd4bf" className="hv-packet">
            <animateMotion
              dur="2.4s"
              begin={`${i * 0.8}s`}
              repeatCount="indefinite"
              path={inPath(SCATTERED[i])}
            />
          </circle>
        ))}
        {[0, 2].map((i) => (
          <circle key={`po-${i}`} r="2.5" fill="#2dd4bf" className="hv-packet">
            <animateMotion
              dur="2.2s"
              begin={`${i * 0.9 + 0.5}s`}
              repeatCount="indefinite"
              path={outPath(ORGANIZED[i].y)}
            />
          </circle>
        ))}

        {SCATTERED.map((chip) => (
          <g
            key={chip.label}
            transform={`rotate(${chip.rotate} ${chip.x + CHIP_W / 2} ${chip.y + CHIP_H / 2})`}
          >
            <rect
              x={chip.x}
              y={chip.y}
              width={CHIP_W}
              height={CHIP_H}
              rx="7"
              fill="#141414"
              stroke="#2e2e2e"
            />
            <text
              x={chip.x + CHIP_W / 2}
              y={chip.y + CHIP_H / 2 + 4}
              textAnchor="middle"
              className="hv-label"
              fontSize="10.5"
              fill="#a3a3a3"
            >
              {chip.label}
            </text>
          </g>
        ))}

        <rect
          x={CENTER_X - 7}
          y={CENTER_Y - 7}
          width={CENTER_S + 14}
          height={CENTER_S + 14}
          rx="22"
          fill="none"
          stroke="#2dd4bf"
          strokeOpacity="0.5"
          className="hv-ring"
        />
        <rect
          x={CENTER_X}
          y={CENTER_Y}
          width={CENTER_S}
          height={CENTER_S}
          rx="18"
          fill="#0a0a0a"
          stroke="#2dd4bf"
          strokeWidth="1.5"
        />
        <text
          x={CENTER_X + CENTER_S / 2}
          y={MID_Y + 6}
          textAnchor="middle"
          className="hv-label"
          fontSize="17"
          fontWeight="600"
          fill="#ffffff"
        >
          MTHD<tspan fill="#2dd4bf">.</tspan>
        </text>

        {ORGANIZED.map((chip, i) => (
          <g key={chip.label}>
            <rect
              x={RIGHT_X}
              y={chip.y}
              width={RIGHT_W}
              height={RIGHT_H}
              rx="8"
              fill="#0f1a19"
              stroke="#2dd4bf"
              strokeOpacity="0.35"
            />
            <circle
              cx={RIGHT_X + 14}
              cy={chip.y + RIGHT_H / 2}
              r="3"
              fill="#2dd4bf"
              className={`hv-dot-live d${(i % 3) + 1}`}
            />
            <text
              x={RIGHT_X + 26}
              y={chip.y + RIGHT_H / 2 + 4}
              className="hv-label"
              fontSize="11"
              fill="#e5e5e5"
            >
              {chip.label}
            </text>
          </g>
        ))}
      </svg>
      <p className="mt-4 text-center text-sm text-mthd-muted">
        Scattered work, organized into one system.
      </p>
    </div>
  );
}
