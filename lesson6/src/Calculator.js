class Calculator{
  average1;
  average2;
  calculat(list1, list2){
    this.average1 = this.average(list1);
    this.average2 = this.average(list2);

    if(this.average1 > this.average2){
      return "Первый список имеет большее среднее значение";
    } else if(this.average1 < this.average2){
      return "Второй список имеет большее среднее значение";
    } else {
      return "Средние значения равны";
    }
  }

  average(list){
    let sum = 0;
    for(let i = 0; i < list.length; i++) {
      sum += list[i];
    }
    return sum / list.length;
  }
};

module.exports = {Calculator};