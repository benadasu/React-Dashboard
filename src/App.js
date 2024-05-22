import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./pages/global/Topbar";
import SideBar from "./pages/global/sidebars/Sidebar";
import Dashboard from "./pages/dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Header from "./components/Header";
import Barchartpage from "./pages/Barchart";
import Piechartpage from "./pages/piechart";
import Linechartpage from "./pages/linechart";
import Tablepage from "./pages/Table";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar isSidebar={isSidebar} /> 
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} /> 
            <Header/>
            <Routes>
              <Route path="/" element={<Dashboard />} />  
              <Route path="/table" element={<Tablepage />} /> 
              <Route path="/barchart" element={<Barchartpage />} /> 
              <Route path="/piechart" element={<Piechartpage />} />
              <Route path="/linechart" element={<Linechartpage />} />              
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
