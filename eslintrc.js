module.exports = {
  "extends": ["eslint:recommended", "eslint-config-crockford", "plugin:security/recommended"],
  "plugins": ["m99coder", "security"],
  "root": true,
  "env": {
    "browser": true,
    "jquery": true,
    "jasmine": true,
    "node": true,
    "mocha": true,
    "builtin": true
  },
  "globals": {
    "$": false,
    "jQuery": true,
    "console": true,
    "module": true,
    "window": true,
    "document": true,
    "require": true,
    "_": true
  },
  "rules": {
    "new-cap": 2,
    "no-caller": 2,
    "no-eq-null": 2,
    "indent": ["error", 4],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "one-var": "off",
    "eqeqeq": ["error", "smart"],
    "curly": "error",
    "for-direction": "error",
    "no-tabs": "error",
    "complexity": ["error", 20],
    //20 is default
    "no-undef": "off",
    "no-underscore-dangle": "off",
    "vars-on-top": "off",
    "m99coder/vars-on-top": [2, {
      "forStatement": true,
      "forInStatement": true,
      "forOfStatement": true
    }],
    "wrap-iife": ["error", "inside"]
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVzbGludHJjLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDYixhQUFXLENBQ1Asb0JBRE8sRUFFUCx5QkFGTyxFQUdQLDZCQUhPLENBREU7QUFNYixhQUFXLENBQ1AsVUFETyxFQUVQLFVBRk8sQ0FORTtBQVViLFVBQVEsSUFWSztBQVdiLFNBQU87QUFDSCxlQUFXLElBRFI7QUFFSCxjQUFVLElBRlA7QUFHSCxlQUFXLElBSFI7QUFJSCxZQUFRLElBSkw7QUFLSCxhQUFTLElBTE47QUFNSCxlQUFXO0FBTlIsR0FYTTtBQW1CYixhQUFXO0FBQ1AsU0FBSyxLQURFO0FBRVAsY0FBVSxJQUZIO0FBR1AsZUFBVyxJQUhKO0FBSVAsY0FBVSxJQUpIO0FBS1AsY0FBVSxJQUxIO0FBTVAsZ0JBQVksSUFOTDtBQU9QLGVBQVcsSUFQSjtBQVFQLFNBQUs7QUFSRSxHQW5CRTtBQTZCYixXQUFTO0FBQ0wsZUFBVyxDQUROO0FBRUwsaUJBQWEsQ0FGUjtBQUdMLGtCQUFjLENBSFQ7QUFJTCxjQUFVLENBQ04sT0FETSxFQUVOLENBRk0sQ0FKTDtBQVFMLHVCQUFtQixDQUNmLE9BRGUsRUFFZixNQUZlLENBUmQ7QUFZTCxjQUFVLENBQ04sT0FETSxFQUVOLFFBRk0sQ0FaTDtBQWdCTCxZQUFRLENBQ0osT0FESSxFQUVKLFFBRkksQ0FoQkg7QUFvQkwsZUFBVyxLQXBCTjtBQXFCTCxjQUFVLENBQUMsT0FBRCxFQUFVLE9BQVYsQ0FyQkw7QUFzQkwsYUFBUyxPQXRCSjtBQXVCTCxxQkFBaUIsT0F2Qlo7QUF3QkwsZUFBVyxPQXhCTjtBQXlCTCxrQkFBYyxDQUFDLE9BQUQsRUFBVSxFQUFWLENBekJUO0FBeUJ3QjtBQUM3QixnQkFBWSxLQTFCUDtBQTJCTCw0QkFBd0IsS0EzQm5CO0FBNEJMLG1CQUFlLEtBNUJWO0FBNkJMLDRCQUF3QixDQUFDLENBQUQsRUFBSTtBQUFDLHNCQUFnQixJQUFqQjtBQUF1Qix3QkFBa0IsSUFBekM7QUFBK0Msd0JBQWtCO0FBQWpFLEtBQUosQ0E3Qm5CO0FBOEJMLGlCQUFhLENBQUMsT0FBRCxFQUFVLFFBQVY7QUE5QlI7QUE3QkksQ0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBcImV4dGVuZHNcIjogW1xuICAgICAgICBcImVzbGludDpyZWNvbW1lbmRlZFwiLFxuICAgICAgICBcImVzbGludC1jb25maWctY3JvY2tmb3JkXCIsXG4gICAgICAgIFwicGx1Z2luOnNlY3VyaXR5L3JlY29tbWVuZGVkXCJcbiAgICBdLFxuICAgIFwicGx1Z2luc1wiOiBbXG4gICAgICAgIFwibTk5Y29kZXJcIixcbiAgICAgICAgXCJzZWN1cml0eVwiXG4gICAgXSxcbiAgICBcInJvb3RcIjogdHJ1ZSxcbiAgICBcImVudlwiOiB7XG4gICAgICAgIFwiYnJvd3NlclwiOiB0cnVlLFxuICAgICAgICBcImpxdWVyeVwiOiB0cnVlLFxuICAgICAgICBcImphc21pbmVcIjogdHJ1ZSxcbiAgICAgICAgXCJub2RlXCI6IHRydWUsXG4gICAgICAgIFwibW9jaGFcIjogdHJ1ZSxcbiAgICAgICAgXCJidWlsdGluXCI6IHRydWVcbiAgICB9LFxuICAgIFwiZ2xvYmFsc1wiOiB7XG4gICAgICAgIFwiJFwiOiBmYWxzZSxcbiAgICAgICAgXCJqUXVlcnlcIjogdHJ1ZSxcbiAgICAgICAgXCJjb25zb2xlXCI6IHRydWUsXG4gICAgICAgIFwibW9kdWxlXCI6IHRydWUsXG4gICAgICAgIFwid2luZG93XCI6IHRydWUsXG4gICAgICAgIFwiZG9jdW1lbnRcIjogdHJ1ZSxcbiAgICAgICAgXCJyZXF1aXJlXCI6IHRydWUsXG4gICAgICAgIFwiX1wiOiB0cnVlXG4gICAgfSxcbiAgICBcInJ1bGVzXCI6IHtcbiAgICAgICAgXCJuZXctY2FwXCI6IDIsXG4gICAgICAgIFwibm8tY2FsbGVyXCI6IDIsXG4gICAgICAgIFwibm8tZXEtbnVsbFwiOiAyLFxuICAgICAgICBcImluZGVudFwiOiBbXG4gICAgICAgICAgICBcImVycm9yXCIsXG4gICAgICAgICAgICA0XG4gICAgICAgIF0sXG4gICAgICAgIFwibGluZWJyZWFrLXN0eWxlXCI6IFtcbiAgICAgICAgICAgIFwiZXJyb3JcIixcbiAgICAgICAgICAgIFwidW5peFwiXG4gICAgICAgIF0sXG4gICAgICAgIFwicXVvdGVzXCI6IFtcbiAgICAgICAgICAgIFwiZXJyb3JcIixcbiAgICAgICAgICAgIFwic2luZ2xlXCJcbiAgICAgICAgXSxcbiAgICAgICAgXCJzZW1pXCI6IFtcbiAgICAgICAgICAgIFwiZXJyb3JcIixcbiAgICAgICAgICAgIFwiYWx3YXlzXCJcbiAgICAgICAgXSxcbiAgICAgICAgXCJvbmUtdmFyXCI6IFwib2ZmXCIsXG4gICAgICAgIFwiZXFlcWVxXCI6IFtcImVycm9yXCIsIFwic21hcnRcIl0sXG4gICAgICAgIFwiY3VybHlcIjogXCJlcnJvclwiLFxuICAgICAgICBcImZvci1kaXJlY3Rpb25cIjogXCJlcnJvclwiLFxuICAgICAgICBcIm5vLXRhYnNcIjogXCJlcnJvclwiLFxuICAgICAgICBcImNvbXBsZXhpdHlcIjogW1wiZXJyb3JcIiwgMjBdLCAvLzIwIGlzIGRlZmF1bHRcbiAgICAgICAgXCJuby11bmRlZlwiOiBcIm9mZlwiLFxuICAgICAgICBcIm5vLXVuZGVyc2NvcmUtZGFuZ2xlXCI6IFwib2ZmXCIsXG4gICAgICAgIFwidmFycy1vbi10b3BcIjogXCJvZmZcIixcbiAgICAgICAgXCJtOTljb2Rlci92YXJzLW9uLXRvcFwiOiBbMiwge1wiZm9yU3RhdGVtZW50XCI6IHRydWUsIFwiZm9ySW5TdGF0ZW1lbnRcIjogdHJ1ZSwgXCJmb3JPZlN0YXRlbWVudFwiOiB0cnVlfV0sXG4gICAgICAgIFwid3JhcC1paWZlXCI6IFtcImVycm9yXCIsIFwiaW5zaWRlXCJdXG4gICAgfVxufTsiXX0=