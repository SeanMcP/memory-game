import { selectEmojis } from "./shuffle";
const gameEl = document.getElementById("game");
const cardCount = 16;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function round() {
  delete gameEl.dataset.count;
  delete gameEl.dataset.last;
  delete gameEl.dataset.state;
  const emojis = selectEmojis(cardCount);
  let innerHTML = "";
  emojis.forEach((emoji, i) => {
    innerHTML += `<button data-type="card" data-key="${alphabet[i]}">${emoji}</button>`;
  });
  gameEl.innerHTML = innerHTML;
}

round();

gameEl.addEventListener("click", (event) => {
  const { target } = event;
  if (gameEl.dataset.state === "frozen" || target.dataset.state) {
    return event.preventDefault();
  }
  if (target?.dataset.type === "card") {
    target.dataset.state = "active";
    if (gameEl.dataset.last) {
      if (target.textContent === gameEl.dataset.last) {
        document.querySelectorAll("[data-state='active']").forEach((node) => {
          node.dataset.state = "done";
        });
        const score = parseInt(gameEl.dataset.count) + 1 || 1;
        gameEl.dataset.count = score;
        if (score === cardCount / 2) {
          if (confirm("💪 Nice practicing! Play again?")) {
            return round();
          }
        }
      } else {
        gameEl.dataset.state = "frozen";
        setTimeout(() => {
          document.querySelectorAll("[data-state='active']").forEach((node) => {
            delete node.dataset.state;
          });
          gameEl.dataset.state = "ready";
        }, 2000);
      }
      delete gameEl.dataset.last;
    } else {
      gameEl.dataset.last = target.textContent;
    }
  }
});

window.addEventListener("keypress", (event) => {
  if (alphabet.slice(0, cardCount).includes(event.key)) {
    event.preventDefault();
    const card = document.querySelector(`[data-key="${event.key}"]`);
    card && card.click();
  }
});
