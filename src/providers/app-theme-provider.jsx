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

import {ThemeProvider, extendTheme} from '@oxygen-ui/react';

/**
 * A root theme provider component that wraps the Oxygen UI ThemeProvider from `@oxygen-ui/react`
 * to apply a custom, statically defined theme across the application.
 *
 * It uses `extendTheme` to configure:
 * - Typography with the 'Inter' font family.
 * - Light and dark color schemes, setting specific hardcoded values for the primary color palette.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be rendered within the theme provider's scope.
 * @returns {JSX.Element} The ThemeProvider component with the defined theme applied.
 */
const AppThemeProvider = ({children}) => {

    const theme = extendTheme({
        typography: {
            fontFamily: 'Inter',
        },
        colorSchemes: {
            light: {
                palette: {
                    primary: {
                        main: '#FF5499',
                    },
                    secondary: {
                        main: '#FF7433',
                        yellow: '#EAA340',
                    },
                    fontColor: {
                        main: '#ecf0f1',
                    },
                    shadows:{
                        main: '#FF5456',
                    }
                },
            },
            dark: {
                palette: {
                    primary: {
                        main: '#FF5456',
                    },
                },
            },
        },
    });

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
