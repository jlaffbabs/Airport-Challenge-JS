class Airport {
  constructor(hangar) {
    this.hangar = [];
  };

  land(plane) {
    this.hangar.push(plane);
  };

  takeoff () {
    this.hangar.pop();
  };
};
