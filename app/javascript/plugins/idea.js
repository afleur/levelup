  const idea_click = () => {

    const display_slide_five = () => {
      const slide_four = document.querySelector('#slidefour');
      const slide_five = document.querySelector('#slidefive');
      slide_four.classList.add("display-none");
      slide_five.classList.remove("display-none");
      };

    const idea_btn = document.querySelector('#idea-btn');
    idea_btn.addEventListener('click', display_slide_five, false);
  };


export { idea_click };
