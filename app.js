// Random sonlar generatsiyasi
var son1 = Math.floor(Math.random() * 100) + 1;
var son2 = Math.floor(Math.random() * 100) + 1;

// Sonlarni 2 ga ko'paytirish
var natija1 = son1 * 2;
var natija2 = son2 * 2;

// Natijalarni alert orqali chiqarish
alert(
  "Birinchi son: " +
    son1 +
    "\nIkkinchi son: " +
    son2 +
    "\n\nBirinchi sonning 2 ga ko'paytirilgan natijasi: " +
    natija1 +
    "\nIkkinchi sonning 2 ga ko'paytirilgan natijasi: " +
    natija2
);
