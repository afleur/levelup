  const nursery_qst = () => {

    const yes_ans = () => {
      const yes_ans = document.querySelector('#yes-ans');
      const no_nursery = document.querySelector('#no-nursery');
      const no_btn = document.querySelector('#no-btn');
      const thanks = document.querySelector('#thanks');
      yes_ans.classList.remove("display-none");
      no_nursery.classList.remove("display-none");
      no_btn.classList.add("display-none");
      thanks.classList.add("display-none");
      };

    const yes_btn = document.querySelector('#yes-btn');
    yes_btn.addEventListener('click', yes_ans, false);

    const no_ans = () => {
      const no_ans = document.querySelector('#no-ans');
      const no_nursery = document.querySelector('#no-nursery');
      const thanks = document.querySelector('#thanks');
      no_ans.classList.remove("display-none");
      no_nursery.classList.remove("display-none");
      yes_btn.classList.add("display-none");
      thanks.classList.add("display-none");
      };

    const no_btn = document.querySelector('#no-btn');
    no_btn.addEventListener('click', no_ans, false);

  };


export { nursery_qst };
