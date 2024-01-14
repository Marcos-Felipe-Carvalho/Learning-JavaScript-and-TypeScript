let data = new Date("2023-12-25 08:12");

const formatarData = (data) =>{

    const dia = ajustarZeroEsquerda(data.getDate());
    const mes = ajustarZeroEsquerda(data.getMonth() + 1);
    const ano = data.getFullYear();
    const hora = ajustarZeroEsquerda(data.getHours());
    const minuto = ajustarZeroEsquerda(data.getMinutes());
    const segundos = ajustarZeroEsquerda(data.getSeconds());
    let diaDaSemana;

    switch(data.getDay()){
        case 0:
            diaDaSemana = "domingo"
            break;
    
        case 1:
            diaDaSemana = "segunda-feira"
            break;
    
        case 2:
            diaDaSemana = "terça-feira"
            break;
    
        case 3:
            diaDaSemana = "quarta-feira"
            break;
    
        case 4:
            diaDaSemana = "quinta-feira"
            break;
    
        case 5:
            diaDaSemana = "sexta-feira"
            break;
    
        case 6:
            diaDaSemana = "sabádo"
            break;
    
        default:
            diaDaSemana = "inválido"
            break;
    }

    return {
        dia: dia,
        mes: mes,
        ano: ano,
        hora: hora,
        minuto: minuto,
        segundos: segundos,
        dataFormatada: `${dia}/${mes}/${ano}`,
        hotaFormatada: `${hora}:${minuto}:${segundos}`,
        diaDaSemana: diaDaSemana
    }
}


const ajustarZeroEsquerda = (valor)=>{
    return valor >= 10 ? valor : `0${valor}`
}

data = formatarData(data);

console.log(data)