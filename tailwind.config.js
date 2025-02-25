/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
        "TEAL_LIGHT": "#E6F3F5",
        "TEAL_LIGHT_HOVER": "#D9EDF0",
        "TEAL_LIGHT_ACTIVE": "#B0DAE1",
        "TEAL_NORMAL": "#00879E",
        "TEAL_NORMAL_HOVER": "#007A8E",
        "TEAL_NORMAL_ACTIVE": "#006C7E",
        "TEAL_DARK": "#006577",
        "TEAL_DARK_HOVER": "#00515F",
        "TEAL_DARK_ACTIVE": "#003D47",
        "TEAL_DARKER": "#002F37",
        "ORANGE_LIGHT": "#FFF7EF",
        "ORANGE_LIGHT_HOVER": "#FFF2E6",
        "ORANGE_LIGHT_ACTIVE": "#FFE5CC",
        "ORANGE_NORMAL": "#FFAB5B",
        "ORANGE_NORMAL_HOVER": "#E69A52",
        "ORANGE_NORMAL_ACTIVE": "#CC8949",
        "ORANGE_DARK": "#BF8044",
        "ORANGE_DARK_HOVER": "#996737",
        "ORANGE_DARK_ACTIVE": "#734D29",
        "ORANGE_DARKER": "#593C20",
        "CREAM_LIGHT": "#FFFEFB",
        "CREAM_LIGHT_HOVER": "#FFFDFA",
        "CREAM_LIGHT_ACTIVE": "#FFFBF4",
        "CREAM_NORMAL": "#FFF2DB",
        "CREAM_NORMAL_HOVER": "#E6DAC5",
        "CREAM_NORMAL_ACTIVE": "#CCC2AF",
        "CREAM_DARK": "#BFB6A4",
        "CREAM_DARK_HOVER": "#999183",
        "CREAM_DARK_ACTIVE": "#736D63",
        "CREAM_DARKER": "#59554D",
        "BLUE_LIGHT": "#E6EAF4",
        "BLUE_LIGHT_HOVER": "#D9E0EF",
        "BLUE_LIGHT_ACTIVE": "#B0BFDD",
        "BLUE_NORMAL": "#003092",
        "BLUE_NORMAL_HOVER": "#002B83",
        "BLUE_NORMAL_ACTIVE": "#002675",
        "BLUE_DARK": "#00246E",
        "BLUE_DARK_HOVER": "#001D58",
        "BLUE_DARK_ACTIVE": "#001642",
        "BLUE_DARKER": "#001133",
        "RED_LIGHT": "#F7E9E9",
        "RED_LIGHT_HOVER": "#F3DEDE",
        "RED_LIGHT_ACTIVE": "#E7BABA",
        "RED_NORMAL": "#B22222",
        "RED_NORMAL_HOVER": "#A01F1F",
        "RED_NORMAL_ACTIVE": "#8E1B1B",
        "RED_DARK": "#861A1A",
        "RED_DARK_HOVER": "#6B1414",
        "RED_DARK_ACTIVE": "#500F0F",
        "RED_DARKER": "#3E0C0C",
        "YELLOW_LIGHT": "#FFF9E6",
        "YELLOW_LIGHT_HOVER": "#FFF6DA",
        "YELLOW_LIGHT_ACTIVE": "#FFECB2",
        "YELLOW_NORMAL": "#FFC107",
        "YELLOW_NORMAL_HOVER": "#E6AE06",
        "YELLOW_NORMAL_ACTIVE": "#CC9A06",
        "YELLOW_DARK": "#BF9105",
        "YELLOW_DARK_HOVER": "#997404",
        "YELLOW_DARK_ACTIVE": "#735703",
        "YELLOW_DARKER": "#594402"
    },
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
  daisyui:{
    themes: ["cupcake"]
  }
}

