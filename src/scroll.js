let setupScroll = () => {
  const connect = [...document.querySelectorAll(".movie_container")];
  const nextBtn = [...document.querySelectorAll(".next_btn")];
  const preBtn = [...document.querySelectorAll(".pre_btn")];

  connect.forEach((item, i) => {
    let connectMesures = item.getBoundingClientRect();
    let connectWidth = connectMesures.width;

    nextBtn[i].addEventListener("click", () => {
      item.scrollLeft += connectWidth;
    });

    preBtn[i].addEventListener("click", () => {
      item.scrollLeft -= connectWidth;
    });
  });
};
