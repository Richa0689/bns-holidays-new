import { useEffect, useState } from "react";
import "./SearchProgress.css";

export default function SearchProgress({ type }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 99) {
          clearInterval(timer);
          return 99;
        }
        const inc = p < 30 ? 6 : p < 70 ? 3 : p < 90 ? 1 : 0.5;
        return Math.min(99, p + inc);
      });
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="tui-search-progress-wrapper">
      <div className="tui-search-progress-box">
        <div className="tui-sp-icon">
          {type === 'hotel' ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/><path d="M9 7h6"/><path d="M9 11h6"/><path d="M9 15h6"/></svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/><path d="m2 22 20-20"/><path d="M12 2v4"/><path d="M22 12h-4"/></svg>
          )}
        </div>
        <h2 className="tui-sp-title">
          Searching for the best {type === 'hotel' ? 'hotels' : 'flights'}...
        </h2>
        <p className="tui-sp-subtitle">Comparing hundreds of options in real-time</p>
        
        <div className="tui-sp-bar-container">
          <div className="tui-sp-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>
        
        <div className="tui-sp-count">{Math.floor(progress)}%</div>
      </div>
    </div>
  );
}
