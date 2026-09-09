// Visual de marca: um "cérebro" abstrato em vidro obsidiana com nós que
// pulsam — usado no hero e como mark do header. SVG puro, sem lib de 3D,
// pra não pesar o bundle.
export default function NeuralBrain({ className = "" }: { className?: string }) {
  const nodes: Array<[number, number, number]> = [
    [100, 40, 0], [60, 70, 0.4], [140, 70, 0.8],
    [40, 120, 1.2], [100, 110, 0.2], [160, 120, 1.6],
    [70, 165, 2.0], [130, 165, 0.6], [100, 195, 1.0],
  ];
  const edges: Array<[number, number]> = [
    [0, 1], [0, 2], [1, 3], [1, 4], [2, 4], [2, 5],
    [3, 6], [4, 6], [4, 7], [5, 7], [6, 8], [7, 8], [1, 2], [3, 4], [4, 5],
  ];

  return (
    <svg
      viewBox="0 0 200 220"
      className={className}
      role="img"
      aria-label="Cérebro neural abstrato"
    >
      <defs>
        <radialGradient id="brainGlow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#8b6bff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#8b6bff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="brainStroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8b6bff" />
          <stop offset="100%" stopColor="#2fd9e8" />
        </linearGradient>
      </defs>

      <circle cx="100" cy="115" r="100" fill="url(#brainGlow)" />

      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="url(#brainStroke)"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
      ))}

      {nodes.map(([x, y, delay], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i % 3 === 0 ? 4 : 2.5}
          fill={i % 2 === 0 ? "#8b6bff" : "#2fd9e8"}
          className="node-pulse"
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
    </svg>
  );
}
