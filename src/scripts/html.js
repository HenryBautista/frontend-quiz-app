$(document).ready(function () {

    // Fill Data to list
    const dataPath = '/src/data/html-questions.json'
    $.getJSON(dataPath, function (data) {
        const { options } = data
        const list = $('#list-html')

        for (let index = 0; index < options.length; index++) {
            const listElement = `<li class="icon-question-button">
                                <span>${options[index].option}</span>
                                ${options[index].text}
                            </li>`
            list.append(listElement);
        }
    });

});