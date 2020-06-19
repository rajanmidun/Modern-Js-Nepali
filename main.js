//-----------------REST PARAMETER--------------------

function sum(...datas) {
  console.log(datas);
  let total = 0;
  for (let i = 0; i < datas.length; i++) {
    total += datas[i];
  }
  console.log(`SUm is ${total}`);
}

sum(12, 13, 21323, 23, 23, 23, 23);
