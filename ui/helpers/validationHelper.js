const validateLength = (input) => {
  if (input.length === 0) {
    return {
      valid: false,
      message: 'Input must not be empty.'
    };
  } else if (input.length > 255) {
    return {
      valid: false,
      message: 'Input must not exceed 255 characters.'
    };
  }
  return {
    valid: true,
    message: null
  }
};

module.exports = {
  validateLength
};
