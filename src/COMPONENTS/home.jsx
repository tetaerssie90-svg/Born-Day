import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [celebrating, setCelebrating] = useState(false);
    const timeoutRef = useRef(null);
    const navigate = useNavigate();

    function handleCelebrate() {
        setCelebrating(true);

        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        // Let the celebration play for 1.8s, then move to the next page
        timeoutRef.current = setTimeout(() => {
            setCelebrating(false);
            navigate("/next");
        }, 1800);
    }

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    const balloons = [
        "balloon-gold balloon-1",
        "balloon-white balloon-2",
        "balloon-gold balloon-3",
        "balloon-white balloon-4",
        "balloon-gold balloon-5",
        "balloon-white balloon-6",
        "balloon-gold balloon-7",
        "balloon-white balloon-8",
        "balloon-gold balloon-9",
        "balloon-white balloon-10",
        "balloon-gold balloon-11",
        "balloon-white balloon-12",
        "balloon-gold balloon-13",
        "balloon-white balloon-14",
        "balloon-gold balloon-15",
        "balloon-white balloon-16",
    ];

    return (
        <main className={`birthday-page ${celebrating ? "is-celebrating" : ""}`}>

            {balloons.map((cls) => (
                <div key={cls} className={`balloon ${cls}`}></div>
            ))}

            <div className="confetti-container">
                {Array.from({ length: 24 }).map((_, i) => (
                    <span key={i}></span>
                ))}
            </div>

            <div className="sparkle sparkle-1">✦</div>
            <div className="sparkle sparkle-2">✧</div>
            <div className="sparkle sparkle-3">✦</div>
            <div className="sparkle sparkle-4">✧</div>

            <section className="birthday-content">
                <p className="small-heading">A SPECIAL DAY</p>

                <div className="gold-line">
                    <span></span>
                    ✦
                    <span></span>
                </div>

                <h1>Happy Birthday</h1>
                <h2>Newly Born</h2>

                <p className="birthday-message">
                    Today is a beautiful reminder of how special
                    you are. May your day be filled with happiness,
                    love, laughter, and unforgettable moments.
                </p>

                <button
                    className="celebrate-button"
                    onClick={handleCelebrate}
                    disabled={celebrating}
                >
                    {celebrating ? "Celebrating…" : "Celebrate"}
                </button>

                {celebrating && (
                    <div
                        className="celebration-message"
                        role="status"
                        aria-live="polite"
                    >
                        <span>✨</span>
                        Let the celebration begin!
                        <span>✨</span>
                    </div>
                )}
            </section>

            <div className="bottom-decoration">
                <span>✦</span>
                <span>♡</span>
                <span>✦</span>
            </div>
        </main>
    );
}

export default Home;