new Glide(".images", {
  type: "carousel",
  perView: 3,
  focusAt: "center",
  gap: 40,
  breakpoints: {
    800: {
      pewView: 2,
    },
  },
}).mount();
