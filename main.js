let questions = document.querySelectorAll('.question');

function selected(item) {
    this.clearQuestion();
    item.classList.add('active');

    let arrow = item.querySelector('.arrow');
    arrow.classList.add('rotate');

    let parent = item.parentElement;
    let answer = parent.querySelector('.answer');
    answer.classList.remove('hidden');

}

function clearQuestion() {
    for(let i = 0; i < questions.length; i++) {
        let item = questions[i];
        item.classList.remove('active');

        let arrow = item.querySelector('.arrow');
        arrow.classList.remove('rotate');

        let parent = item.parentElement;
        let answer = parent.querySelector('.answer');
        answer.classList.add('hidden');
    }
}
