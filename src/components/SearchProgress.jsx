import { useEffect, useState } from "react";
import "./SearchProgress.css";

export default function SearchProgress({ type }) {
  const [count, setCount] = useState(1);

  useEffect(() => {
    // Count 1→100 naturally:
    // 1-50: every 60ms  (~3s)
    // 51-80: every 100ms (~3s)
    // 81-99: every 200ms (~3.8s)  — slows near the end to feel like real searching
    let current = 1;

    const tick = () => {
      current += 1;
      if (current > 99) {
        setCount(99);
        return;
      }
      setCount(current);
      const delay = current <= 50 ? 60 : current <= 80 ? 100 : 200;
      setTimeout(tick, delay);
    };

    const first = setTimeout(tick, 60);
    return () => clearTimeout(first);
  }, []);

  const isHotel = type === "hotel";
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (count / 100) * circumference;

  return (
    <div className="tui-search-progress-wrapper">
      <div className="tui-search-progress-box">

        {/* Circular progress ring */}
        <div className="tui-sp-ring-wrap">
          <svg className="tui-sp-ring" viewBox="0 0 120 120">
            <defs>
              <linearGradient id="sp-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1a66ad" />
                <stop offset="100%" stopColor="#0093e9" />
              </linearGradient>
            </defs>
            <circle cx="60" cy="60" r={radius} className="tui-sp-ring-bg" />
            <circle
              cx="60" cy="60" r={radius}
              className="tui-sp-ring-fill"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
            />
          </svg>
          <div className="tui-sp-ring-inner">
            <div className="tui-sp-ring-num">{count}</div>
            <div className="tui-sp-ring-label">/ 100</div>
          </div>
        </div>

        <h2 className="tui-sp-title">
          {isHotel ? "Searching for the best hotels..." : "Searching for the best flights..."}
        </h2>
        <p className="tui-sp-subtitle">
          Comparing hundreds of options in real-time
        </p>

        {/* Linear bar below */}
        <div className="tui-sp-bar-container">
          <div className="tui-sp-bar-fill" style={{ width: count + "%" }}></div>
        </div>
      </div>
    </div>
  );
}
