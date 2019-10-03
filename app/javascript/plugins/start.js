  const start_click = () => {

    const display_slide_two = () => {
      const slide_one = document.querySelector('#slideone');
      const slide_two = document.querySelector('#slidetwo');
      slide_one.classList.add("display_none");
      slide_two.classList.remove("display_none");
      };

    const start_btn = document.querySelector('#start-btn');
    start_btn.addEventListener('click', display_slide_two, false);
  };


export { start_click };
