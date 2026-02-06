/**
 * Validate an email address
 * @param {string} email - Email to validate
 * @returns {boolean} Whether the email is valid
 */
export function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate a URL
 * @param {string} url - URL to validate
 * @returns {boolean} Whether the URL is valid
 */
export function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

/**
 * Check if a string is empty or whitespace only
 * @param {string} str - String to check
 * @returns {boolean} Whether the string is empty
 */
export function isEmpty(str) {
    return !str || str.trim().length === 0;
}

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @param {Object} options - Validation options
 * @returns {Object} Validation result with isValid and errors
 */
export function validatePassword(password, options = {}) {
    const {
        minLength = 8,
        requireUppercase = true,
        requireLowercase = true,
        requireNumber = true,
        requireSpecial = false,
    } = options;

    const errors = [];

    if (password.length < minLength) {
        errors.push(`Password must be at least ${minLength} characters`);
    }
    if (requireUppercase && !/[A-Z]/.test(password)) {
        errors.push('Password must contain an uppercase letter');
    }
    if (requireLowercase && !/[a-z]/.test(password)) {
        errors.push('Password must contain a lowercase letter');
    }
    if (requireNumber && !/\d/.test(password)) {
        errors.push('Password must contain a number');
    }
    if (requireSpecial && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        errors.push('Password must contain a special character');
    }

    return {
        isValid: errors.length === 0,
        errors,
    };
}
