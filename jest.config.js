import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.from";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.date.to-string";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _require = require('jest-config'),
    defaults = _require.defaults;

module.exports = {
  moduleFileExtensions: [].concat(_toConsumableArray(defaults.moduleFileExtensions), ['ts', 'tsx']),
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 95,
      lines: 95,
      statements: 95
    }
  },
  collectCoverage: true,
  verbose: true,
  transform: {
    ".*\.tsx?$": "ts-jest"
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImplc3QuY29uZmlnLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJkZWZhdWx0cyIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2R1bGVGaWxlRXh0ZW5zaW9ucyIsImNvdmVyYWdlVGhyZXNob2xkIiwiZ2xvYmFsIiwiYnJhbmNoZXMiLCJmdW5jdGlvbnMiLCJsaW5lcyIsInN0YXRlbWVudHMiLCJjb2xsZWN0Q292ZXJhZ2UiLCJ2ZXJib3NlIiwidHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUFtQkEsT0FBTyxDQUFDLGFBQUQsQztJQUFuQkMsUSxZQUFBQSxROztBQUVQQyxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDYkMsRUFBQUEsb0JBQW9CLCtCQUFNSCxRQUFRLENBQUNHLG9CQUFmLElBQXFDLElBQXJDLEVBQTJDLEtBQTNDLEVBRFA7QUFFYkMsRUFBQUEsaUJBQWlCLEVBQUU7QUFDZkMsSUFBQUEsTUFBTSxFQUFFO0FBQ0pDLE1BQUFBLFFBQVEsRUFBRSxFQUROO0FBRUpDLE1BQUFBLFNBQVMsRUFBRSxFQUZQO0FBR0pDLE1BQUFBLEtBQUssRUFBRSxFQUhIO0FBSUpDLE1BQUFBLFVBQVUsRUFBRTtBQUpSO0FBRE8sR0FGTjtBQVViQyxFQUFBQSxlQUFlLEVBQUUsSUFWSjtBQVdiQyxFQUFBQSxPQUFPLEVBQUUsSUFYSTtBQVliQyxFQUFBQSxTQUFTLEVBQUU7QUFDUCxpQkFBYTtBQUROO0FBWkUsQ0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7ZGVmYXVsdHN9ID0gcmVxdWlyZSgnamVzdC1jb25maWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbW9kdWxlRmlsZUV4dGVuc2lvbnM6IFsuLi5kZWZhdWx0cy5tb2R1bGVGaWxlRXh0ZW5zaW9ucywgJ3RzJywgJ3RzeCddLFxuICAgIGNvdmVyYWdlVGhyZXNob2xkOiB7XG4gICAgICAgIGdsb2JhbDoge1xuICAgICAgICAgICAgYnJhbmNoZXM6IDkwLFxuICAgICAgICAgICAgZnVuY3Rpb25zOiA5NSxcbiAgICAgICAgICAgIGxpbmVzOiA5NSxcbiAgICAgICAgICAgIHN0YXRlbWVudHM6IDk1XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbGxlY3RDb3ZlcmFnZTogdHJ1ZSxcbiAgICB2ZXJib3NlOiB0cnVlLFxuICAgIHRyYW5zZm9ybToge1xuICAgICAgICBcIi4qXFwudHN4PyRcIjogXCJ0cy1qZXN0XCJcbiAgICB9LFxufSJdfQ==