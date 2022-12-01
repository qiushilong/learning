void main() {
  var year = 1977;

  // if else
  if (year >= 2001) {
    print('21st century');
  } else if (year >= 1901) {
    print('20th century');
  } else {
    print('if else nothing');
  }

  // switch
  switch (year) {
    case 2001:
      print('=2001');
      break;
    case 2002:
      print('=2002');
      break;
    default:
      print('switch nothing');
  }

  year == 1997 ? print('=1998') : print('three nothing');
}
