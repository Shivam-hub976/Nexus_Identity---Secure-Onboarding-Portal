// Initial State Constants
export const initialFormData = {
  firstName: "",
  lastName: "",
  dob: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const initialErrors = {
  firstName: "",
  lastName: "",
  dob: "",
  email: "",
  password: "",
  confirmPassword: "",
};

// Real-time Field Validation Engine
export function validateField(name, value, currentFormData, setErrors) {
  let errorMsg = "";

  switch (name) {
    case "firstName":
      if (!value.trim()) errorMsg = "First name is required.";
      break;
    case "lastName":
      if (!value.trim()) errorMsg = "Last name is required.";
      break;
    case "dob":
      if (!value) errorMsg = "Date of birth is required.";
      break;
    case "email":
      if (!value) {
        errorMsg = "Email is required.";
      } else if (!value.includes("@") || !value.includes(".")) {
        errorMsg = "Please enter a valid email address containing an @ symbol.";
      }
      break;
    case "password":
      if (!value) {
        errorMsg = "Password is required.";
      } else if (value.length < 8) {
        errorMsg = "Password must be at least 8 characters long.";
      }
      // Re-validate Confirm Password if it has already been typed
      if (
        currentFormData.confirmPassword &&
        value !== currentFormData.confirmPassword
      ) {
        setErrors((prev) => ({
          ...prev,
          confirmPassword: "Passwords do not match.",
        }));
      } else if (
        currentFormData.confirmPassword &&
        value === currentFormData.confirmPassword
      ) {
        setErrors((prev) => ({ ...prev, confirmPassword: "" }));
      }
      break;
    case "confirmPassword":
      if (!value) {
        errorMsg = "Please confirm your password.";
      } else if (value !== currentFormData.password) {
        errorMsg = "Passwords do not match.";
      }
      break;
    default:
        break;
  }

  return errorMsg;
}

// Check if all fields in the current step are filled and error-free
export function checkStepValidity(step, formData, errors) {
  if (step === 1) {
    return (
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.dob !== "" &&
      !errors.firstName &&
      !errors.lastName &&
      !errors.dob
    );
  }

  if (step === 2) {
    return (
      formData.email.includes("@") &&
      formData.email.includes(".") &&
      formData.password.length >= 8 &&
      formData.confirmPassword === formData.password &&
      !errors.email &&
      !errors.password &&
      !errors.confirmPassword
    );
  }

  return true;
}