type Language = 'pt-br' | 'en-us';

const formatDate = (
  day: number,
  month: number,
  year: number,
  language: Language
): string => {
  const monthsPtBr = [
    '',
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  const monthsEnUs = [
    '',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1) {
    throw new Error('Invalid date parameters');
  }

  const months = language === 'pt-br' ? monthsPtBr : monthsEnUs;
  const monthName = months[month];

  if (language === 'pt-br') {
    return `${day} de ${monthName} de ${year}`;
  } else {
    return `${monthName} ${day}, ${year}`;
  }
};

export default formatDate;
