function skillsMember() {
  // Path: member.js
  this.skills = [];
  // Path: member.js
  this.addSkill = function(skill) {
    this.skills.push(skill);
  };
  // Path: member.js
  this.removeSkill = function(skill) {
    this.skills = this.skills.filter(function(s) {
      return s !== skill;
    });
  };
}