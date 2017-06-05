var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(acc, travel){
    return acc + travel.distance;
}, 0);


var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(acc, desk) {
    acc[desk.type]++;
    return acc;
}, { sitting: 0, standing: 0 });


function unique(array) {
    let seen = {};

    return array.reduce(function(previous, currentNum) {
      if (previous.find(function(number) {
          return number === currentNum;
      })) {
          return previous
      } else {
          previous.push(currentNum);
          return previous
      }
    }, []);
}
