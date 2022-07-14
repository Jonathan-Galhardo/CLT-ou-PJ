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

    var inss = s1 * -0.1
    inssres.innerHTML = inss.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    var irpf = s1 * -0.115
    irpfres.innerHTML = irpf.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    var dt = s1 / 12
    dt1.innerHTML = dt.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    var ferias = s1 / 12
    ferias1.innerHTML = ferias.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    var terco = ferias / 3
    terco1.innerHTML = terco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    var totalclt = s1 + vr1 + vt1 + benf + inss + irpf + dt + ferias + terco
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
        resultadofinal = 'Neste cenário é mais vantajoso a modalidade CLT'

        } else {
            resultadofinal = 'Neste cenário é mais vantajoso a modalidade PJ'
        }
        
    fim1.innerHTML = resultadofinal

    



   
    
}

