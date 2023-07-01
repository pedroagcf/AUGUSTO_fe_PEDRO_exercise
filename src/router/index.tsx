import {Spinner} from 'components/Spinner';
import * as React from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

const TeamsPage = React.lazy(() => import('../pages/TeamsPage'));
const TeamOverviewPage = React.lazy(() => import('../pages/TeamOverviewPage'));
const UserOverviewPage = React.lazy(() => import('../pages/UserOverviewPage'));

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <React.Suspense fallback={<Spinner />}>
                            <TeamsPage />
                        </React.Suspense>
                    }
                />
                <Route
                    path="/team/:teamId"
                    element={
                        <React.Suspense fallback={<Spinner />}>
                            <TeamOverviewPage />
                        </React.Suspense>
                    }
                />
                <Route
                    path="/user/:userId"
                    element={
                        <React.Suspense fallback={<Spinner />}>
                            <UserOverviewPage />
                        </React.Suspense>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
