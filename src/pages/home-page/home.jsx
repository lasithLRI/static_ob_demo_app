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

import HeroSection from "./hero-section/hero-section.jsx";
import useAuthContext from "../../hooks/use-auth-context.js";
import ApplicationLayout from "../../layouts/application-layout/application-layout.jsx";
import HomeContentLayout from "../../layouts/home-content-layout/home-content-layout.jsx";
import InfographicsSummery from "./infographics-summery/infographics-summery.jsx";
import Subtitle from "./subtitle/subtitle.jsx";
import ConnectedBanks from "./connected-banks/connected-banks.jsx";
import ConnectedAccounts from "./connected-accounts/connected-accounts.jsx";

/*
 * Main Home component for the application dashboard.
 * Displays user information, financial summaries, and connected banks/accounts.
 *
 * Params:
 * @param {object} configurations - Contains application configuration and financial data objects.
 *
 * @returns {JSX.Element} The rendered Home page, wrapped in the standard application layout.
 */
const Home = ({configurations}) => {
    const userInfo = useAuthContext();
    const {config, chartData, total, bankInfoWithTotals, accountInfoWithBankInfo,transactions,standingOrders} = configurations;

    const onAddAccount = () => {
        console.log("adding account");
    }

    return (
        <>
            <ApplicationLayout name={config.applicationName}>
                <HeroSection userInfo={userInfo}/>
                <HomeContentLayout>
                    <InfographicsSummery total={total} chartData={chartData}/>
                    <Subtitle title={"Connected Banks"}/>
                    <ConnectedBanks banksInformationWithTotals={bankInfoWithTotals}/>
                    <Subtitle title={"Connected Accounts"} name={"Add Account"} onAction={onAddAccount}/>
                    <ConnectedAccounts accountsInfo={accountInfoWithBankInfo}/>
                    <Subtitle title={"Latest Transactions"}/>
                    <LatestTransactions transactions={transactions}/>
                    <Subtitle title={"Standing Orders"}/>
                    <StandingOrders standingOrdersData={standingOrders}/>
                </HomeContentLayout>
            </ApplicationLayout>
        </>
    )
}

export default Home;
