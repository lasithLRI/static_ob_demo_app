/**
 * Copyright (c) 2025, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const baseUrl = "/static_ob_demo_app/configurations"

/**
 * A centralized utility function to handle API calls to a base configuration endpoint.
 * It standardizes request headers (JSON content type) and includes robust error handling.
 *
 * @param {string} endpoint - The specific API path to append to the base URL (/configurations).
 * @param {object} [options={}] - Standard fetch API options to customize the request (method, body, custom headers, etc.).
 * @returns {Promise<object|null>} The parsed JSON response data, or null for 204 No Content responses.
 * @throws {Error} Throws an error object containing status and response data if the request fails (HTTP status !response.ok).
 */
async function fetchData(endpoint, options = {}) {

    const url = `${baseUrl}/${endpoint}`;

    const defaultHeaders = {
        'Content-Type': 'application/json',
    }

    const config = {
        ...options, headers: {
            ...defaultHeaders, ...options.headers,
        },
    };

    let response;
    let responseData = null;

    try {
        response = await fetch(url, config);

        // if (!response.ok) {
        //     const errorData = await response.json().catch(() => ({message: response.statusText}));
        //     const error = new Error(errorData.message || `HTTP error! Status: ${response.status}`);
        //     error.status = response.status;
        //     error.data = errorData;
        // }

        if (response.status !== 204 && response.headers.get('content-length') !== '0') {
            // Read the response body as JSON. Use .catch() to handle cases
            // where the body is empty or not valid JSON (e.g., a simple text error).
            responseData = await response.json().catch((e) => {
                console.warn(`Could not parse JSON for ${endpoint}. Status: ${response.status}. Error:`, e);
                // Return a simple object or null if parsing fails
                return {message: response.statusText || "Empty or invalid response body"};
            });
        }
            if (!response.ok) {
                // Use the parsed responseData for the error object
                const errorData = responseData || { message: response.statusText || `HTTP error! Status: ${response.status}` };

                const error = new Error(errorData.message || `HTTP error! Status: ${response.status}`);
                error.status = response.status;
                error.data = errorData;

                // Log and throw the error
                console.error(`API Error for ${endpoint}: Status ${error.status}`, error.data);
                throw error;
            }

        return  responseData;

    } catch (error){
        console.error(`API Error for ${endpoint}:`, error);
        throw error;
    }
}

/**
 * An API client object providing simplified methods for common HTTP verbs.
 * Currently, includes only the 'get' method.
 */
export const api = {
    get: (endpoint, options = {}) => fetchData(endpoint, {method: 'GET', ...options}),
}

