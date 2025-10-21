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

/*
 * Utility function to format a numeric value into a localized currency string
 * with two decimal places.
 *
 * Params:
 * @param {number} value - The numeric amount to be formatted.
 * @returns {string} The formatted currency string (e.g., '1,234.56').
 */
export const formatCurrency = (value) => {
    return value.toLocaleString('en-US',{
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
}
