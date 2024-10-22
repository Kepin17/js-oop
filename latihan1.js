const hex = (r, g, b) => {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

const rgb = (r, g, b) => {
  return `rgb(${r}, ${g}, ${b})`;
};

const convertColor = (r, g, b) => {
  const color = {};

  color.r = r;
  color.g = g;
  color.b = b;

  color.rgb = function () {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  };

  color.hex = function () {
    const { r, g, b } = this;

    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  return color;
};

const color = convertColor(225, 225, 225);
const hasilToHex = color.hex();
const hasilToColor = color.rgb();

console.log(hasilToColor);
console.log(hasilToHex);
