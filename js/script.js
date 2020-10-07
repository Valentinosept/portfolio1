const txtElement = ['UI/UX Designer', 'Graphic Designer', 'Web Developer'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function texting(){

    if(count == txtElement.length){
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.texting-effect').textContent = words;

    if(words.length == currentTxt.length){
        count++;
        txtIndex = 0;
    }

    setTimeout(texting, 300);

})();