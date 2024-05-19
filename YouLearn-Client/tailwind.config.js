module.exports = {
  content: ["./src/**/*.{html,ts}"], // Specify where Tailwind should look for classes to apply its styles
  theme: {
    extend: {
      colors: {
        'my-blue': '#007bff', // Custom color added to the theme
      },
    },
  },
  variants: {}, // Define responsive or state variants if needed
  plugins: [], // Include any Tailwind plugins you might need
  corePlugins: {
    preflight: false, // Disable Tailwind's reset styles since you're also using Bootstrap
  },
  prefix: 'tw-', // Prefix all Tailwind classes to avoid conflicts with Bootstrap
};