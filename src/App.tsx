// import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import Homepage from "./pages/Homepage";
// import DetailSurahPage from "./pages/DetailSurahPage";
// import { ThemeProvider } from "./context/ThemeContext";
// import ThemeToggle from "./components/ThemeToggle";

// function App() {
//   return (
//     <ThemeProvider>
//       <div className="relative min-h-screen">
//         <div className="fixed top-4 right-4 z-10">
//           <ThemeToggle />
//         </div>
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/surah/:surahId" element={<DetailSurahPage />} />
//         </Routes>
//          {/* Footer */}
//        <Footer />
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import DetailSurahPage from "./pages/DetailSurahPage";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Foter"; 

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen flex flex-col">
        {/* Tombol tema */}
        <div className="fixed top-4 right-4 z-10">
          <ThemeToggle />
        </div>

        {/* Konten utama */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/surah/:surahId" element={<DetailSurahPage />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
