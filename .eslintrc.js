module.exports = {
  "extends": "google",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "rules":{
    "no-mixed-spaces-and-tabs": [2, "smart-tabs"],
    "require-jsdoc": ["error", {
        "require": {
            "FunctionDeclaration": false,
            "MethodDefinition": false,
            "ClassDeclaration": false,
            "ArrowFunctionExpression": false,
            "FunctionExpression": false
        }
    }]
  }
};
