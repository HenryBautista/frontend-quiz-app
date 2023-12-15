$(document).ready(async function () {
    const hideElement = (element) => element.addClass('hidden')
    const unhideElement = (element) => element.removeClass('hidden')
    const checkQuestionList = () => {
        $('.icon-question-button').each(function () {
            const currentOption = $(this)
            const value = currentOption.data('value')
            if (value) {
                currentOption.removeClass('selected')
                currentOption.addClass('correct')
            }
        }); 
    }
    const fillQuestion = (quiz, count) => {
        const { options, question } = quiz[count]
        const list = $('#list-html')
        $('#subtitle').text(question)
        options.map(option => {
            const listElement = `<li
                                    class="icon-question-button"
                                    data-value="${option.correct}">
                                    <span>${option.option}</span>
                                    ${option.text}
                                </li>`
            list.append(listElement);
        })
    }
    const finishQuiz = () => {
        alert('finish')
        const viewsPath = 'src/views'
        const pagePath = 'home'
        $('#content').load(`${viewsPath}/${pagePath}.html`)
    }

    const dataPath = '/src/data/html-questions.json'
    const response = await fetch(dataPath)
    const data = await response.json()
    const { quiz } = data
    let currentQuestionCount = 0

    fillQuestion(quiz, currentQuestionCount)
    
    $('#list-html').on('click','.icon-question-button', function() {
        $('.icon-question-button').removeClass('selected')
        $(this).addClass('selected')
    });

    $('#button-submit').click(function () { 
        const selected = $('.icon-question-button.selected')

        if (selected.length === 0) {
            return;
        }

        const response = selected.data('value')
        
        if (!response) {
            selected.removeClass('selected')
            selected.addClass('incorrect')    
        }

        checkQuestionList()
        hideElement($(this))
        unhideElement($('#button-next'))
    });

    $('#button-next').click(() => {
        $('#list-html').empty()
        hideElement($('#button-next'))
        unhideElement($('#button-submit'))
        currentQuestionCount++
        
        if (currentQuestionCount < quiz.length) {
            fillQuestion(quiz, currentQuestionCount)
        }
        else {
            finishQuiz()
        }
        
    })
});