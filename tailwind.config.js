module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      //Native Colors
      white: "#FFFFFF",
      black: "#000000",
      trans: "transparent",

      //Project Colors
      dark: "#171717",
      light: "#FFFFFA",
      lowOp: "rgba(23, 23, 23, 0.64)",
      green: "#31C324",
      yellow: "#C39724",
      red: "#C32424",
      greenGrad:
        "linear-gradient(90.42deg, rgba(49, 195, 36, 0.1) -1.63%, rgba(222, 222, 217, 0.1) 42.77%), #DDDDD8",
      yellowGrad:
        "linear-gradient(90.42deg, rgba(195, 151, 36, 0.1) -1.63%, rgba(222, 222, 217, 0.1) 42.77%), #DDDDD8",
      redGrad:
        "linear-gradient(90.42deg, rgba(195, 36, 36, 0.1) -1.63%, rgba(222, 222, 217, 0.1) 42.77%), #DDDDD8;",
    },
    fontFamily: {},
    extend: {
      spacing: {
        //3x
        "3x1": "3px",
        "3x2": "6px",
        "3x3": "9px",
        "3x4": "12px",
        "3x5": "15px",
        "3x6": "18px",
        "3x7": "21px",
        "3x8": "24px",
        "3x9": "27px",
        "3x10": "30px",
        "3x11": "33px",
        "3x12": "36px",
        "3x13": "39px",
        "3x14": "42px",
        "3x15": "45px",
        "3x16": "48px",
        "3x17": "51px",
        "3x18": "54px",
        "3x19": "57px",
        "3x20": "60px",
        //4x
        "4x1": "4px",
        "4x2": "8px",
        "4x3": "12px",
        "4x4": "16px",
        "4x5": "20px",
        "4x6": "24px",
        "4x7": "28px",
        "4x8": "32px",
        "4x9": "36px",
        "4x10": "40px",
        "4x11": "44px",
        "4x12": "48px",
        "4x13": "52px",
        "4x14": "56px",
        "4x15": "60px",
        "4x16": "64px",
        "4x17": "68px",
        "4x18": "72px",
        "4x19": "76px",
        "4x20": "80px",
        //5x
        "5x1": "5px",
        "5x2": "10px",
        "5x3": "15px",
        "5x4": "20px",
        "5x5": "25px",
        "5x6": "30px",
        "5x7": "35px",
        "5x8": "40px",
        "5x9": "45px",
        "5x10": "50px",
        "5x11": "55px",
        "5x12": "60px",
        "5x13": "65px",
        "5x14": "70px",
        "5x15": "75px",
        "5x16": "80px",
        "5x17": "85px",
        "5x18": "90px",
        "5x19": "95px",
        "5x20": "100px",
      },
    },
  },
  plugins: [],
};
