  const help_click = () => {

    const display_slide_six = () => {
      const slide_five = document.querySelector('#slidefive');
      const slide_six = document.querySelector('#slidesix');
      slide_five.classList.add("display-none");
      slide_six.classList.remove("display-none");
      };

    const help_btn = document.querySelector('#help-btn');
    help_btn.addEventListener('click', display_slide_six, false);
  };


export { help_click };
