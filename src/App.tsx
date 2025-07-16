import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import LLMCategoryPage from './pages/LLMCategoryPage';
import MusicCategoryPage from './pages/MusicCategoryPage';
import ArtCategoryPage from './pages/ArtCategoryPage';
import VideoCategoryPage from './pages/VideoCategoryPage';
import ResearchCategoryPage from './pages/ResearchCategoryPage';
import VoiceCategoryPage from './pages/VoiceCategoryPage';
import CodingCategoryPage from './pages/CodingCategoryPage';
import ChatGPTProjectPage from './pages/ChatGPTProjectPage';
import ClaudeProjectPage from './pages/ClaudeProjectPage';
import GeminiProjectPage from './pages/GeminiProjectPage';
import GrokProjectPage from './pages/GrokProjectPage';
import PerplexityProjectPage from './pages/PerplexityProjectPage';
import SunoProjectPage from './pages/SunoProjectPage';
import MidjourneyProjectPage from './pages/MidjourneyProjectPage';
import RunwayProjectPage from './pages/RunwayProjectPage';
import ElevenLabsProjectPage from './pages/ElevenLabsProjectPage';
import CopilotProjectPage from './pages/CopilotProjectPage';
import UdioProjectPage from './pages/UdioProjectPage';
import PikaProjectPage from './pages/PikaProjectPage';
import SoraProjectPage from './pages/SoraProjectPage';
import GeminiImageProjectPage from './pages/GeminiImageProjectPage';
import IdeogramProjectPage from './pages/IdeogramProjectPage';
import ReveProjectPage from './pages/ReveProjectPage';
import SoraVideoProjectPage from './pages/SoraVideoProjectPage';
import GoogleVeoProjectPage from './pages/GoogleVeoProjectPage';
import NotebookLMProjectPage from './pages/NotebookLMProjectPage';
import MurfProjectPage from './pages/MurfProjectPage';
import SesameProjectPage from './pages/SesameProjectPage';
import CursorProjectPage from './pages/CursorProjectPage';
import BoltProjectPage from './pages/BoltProjectPage';
import LovableProjectPage from './pages/LovableProjectPage';
import RorkProjectPage from './pages/RorkProjectPage';
import LumaProjectPage from './pages/LumaProjectPage';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/llm-category" element={<LLMCategoryPage />} />
        <Route path="/music-category" element={<MusicCategoryPage />} />
        <Route path="/art-category" element={<ArtCategoryPage />} />
        <Route path="/video-category" element={<VideoCategoryPage />} />
        <Route path="/research-category" element={<ResearchCategoryPage />} />
        <Route path="/voice-category" element={<VoiceCategoryPage />} />
        <Route path="/coding-category" element={<CodingCategoryPage />} />
        <Route path="/chatgpt-projects" element={<ChatGPTProjectPage />} />
        <Route path="/claude-projects" element={<ClaudeProjectPage />} />
        <Route path="/gemini-projects" element={<GeminiProjectPage />} />
        <Route path="/grok-projects" element={<GrokProjectPage />} />
        <Route path="/perplexity-projects" element={<PerplexityProjectPage />} />
        <Route path="/suno-projects" element={<SunoProjectPage />} />
        <Route path="/midjourney-projects" element={<MidjourneyProjectPage />} />
        <Route path="/runway-projects" element={<RunwayProjectPage />} />
        <Route path="/elevenlabs-projects" element={<ElevenLabsProjectPage />} />
        <Route path="/copilot-projects" element={<CopilotProjectPage />} />
        <Route path="/udio-projects" element={<UdioProjectPage />} />
        <Route path="/pika-projects" element={<PikaProjectPage />} />
        <Route path="/sora-projects" element={<SoraProjectPage />} />
        <Route path="/gemini-image-projects" element={<GeminiImageProjectPage />} />
        <Route path="/ideogram-projects" element={<IdeogramProjectPage />} />
        <Route path="/reve-projects" element={<ReveProjectPage />} />
        <Route path="/sora-video-projects" element={<SoraVideoProjectPage />} />
        <Route path="/google-veo-projects" element={<GoogleVeoProjectPage />} />
        <Route path="/notebooklm-projects" element={<NotebookLMProjectPage />} />
        <Route path="/murf-projects" element={<MurfProjectPage />} />
        <Route path="/sesame-projects" element={<SesameProjectPage />} />
        <Route path="/cursor-projects" element={<CursorProjectPage />} />
        <Route path="/bolt-projects" element={<BoltProjectPage />} />
        <Route path="/lovable-projects" element={<LovableProjectPage />} />
        <Route path="/rork-projects" element={<RorkProjectPage />} />
        <Route path="/luma-projects" element={<LumaProjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;