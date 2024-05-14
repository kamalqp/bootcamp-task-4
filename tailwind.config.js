/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        "vazirThin" : "vazir Thin",
        "vazirExtraLight" : "vazir ExtraLight",
        "vazirLight" : "vazir Light",
        "vazirRegular" : "vazir Regular",
        "vazirMedium" : "vazir Medium",
        "vazirSemiBold" : "vazir SemiBold",
        "vazirBold" : "vazir Bold",
        "vazirExtraBold" : "vazir ExtraBold",
        "vazirBlack" : "vazir Black"
      },
      spacing: {
        "18.5" : "4.625rem",  // 74px //
        "29.80" : "7.4375rem", // 119px //
        "44.5" : "11.125rem",  // 178px //
        "78.80" : "19.6875rem",  // 315px //
        "92.5" : "23.125rem", // 370px //
        "175" : "43.75rem" // 700px //
      },
      colors: {
        Primary : {
          900 : "#4A6DFF",
        },
        secondary: {
          200 : "#BFC0CB",
          300 : "#36385380",
          600 : "#6A6C87",
          700 : "#555775",
          800 : "#3F4264",
          900 : "#2A2D53",
        } ,
        gold : "#FF9900",
        grayB : "#DFDFE580",
        cuRed : "#FF0000CC",

      },
      fontSize: {
        "2xs" : "0.375rem",
        "1xs" : "0.5rem"
      }
    },
  },
  plugins: [],
}

