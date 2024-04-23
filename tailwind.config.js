/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "& .hover\\:after:hover::after": {
              content: '"Click to View Job Description"',
              position: "absolute",
              bottom: "-1.5rem",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              color: "white",
              padding: "0.5rem",
              borderRadius: "0.5rem",
              fontSize: "0.8rem",
            },
          },
        },
      },
    },
  },
  plugins: [],
};
