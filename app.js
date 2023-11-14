
const accordionContainers = document.querySelectorAll('.accordian-container');

accordionContainers.forEach((accordion) => {
    
    const answer = accordion.querySelector('.answer');

    accordion.querySelector('header').addEventListener('click', () => {
       
        answer.classList.toggle('none');

     
        accordionContainers.forEach((otherAccordion) => {
            if (otherAccordion !== accordion) {
                otherAccordion.querySelector('.answer').classList.add('none');
            }
        });
    });
});
