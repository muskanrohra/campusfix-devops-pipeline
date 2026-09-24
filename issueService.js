function validateIssueData(title, description, category) {

  if (!title || title.trim().length === 0) {
    throw new Error("Issue title is required");
  }

  if (!description || description.trim().length < 10) {
    throw new Error("Description must be at least 10 characters");
  }

  const validCategories = [
    "Electrical",
    "Plumbing",
    "Furniture",
    "IT",
    "Housekeeping"
  ];

  if (!validCategories.includes(category)) {
    throw new Error("Invalid issue category");
  }

  return true;
}

function assignIssue(issue, staffId) {

  if (!staffId) {
    throw new Error("Staff ID is required to assign an issue");
  }

  return {
    ...issue,
    assignedTo: staffId,
    status: "Assigned"
  };
}

function updateIssueStatus(issue, newStatus) {

  const allowedStatuses = [
    "Reported",
    "Assigned",
    "In Progress",
    "Resolved",
    "Closed",
    "Reopened"
  ];

  if (!allowedStatuses.includes(newStatus)) {
    throw new Error("Invalid status update");
  }

  return {
    ...issue,
    status: newStatus
  };
}

module.exports = {
  validateIssueData,
  assignIssue,
  updateIssueStatus
};


if (require.main === module) {

  const newIssue = {
    id: 101,
    title: "Broken chair in Room 204",
    description: "The chair near the window is broken and unsafe to use.",
    category: "Furniture",
    status: "Reported",
  };

  console.log(
    "CAMPUSFIX - SMART CAMPUS ISSUE MANAGEMENT SYSTEM"
  );

  console.log("Issue Title:", newIssue.title);

  if (
    validateIssueData(
      newIssue.title,
      newIssue.description,
      newIssue.category
    )
  ) {

    const assigned = assignIssue(newIssue, "STAFF-07");

    console.log("Assigned To:", assigned.assignedTo);

    const resolved = updateIssueStatus(
      assigned,
      "Resolved"
    );

    console.log("Final Status:", resolved.status);
  }
}
