var User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCourseCount = function () {
    console.log(`Course count is: ${this.courseCount}`);
  };
};

var nivesh = new User("Nivesh", 1);
// nivesh.getCourseCount();
console.log(nivesh);



var ash = new User("Ashwin", 4);
ash.getCourseCount();
// ash.getFirstname();