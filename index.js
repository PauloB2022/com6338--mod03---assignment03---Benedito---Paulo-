// Your code here


        var questionsArr = [
            {
                question: 'The capital of Bolivia is La Paz',
                answer: true
              },

            {
                question: 'The capital of Brazil is Sao Paulo',
                answer: false
              },
              
            {
                question: 'The capital of Japan is Tokyo',
                answer: true
              },
              
            {
                question: 'The capital of United Stated is New York',
                answer: false 
              },
              
            { 
                question: 'capital of Portugal is Lisbon',
                answer: true
                
              },   
              
        ]


        function runQuiz () {
            var score = 0
        
            for (var i = 0; i < questionsArr.length; i++){
              var playerAnswer = confirm(questionsArr[i].question)

              if(playerAnswer === questionsArr[i].answer){
                score++
              }
            }

              var finalScore = Math.round(score / questionsArr.length * 100)

              alert('Your Scroe Was' + finalScore + '%')
             
        }


//Assignment #3 

