$(document).ready(function () {

    // Fill Data to list
    const dataPath = '/src/data/html-questions.json'
    $.getJSON(dataPath, function (data) {
        const { options } = data
        const list = $('#list-html')

        for (let index = 0; index < options.length; index++) {
            const listElement = `<li
                                    class="icon-question-button"
                                    data-value="${options[index].correct}">
                                    <span>${options[index].option}</span>
                                    ${options[index].text}
                                </li>`
            list.append(listElement);
        }
    });

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
    
});