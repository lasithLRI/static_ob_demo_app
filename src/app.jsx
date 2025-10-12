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

import {Route, Routes} from "react-router-dom";
import AppThemeProvider from "./providers/app-theme-provider.jsx";
import Home from "./pages/home-page/home.jsx";
import useConfigContext from "./hooks/use-config-context.js";

/**
 * The root component of the application, responsible for setting up the main routing structure
 * and applying global theming via the `AppThemeProvider`.
 *
 * It consumes the `ConfigContext` to dynamically construct the base route path
 * using a configured router name (e.g., `/${context.routerName.route}/*`).
 * It then defines nested routes, such as the 'home' page, within the main route.
 */
function App() {

    const context = useConfigContext();

    if (context.isLoading || !context.config) {
        return <div>Loading configuration...</div>;
    }

    return (<>
        <AppThemeProvider>
            <Routes>
                <Route path={`/${context.config.route}/*`} element={
                    <Routes>
                        <Route path="home" element={<Home configurations={context} />}/>
                    </Routes>
                }/>
            </Routes>
        </AppThemeProvider>
    </>)
}

export default App

