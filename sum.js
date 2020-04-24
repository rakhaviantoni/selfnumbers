module.exports = sum = (biggerThan, smallerThan) => {
  let notSelfNum = [];
  let all = [];

  for (let i = biggerThan; i <= smallerThan; i++) {
    let j = i;
    j = j.toString();
    all.push(i);
    numberLength = i.toString().length;
    if (numberLength == 1) {
      sum = i + parseInt(j[0]);
      notSelfNum.push(sum);
    } else if (numberLength == 2) {
      sum = i + parseInt(j[0]) + parseInt(j[1]);
      notSelfNum.push(sum);
    } else if (numberLength == 3) {
      sum = i + parseInt(j[0]) + parseInt(j[1]) + parseInt(j[2]);
      notSelfNum.push(sum);
    } else if (numberLength == 4) {
      sum = i + parseInt(j[0]) + parseInt(j[1]) + parseInt(j[2]) + parseInt(j[3]);
      notSelfNum.push(sum);
    }
  }

  let selfNum = all.filter(x => !notSelfNum.includes(x));
  // console.table(selfNum)

  let totalSelfNum = 0
  selfNum.forEach(num => {
    totalSelfNum += num;
  })
  console.log(`The sum of ${selfNum.length.toLocaleString()} self-numbers which are bigger than ${biggerThan} and smaller than ${smallerThan} is ${totalSelfNum.toLocaleString()}`)
};