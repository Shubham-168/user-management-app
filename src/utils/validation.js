export function validateUserData(data) {
    const errors = {};
    if (!data.firstName) errors.firstName = "First name is required.";
    if (!data.lastName) errors.lastName = "Last name is required.";
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "Valid email is required.";
    }
    if (!data.department) errors.department = "Department is required.";
    return { errors, isValid: Object.keys(errors).length === 0 };
  }
  