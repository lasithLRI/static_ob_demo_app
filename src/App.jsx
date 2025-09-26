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
import {ConfigProvider} from "./context/ConfigContext.jsx";
import OxygenThemeProvider from "./OxygenThemeProvider.jsx";
import Home from "./TppApplication/HomePage/Home.jsx";
import AccountsCentral from "./lauyouts/AccountsCentral.jsx";

/**
 * The main application component that sets up the core routing and
 * provides necessary contexts for the 'Accounts Central' product section.
 * It defines a base layout with a header and a content area, and uses
 * nested routes to render specific product pages like 'Home'.
 */
function App() {

    return (
        <>
            <Routes>
                <Route path="/accounts-central/*" element={
                    <ConfigProvider>
                        <OxygenThemeProvider>
                            <AccountsCentral>
                                <Routes>
                                    <Route path="/home" element={<Home/>}/>
                                </Routes>
                            </AccountsCentral>
                        </OxygenThemeProvider>
                    </ConfigProvider>
                }/>
            </Routes>
        </>
    )
}

export default App

