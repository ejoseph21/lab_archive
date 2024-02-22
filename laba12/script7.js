//7
document.getElementById('buttonresult').addEventListener('click', function() {
    let results = document.getElementById('results');
    results.innerHTML = '';
  
    let q1Answer = document.querySelector('input[name="q1"]:checked').value;
    let q2Answers = Array.from(document.querySelectorAll('input[name="q2"]:checked')).map(input => input.value);
    let q3Answer = document.getElementById('q3').value;
  
    let incorrectAnswers = [];
  
    if (q1Answer !== 'a2') {
      incorrectAnswers.push('Ответ на вопрос 1 неверный');
    }
  
    if (!q2Answers.includes('a1') || !q2Answers.includes('a3')) {
      incorrectAnswers.push('Ответ на вопрос 2 неверный');
    }
  
    if (q3Answer.toLowerCase() !== 'дюймовочка') {
      incorrectAnswers.push('Ответ на вопрос 3 неверный');
    }
  
    if (incorrectAnswers.length === 0) {
      results.innerHTML = 'Вы превосходно знаете русские сказки!';
    } else {
      results.innerHTML = 'К сожалению, вы ответили неверно на следующие вопросы:<br>' + incorrectAnswers.join('<br>');
    }
  });