/**
 * Example API service for making HTTP requests
 * Replace BASE_URL with your actual API endpoint
 */

const BASE_URL = import.meta.env.VITE_API_URL || 'https://api.example.com';

/**
 * Generic fetch wrapper with error handling
 * @param {string} endpoint - API endpoint
 * @param {Object} options - Fetch options
 * @returns {Promise<any>} Response data
 */
async function fetchApi(endpoint, options = {}) {
    const url = `${BASE_URL}${endpoint}`;

    const config = {
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
        ...options,
    };

    try {
        const response = await fetch(url, config);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

// Example API methods
export const api = {
    get: (endpoint) => fetchApi(endpoint, { method: 'GET' }),
    post: (endpoint, data) => fetchApi(endpoint, {
        method: 'POST',
        body: JSON.stringify(data)
    }),
    put: (endpoint, data) => fetchApi(endpoint, {
        method: 'PUT',
        body: JSON.stringify(data)
    }),
    delete: (endpoint) => fetchApi(endpoint, { method: 'DELETE' }),
};

export default api;
