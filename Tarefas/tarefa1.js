// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto parafevereiro) e false caso contrário.

export function ehDataValida(dia, mes, ano) {
  
if (typeof dia !== 'number' || typeof mes !== 'number' || typeof ano !== 'number' ||
      !Number.isInteger(dia) || !Number.isInteger(mes) || !Number.isInteger(ano) ||
      mes < 1 || mes > 12 || dia < 1 || ano <= 0) {
    return false;
  }

    const diasPorMes = [
      0,
      31, 
      28, 
      31,
      30,
      31, 
      30, 
      31, 
      31, 
      30, 
      31, 
      30,
      31  
    ];

    const Bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);

    if (Bissexto) {
      diasPorMes[2] = 29;
    }

    if (dia > diasPorMes[mes]) {
      return false;
    }

    return true
}

