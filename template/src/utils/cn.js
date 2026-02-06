/**
 * Utility function to combine class names conditionally
 * @param {...(string|undefined|null|false)} classes - Class names to combine
 * @returns {string} Combined class string
 */
export function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}
