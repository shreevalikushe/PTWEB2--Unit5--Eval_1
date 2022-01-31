function Rectangle(l, b) {
  this.length = l;
  this.breadth = b;
  this.area = () => {
    return this.length * this.breadth;
  };
}
function Square(s) {
  this.length = s;
  this.perimeter = () => {
    return 2 * (this.length + this.length);
  };
}

const rect = new Rectangle(2, 8);
const area = rect.area();
console.log("AREA", area);

const sqr = new Square(2);
const perimeter = sqr.perimeter();
console.log("PERIMETER", perimeter);
