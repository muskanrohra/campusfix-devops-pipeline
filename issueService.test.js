const {
  validateIssueData,
  assignIssue,
  updateIssueStatus
} = require("./issueService");


test("validates correct issue data", () => {

  expect(
    validateIssueData(
      "Leaking tap",
      "Water is leaking continuously from the tap.",
      "Plumbing"
    )
  ).toBe(true);

});


test("rejects issue with short description", () => {

  expect(() =>
    validateIssueData(
      "Leaking tap",
      "Leak",
      "Plumbing"
    )
  ).toThrow();

});


test("rejects invalid category", () => {

  expect(() =>
    validateIssueData(
      "Leaking tap",
      "Water is leaking continuously.",
      "Gardening"
    )
  ).toThrow();

});


test("assigns issue to staff", () => {

  const issue = {
    id: 1,
    title: "Broken fan",
    status: "Reported"
  };

  const assigned = assignIssue(
    issue,
    "STAFF-03"
  );

  expect(assigned.assignedTo).toBe("STAFF-03");

  expect(assigned.status).toBe("Assigned");

});


test("updates issue status to Resolved", () => {

  const issue = {
    id: 1,
    status: "In Progress"
  };

  const updated = updateIssueStatus(
    issue,
    "Resolved"
  );

  expect(updated.status).toBe("Resolved");

});
