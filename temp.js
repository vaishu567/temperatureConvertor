const cel=document.getElementById('Celsius')
const fel=document.getElementById('Fahrenheit')
const kel=document.getElementById('Kelvin')







function computeTemp(event){
    const currentValue= +event.target.value

    switch (event.target.name) {
        case "Celsius":
            kel.value=(currentValue+273.32).toFixed(2)
            fel.value=(currentValue*1.8+32).toFixed(2)
            break;
        case "Fahrenheit":
            cel.value=((currentValue-32)/1.8).toFixed(2)
            kel.value=((currentValue-32)/1.8+273.32).toFixed(2)
            break;

        case "Kelvin":
            cel.value=(currentValue-273.32).toFixed(2)
            fel.value=((currentValue-273.32)*1.8+32).toFixed(2)
            break;

    
        default:
            break;
    }

    console.log(event.target.value)
}