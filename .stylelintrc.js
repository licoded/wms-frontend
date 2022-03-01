module.exports = {
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-standard-vue/scss",
  ],
  "rules": {
    "function-linear-gradient-no-nonstandard-direction": null,
    "at-rule-no-unknown": [true, {
      "ignoreAtRules": [
        "extends",
        "tailwind",
        "apply",
      ]
    }],
  }
}