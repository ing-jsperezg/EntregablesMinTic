do{ 
    let num1 = prompt('1. Ingrese un número: ')
    let num2 = prompt('2. Ingrese otro número: ')

    let operacion = prompt('3. Ingrese una operación escriba (<< suma >>, << resta >>, << multiplicacion >>, << division >>):')
    
    if((!isNaN(num1) && num1!=null && num1!="") && (!isNaN(num2) && num2!=null && num2!="")){
        
        const resultado = calculoOperaciones(num1, num2, operacion)
        console.log('Resultado de la operacion es :', resultado)
    }
    else{
        console.log('Usted ha ingresado valores no numericos cuando se le solicito!')
    }

    let snSalir = prompt('Si desea salir escriba << salir >>, sino cualquier tecla para continuar ')
    if (snSalir === 'salir'){
        console.log('Gracias por utilizar nuestra calculadora básica!!')
        break;
    }

}while(true)

function calculoOperaciones(n1, n2, oper){
    if(oper === "suma"){
        return  n1 + n2;
    }else if(oper === "resta"){
        return  n1 - n2;
    }else if(oper === "multiplicacion"){
        return  n1 * n2;
    }else if(oper === "division"){
        if (!Number.isFinite(n1 / n2)){
            return "Error: No se puede divir entre 0."
        }else{
            return  n1/n2;
        }  
    }else{
        return "Error: Operación no existe."
    }
}
   