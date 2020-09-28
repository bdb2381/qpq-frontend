function changeStatus(state = "pending", action) {
  switch (action.type) {
    case "PENDING":
      return (state = "Pending");
    case "APPROVED":
      return (state = "Approved");
    case "DENIED":
      return (state = "Denied");
    default:
      return state;
  }
}

export default changeStatus;
