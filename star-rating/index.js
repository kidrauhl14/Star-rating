// do something!
export function StarRating($container) {
  const starCount = parseInt($container.dataset.maxRating, 10);
  $container.className = "star-rating-container";

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("i");
    star.className = "bx bx-star";
    star.dataset.rating = i + 1;

    star.addEventListener("mouseover", () => {
      const currentRating = parseInt(star.dataset.rating);
      [...$container.children].forEach((star, index) => {
        star.classList[index < currentRating ? "add" : "remove"]("hovered");
      });
    });

    star.addEventListener("mouseout", () => {
      [...$container.children].forEach((star) => {
        star.classList.remove("hovered");
      });
    });

    star.addEventListener("click", () => {
      const currentRating = parseInt(star.dataset.rating);
      [...$container.children].forEach((star, index) => {
        star.classList[index < currentRating ? "add" : "remove"]("selected");
      });
      $container.dispatchEvent(
        new CustomEvent("rating-change", {
          detail: currentRating,
        })
      );
    });

    $container.appendChild(star);
  }
}
