/*
- При завантаженні сторінки показати користувачеві поле введення (`input`) з написом `Price`. Це поле буде служити для введення числових значень
- Поведінка поля має бути такою:
- При фокусі на полі введення – у нього має з'явитися рамка зеленого кольору. При втраті фокусу вона пропадає.
- Коли вибрано фокус з поля - його значення зчитується, над полем створюється `span`, в якому має бути виведений текст: 
`Поточна ціна: ${значення з поля введення}`. 
Поруч із ним має бути кнопка з хрестиком (`X`). Значення всередині поля введення фарбується зеленим.
- При натисканні на `Х` - `span` з текстом та кнопка `X` повинні бути видалені.
- Якщо користувач ввів число менше 0 - при втраті фокусу підсвічувати поле введення червоною рамкою, 
під полем виводити фразу - `Please enter correct price`. `span` зі значенням при цьому не створюється.
*/

window.addEventListener("DOMContentLoaded", () => {
    const input = document.createElement("input"),
    span = document.createElement("span"),
    x = document.createElement("button");

    input.placeholder = "Price";
    input.className = "num";
    input.type = "number";
    x.innerText = "X";

    //input.setAttribute("type", "number");
    input.addEventListener("focus", (e) => {
        input.classList.add("border-focus");
        input.before(span);
        span.after(x);
    });

    x.addEventListener("click", () => {
        x.remove();
        span.remove();
        input.value = ""
    });

    input.addEventListener("input", (e) => {
        span.innerText = `Поточна ціна: ${e.target.value}`
    });
    
    input.addEventListener("blur", () => {
        input.classList.remove("border-focus");
        if(input.value < 0){
            input.classList.add("error");
            input.after("Please enter correct price")
        }
    })

    document.body.prepend(input);

})