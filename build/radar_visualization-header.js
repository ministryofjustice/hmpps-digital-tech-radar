radar_visualization({
  svg_id: "radar",
  width: 1450,
  height: 1000,
  colors: {
    background: "#fff",
    grid: "#bbb",
    inactive: "#ddd"
  },
  title: "HMPPS Digital Tech Radar — January 2023",
  quadrants: [
    { name: "Techniques" },
    { name: "Tooling" },
    { name: "Platforms" },
    { name: "Languages & Frameworks" }
  ],
  rings: [
    { name: "ADOPT", color: "#93c47d" },
    { name: "TRIAL", color: "#93d2c2" },
    { name: "HOLD", color: "#fbdb84" },
    { name: "REDUCE", color: "#efafa9" }
  ],
  print_layout: true,
  // zoomed_quadrant: 0,
  //ENTRIES
  entries: [
