function adder (a) {
  return function (b) {
    console.log(a + b)
  }
}

var jumlahkanDengan6 = adder(6)
jumlahkanDengan6(10)
