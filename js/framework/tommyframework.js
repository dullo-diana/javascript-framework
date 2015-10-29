var T = function(selector) {
  return document.querySelectorAll(selector);
}

NodeList.prototype.css = function (prop, val) {
  Array.prototype.forEach.call(this, function(item){
    item.style[prop] = val;
  })
};


NodeList.prototype.hide = function () {
  Array.prototype.forEach.call(this, function(item){
    item.style.display = "none";
  })
};

NodeList.prototype.show = function () {
  Array.prototype.forEach.call(this, function(item){
    item.style.display = "block";
  })
};
