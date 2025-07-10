function convertTemperature()
{
    const in_Temp = parseFloat(document.getElementById("in_Temp").value);
    const from_unit = document.getElementById("from_unit").value;
    const to_unit = document.getElementById("to_unit").value;
     if(isNaN(in_Temp))
     {
        document.getElementById("result").textContent= 'Invalid input. Please enter a valid number';
        return;
     }

     let celsius;
     switch(from_unit)
     {
        case 'celsius':
            celsius = in_Temp;
            break;
         case 'fahrenheit':
            celsius = (in_Temp - 32) * 5/9;
            break;   
            case 'kelvin':
            celsius = in_Temp - 273.15;
            break;
     }

     let result;
     switch(to_unit)
     {
        case 'celsius':
            result = celsius;
            break;
            case 'fahrenheit':
            result = (celsius * 9/5) + 32;
            break;
            case 'kelvin':
            result = celsius + 273.15;
            break;
     }

     document.getElementById("result").textContent =  `${in_Temp}° ${from_unit.charAt(0).toUpperCase()} = ${result.toFixed(2)}° ${to_unit.charAt(0).toUpperCase()}`;

}