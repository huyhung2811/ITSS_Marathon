import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';
import { publicRoutes } from './routes/routes';
import { Fragment } from 'react';
import { AuthContextProvider } from './context/AuthContext';

function App() {
    return (
        <AuthContextProvider>
            <BrowserRouter>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.element;
                        let Layout = Fragment;

                        if (route.layout) {
                            Layout = route.layout;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <GlobalStyles>
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    </GlobalStyles>
                                }
                            />
                        );
                    })}
                </Routes>
            </BrowserRouter>
        </AuthContextProvider>
    );
}

export default App;
