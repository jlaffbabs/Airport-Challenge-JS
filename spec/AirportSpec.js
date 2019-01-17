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

    it("should contain the plane after landing", function() {
      airport.land(plane);
      expect(airport.hangar).toContain(plane);
    });
  });
});
