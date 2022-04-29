import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import GlobalContextProvider from "./globals/globalContextProvider"
import { GlobalStyles, globalTheme } from "./globals/globalStyles"

import * as globalConstants from "./globals/globalConstants"

import ShowNavigationStripe from "./components/ShowNavigationStripe"
import ShowBottomStripe from "./components/ShowBottomStripe"
import Works from "./pages/works"
import About from "./pages/about"
// import Page404 from "./pages/page404"
import Home from "./pages/home"
import Video from "./pages/video"
import Contact from "./pages/contact"
import Root from "./pages/root"

function App() {
    return (
        <ThemeProvider theme={globalTheme}>
            <GlobalContextProvider>
                <GlobalStyles />
                <ShowNavigationStripe />
                <Routes>
                    <Route path="/" element={<Root />} />
                    <Route
                        path={globalConstants.threeDModelPath}
                        element={<Home />}
                    />
                    <Route
                        path={globalConstants.aboutUsPath}
                        element={<About />}
                    />
                    <Route
                        path={globalConstants.worksPath}
                        element={<Works />}
                    />
                    <Route
                        path={globalConstants.videoPath}
                        element={<Video />}
                    />
                    <Route
                        path={globalConstants.contactPath}
                        element={<Contact />}
                    />
                    {/* <Route path="*" element={<Page404 />} /> */}
                </Routes>
                <ShowBottomStripe />
            </GlobalContextProvider>
        </ThemeProvider>
    )
}

export default App
