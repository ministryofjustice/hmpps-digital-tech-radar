radar_visualization({
  svg_id: "radar",
  width: 1450,
  height: 1000,
  colors: {
    background: "#fff",
    grid: "#bbb",
    inactive: "#ddd"
  },
  title: "HMPPS Digital Tech Radar — Feb 2020",
  quadrants: [
    { name: "Languages" },
    { name: "Tooling" },
    { name: "Frameworks" },
    { name: "Techniques" }
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