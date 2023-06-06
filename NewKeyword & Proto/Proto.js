var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
      console.log(`Course count is: ${this.courseCount}`);
    };
  };

  User.prototype.getfirstName = function() {
    console.log(`My FirstName is: ${this.firstName}`);
  }
  
  var nivesh = new User("Nivesh", 1);
  nivesh.getCourseCount();
  nivesh.getfirstName();
//   console.log(nivesh);
  
  
  
  var ash = new User("Ashwin", 4);
  ash.getCourseCount();
  ash.getfirstName();
  // ash.getFirstname();