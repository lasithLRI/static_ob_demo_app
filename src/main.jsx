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

import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './app.jsx'
import {BrowserRouter} from "react-router-dom";
import {ConfigProvider} from "./providers/config-context.jsx";

/**
 * The entry point of the React application.
 * It creates a new React root for the DOM element with the ID 'root',
 * and renders the main App component wrapped in StrictMode and BrowserRouter
 * for development checks and client-side routing.
 */
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <ConfigProvider>
            <App/>
            </ConfigProvider>
        </BrowserRouter>
    </StrictMode>,
)

