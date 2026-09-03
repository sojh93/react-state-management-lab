import {
    Navigate,
    NavLink,
    Route,
    Routes,
} from "react-router";

import UseStateTodoPage from "../features/use-state/UseStateTodoPage";
import ZustandTodoPage from "../features/zustand/ZustandTodoPage";
import ReduxTodoPage from "../features/redux/ReduxTodoPage";
import JotaiTodoPage from "../features/jotai/JotaiTodoPage";
import PlaceHolderPage from "../pages/PlaceHolderPage";

function App() {
    return (
        <div className="app">
            <header className="app">
                <div>
                    <h1>React State Management Lab</h1>

                    <p>
                        같은 Todo를 여러 상태관리 방식으로 구현해봅니다.
                    </p>
                </div>
            </header>

            <nav className="navigation">
                <NavLink to="/use-state">
                    useState
                </NavLink>
                <NavLink to="/zustand">
                    Zustand
                </NavLink>
                <NavLink to="/redux">
                    Redux
                </NavLink>
                <NavLink to="/jotai">
                    Jotai
                </NavLink>
                <NavLink to="/tanstack-query">
                    TanStack Query
                </NavLink>
            </nav>

            <main className="main">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Navigate
                                to="/use-state"
                                replace
                            />
                        }
                    />
                    <Route
                        path="/use-state"
                        element={<UseStateTodoPage />}
                    />
                    <Route 
                        path="/zustand"
                        element={<ZustandTodoPage />}
                    />
                    <Route 
                        path="/redux"
                        element={<ReduxTodoPage/>}
                    />

                    <Route
                        path="/jotai"
                        element={<JotaiTodoPage/>}
                    />

                    <Route
                        path="/tanstack-query"
                        element={
                            <PlaceHolderPage title="TanStack Query Todo" />
                        }
                    />
                </Routes>
            </main>
        </div>
    );
}

export default App;