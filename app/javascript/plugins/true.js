  const true_click = () => {

    const display_slide_four = () => {
      const slide_three = document.querySelector('#slidethree');
      const slide_four = document.querySelector('#slidefour');
      slide_three.classList.add("display-none");
      slide_four.classList.remove("display-none");
      };

    const true_btn = document.querySelector('#true-btn');
    true_btn.addEventListener('click', display_slide_four, false);
  };


export { true_click };
