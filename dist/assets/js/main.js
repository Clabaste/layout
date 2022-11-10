function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var horizontals = document.querySelectorAll('input[name="horizontal"]');
var verticals = document.querySelectorAll('input[name="vertical"]');
var selfs = document.querySelectorAll('input[name="self"]');
var spaces = document.querySelectorAll('input[name="space"]');
var dirs = document.querySelectorAll('input[name="dir"]');
var reset = document.querySelectorAll('button.reset');
var flexbox = document.querySelectorAll('.js-flex');
var selfChild = document.querySelectorAll('.js-self');
var allTheHorizontalsClasses = [];
var allTheVerticalsClasses = [];
var allTheSpacesClasses = [];
var allTheSelfClasses = [];
var allTheDirClasses = [];
var setFlexClass = function setFlexClass(e, allTheClasses) {
  flexbox.forEach(function (item) {
    var _item$classList;
    (_item$classList = item.classList).remove.apply(_item$classList, _toConsumableArray(allTheClasses));
    item.classList.add(e.target.value);
  });

  /*flexbox.classList.add*/
};

horizontals.forEach(function (item) {
  allTheHorizontalsClasses.push(item.value);
  item.addEventListener('change', function (e) {
    setFlexClass(e, allTheHorizontalsClasses);
  });
});
verticals.forEach(function (item) {
  allTheVerticalsClasses.push(item.value);
  item.addEventListener('change', function (e) {
    setFlexClass(e, allTheVerticalsClasses);
  });
});
spaces.forEach(function (item) {
  allTheSpacesClasses.push(item.value);
  item.addEventListener('change', function (e) {
    setFlexClass(e, allTheSpacesClasses);
  });
});
dirs.forEach(function (item) {
  allTheDirClasses.push(item.value);
  item.addEventListener('change', function (e) {
    setFlexClass(e, allTheDirClasses);
  });
});
selfs.forEach(function (item) {
  item.addEventListener('change', function (e) {
    allTheSelfClasses.push(item.value);
    selfChild.forEach(function (item) {
      var _item$classList2;
      (_item$classList2 = item.classList).remove.apply(_item$classList2, allTheSelfClasses);
      item.classList.add(e.target.value);
    });
  });
});
reset.forEach(function (item) {
  item.addEventListener('click', function (e) {
    flexbox.forEach(function (item) {
      var _item$classList3, _item$classList4, _item$classList5, _item$classList6;
      (_item$classList3 = item.classList).remove.apply(_item$classList3, allTheHorizontalsClasses);
      (_item$classList4 = item.classList).remove.apply(_item$classList4, allTheVerticalsClasses);
      (_item$classList5 = item.classList).remove.apply(_item$classList5, allTheSpacesClasses);
      (_item$classList6 = item.classList).remove.apply(_item$classList6, allTheDirClasses);
    });
    selfChild.forEach(function (item) {
      var _item$classList7;
      (_item$classList7 = item.classList).remove.apply(_item$classList7, allTheSelfClasses);
    });
    horizontals.forEach(function (item) {
      item.checked = false;
    });
    verticals.forEach(function (item) {
      item.checked = false;
    });
    selfs.forEach(function (item) {
      item.checked = false;
    });
    dirs.forEach(function (item) {
      item.checked = false;
    });
  });
});
var flexHeightInput = document.getElementById('flexHeightInput');
var flexHeightEl = document.getElementById('flexHeight');
var rangeValue = document.getElementById('rangeValue');
flexHeightEl.style.height = "".concat(flexHeightInput.getAttribute('value'), "%");
rangeValue.innerText = ": ".concat(flexHeightInput.getAttribute('value'), "%");
document.getElementById('flexHeightInput').addEventListener('input', function (e) {
  flexHeightEl.style.height = "".concat(e.target.value, "%");
  rangeValue.innerText = ": ".concat(e.target.value, "%");
});