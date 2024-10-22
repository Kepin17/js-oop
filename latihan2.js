const Color = (r, g, b) => {
  this.r = r;
  this.g = g;
  this.b = b;
};

Color.prototype.rgb = function () {
  const { r, g, b } = this;

  return `rgb(${r}, ${g}, ${b})`;
};

const color = new Color(225, 225, 225).rgb();
console.log(color);
