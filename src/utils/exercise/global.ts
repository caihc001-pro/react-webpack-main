var name1 = "lucy";
var obj = {
  name1: "martion",
  say: function () {
    console.log(this.name1);
  },
};

obj.say();
setTimeout(() => {
  obj.say();
}, 0);
