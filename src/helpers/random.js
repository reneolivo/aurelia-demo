export function randomNumber(a = 0, b = 100) {
  return a + Math.round(Math.random() * (b - a));
}

export function randomColor() {
  return {
    red: randomNumber(0, 255),
    green: randomNumber(0, 255),
    blue: randomNumber(0, 255)
  }
}
