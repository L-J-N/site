const oneDay = 24 * 60 * 60 * 1000;

export default function calculRemainingDay(date, delaiRecolte) {
  if (!date) {
    return 0;
  }

  return delaiRecolte - 10;

  //TODO gérer le format de la date envoyée par le JSON
  // const today = new Date();
  // today.setHours(0, 0, 0, 0);
  // alert(date);
  // const _date = date.split('-');
  // const secondDate = new Date(_date[0], _date[1] - 1, _date[2]);
  //
  // const diff = (secondDate.getTime() - today.getTime());
  //
  // if (Math.abs(diff) < oneDay) {
  //   return 1;
  // } else if (diff < 0) {
  //   return 0;
  // }
  //
  // return (delairecolte - math.ceil(diff / oneday));
}
