  const next_click = () => {

    const display_slide_three = () => {
      const slide_two = document.querySelector('#slidetwo');
      const slide_three = document.querySelector('#slidethree');
      slide_two.classList.add("display-none");
      slide_three.classList.remove("display-none");
      };

    const next_btn = document.querySelector('#next-btn');
    next_btn.addEventListener('click', display_slide_three, false);
  };


export { next_click };
