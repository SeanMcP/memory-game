function shuffle(array: any[]) {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const emojis = [
  "🐮",
  "🐷",
  "🐶",
  "🐱",
  "🦁",
  "🐻",
  "🐯",
  "🐼",
  "🐵",
  "🐸",
  "🐹",
];

export function selectEmojis(count = 16) {
  const list = shuffle(emojis).slice(0, count / 2);
  return shuffle([...list, ...list]);
}
