import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';
import Resume from './Resume';
import NotFound from './NotFound';

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />   {/* 기본 진입 */}
        <Route path="/home"          element={<Home />} />   {/* 기본 진입 */}
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume"    element={<Resume />} />
        {/* <Route path="/blogs"     element={<BlogsPage     />} /> */}
        <Route path="*"          element={<NotFound />} />
    </Routes>
  );
}