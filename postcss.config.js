const cssnano = require("cssnano")({ preset: "default" });

const presetEnv = require("postcss-preset-env")({
    features: {
        "nesting-rules": true,
    },
});

const production = process.env.NODE_ENV === "production";

module.exports = {
    plugins: [require("tailwindcss"), require("postcss-import"), presetEnv, ...(production ? [cssnano] : [])],
};
