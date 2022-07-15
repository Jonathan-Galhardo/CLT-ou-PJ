function verificar(){
    var salario = window.document.getElementById('salario')
    var s1 = Number(salario.value)
    salariores.innerHTML = s1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    var vr = window.document.getElementById('vr').value
    var vr1 = vr * -1
    vr2.innerHTML = vr1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
   
    var vt = window.document.getElementById('vt').value
    var vt1 = vt * -1
    vt2.innerHTML = vt1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    
    var beneficios = window.document.getElementById('benf')
    var benf = Number(beneficios.value)
    beneficiores.innerHTML = benf.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    var inss = ''
    if(s1 <= 1212){
        var inss = -0.075
    } else if (s1 > 1212 && s1 < 2427.36){
        var inss = -0.08
    } else if (s1 < 3641.04){
        var inss = -0.095
    } else if (s1 > 7087.23){
        var inss = -0.11
    } 

    var inss1 = s1 * inss
    inssres.innerHTML = inss1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    var irpf = ''
    if(s1 <= 1903.98){
        var irpf = 0
    } else if (s1 > 1903.98 && s1 <= 2826.65){
        var irpf = -0.017
    } else if (s1 <= 3715.05){
        var irpf = -0.0345
    } else if (s1 <= 4664.68){
        var irpf = -0.05
    }else if (s1 >= 4664.69) { 
        var irpf = -0.109
    }
    
    var irpf1 = s1 * irpf
    irpfres.innerHTML = irpf1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    var dt = s1 / 12
    dt1.innerHTML = dt.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    var ferias = s1 / 12
    ferias1.innerHTML = ferias.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    var terco = ferias / 3
    terco1.innerHTML = terco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    var totalclt = s1 + vr1 + vt1 + benf + inss1 + irpf1 + dt + ferias + terco
    clttotal.innerHTML = totalclt.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    var contrato = window.document.getElementById('contrato')
    var c1 = Number(contrato.value)
    contrato1.innerHTML = c1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    var imp = window.document.getElementById('imposto')
    var imp1 = Number(imp.value)
    var imp2 = (imp1 / 100) * -c1
    imposto1.innerHTML = imp2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    var contador = window.document.getElementById('contador')
    var cont1 = Number(contador.value)
    var cont2 = cont1 * -1
    contador1.innerHTML = cont2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    var totalpj = c1 + imp2 + cont2
    pjtotal.innerHTML = totalpj.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    var resultadofinal = ''
   
    if(totalclt > totalpj) {
        resultadofinal = 'Neste cenário é mais vantajoso a modalidade CLT. É importante esclarecer que este cálculo é apenas aproximado, para um cálculo mais preciso procure um contador.'

        } else {
            resultadofinal = 'Neste cenário é mais vantajoso a modalidade PJ. É importante esclarecer que este cálculo é apenas aproximado, para um cálculo mais preciso procure um contador.'
        }
        
    fim1.innerHTML = resultadofinal

    



   
    
}

