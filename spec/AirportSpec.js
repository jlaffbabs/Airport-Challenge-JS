describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  describe('#hangar', function() {
    it("should start empty", function() {
      expect(airport.hangar).toEqual([]);
    });
  });

  describe('#land', function() {
    it("should contain the plane after landing", function() {
      airport.land(plane);
      expect(airport.hangar).toContain(plane);
    });
  });
  
  describe('#takeoff', function() {
    it("should remove plane upon takeoff", function() {
      airport.land(plane);
      airport.takeoff();
      expect(airport.hangar).toEqual([]);
    });
  });
});
