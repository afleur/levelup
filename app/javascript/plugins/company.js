  const company_qst = () => {

    const yes_answer = () => {
      const yes_answer = document.querySelector('#yes-answer');
      const no_company = document.querySelector('#no-company');
      const no_button = document.querySelector('#no-button');
      yes_answer.classList.remove("display-none");
      no_company.classList.remove("display-none");
      no_button.classList.add("display-none");
      };

    const yes_button = document.querySelector('#yes-button');
    yes_button.addEventListener('click', yes_answer, false);

    const no_answer = () => {
      const no_answer = document.querySelector('#no-answer');
      const no_company = document.querySelector('#no-company');
      no_answer.classList.remove("display-none");
      no_company.classList.remove("display-none");
      yes_button.classList.add("display-none");
      };

    const no_button = document.querySelector('#no-button');
    no_button.addEventListener('click', no_answer, false);

  };


export { company_qst };
