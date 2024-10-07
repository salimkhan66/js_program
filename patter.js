
// =============================== Left Star=======================================

function leftStar() {
  for (let i = 0; i < 5; i++) {
    let ptr = "";
    for (let j = 0; j <= i; j++) {
      ptr = ptr + "* ";
    }
    console.log(ptr);
  }
}
leftStar() 


// ========================= downward Star========================

function downward() {
  for (let i = 5; i > 0; i--) {
    let ptr = "";
    for (let j = 0; j < i; j++) {
      ptr = ptr + "* ";
    }
    console.log(ptr);
  }
}
downward()

// =====================================Number Patter=============================
function numberpatter() {
  for (let i = 1; i <= 5; i++) {
    let ptr = "";
    for (let j = 1; j <= i; j++) {
      if (j % 2 == 0) {
        ptr = ptr + "0 ";
      } else {
        ptr = ptr + "1 ";
      }
    }
    console.log(ptr);
  }
}
numberpatter()
