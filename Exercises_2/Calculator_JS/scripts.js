let display = document.getElementById('result');

        function appendCharacter(char){

            display.value += char;

        }

        function clearDisplay(){

            display.value = '';

        }

        function backspace(){

            display.value = display.value.slice(0, -1);

        }

        function calculateResult() {

            try{

                const result = eval(display.value);

                if(isNaN(result) || !isFinite(result)){

                    display.value = "NaN";


                } else {

                    display.value = result.toFixed(2);

                }
                
            } catch {

                display.value = "NaN";
            }

        }