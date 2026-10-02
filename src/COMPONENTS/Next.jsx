import { useState } from "react";

function Next() {
    const [opened, setOpened] = useState(false);

    function handleOpen() {
        // Let the happy-hop play before showing the letter
        setOpened(true);
    }

    return (
        <main className="next-page">

            <div className="next-glow"></div>

            {/* Scene: bear + butterfly + hearts — hidden once letter opens */}
            {!opened && (
                <section className="critter-scene">

                    {/* Floating hearts */}
                    <div className="hearts-layer">
                        <span className="heart heart-1">♥</span>
                        <span className="heart heart-2">♥</span>
                        <span className="heart heart-3">♥</span>
                        <span className="heart heart-4">♥</span>
                        <span className="heart heart-5">♥</span>
                    </div>

                    {/* Butterfly */}
                    <div className="butterfly" aria-hidden="true">
                        <svg viewBox="0 0 100 80" width="70" height="56">
                            <g className="bfly-wing bfly-wing-left">
                                <ellipse cx="28" cy="30" rx="24" ry="26"
                                    fill="#f1d98a" stroke="#c49727" strokeWidth="1.5" />
                                <ellipse cx="28" cy="55" rx="16" ry="16"
                                    fill="#d4af37" stroke="#c49727" strokeWidth="1.2" />
                            </g>
                            <g className="bfly-wing bfly-wing-right">
                                <ellipse cx="72" cy="30" rx="24" ry="26"
                                    fill="#f1d98a" stroke="#c49727" strokeWidth="1.5" />
                                <ellipse cx="72" cy="55" rx="16" ry="16"
                                    fill="#d4af37" stroke="#c49727" strokeWidth="1.2" />
                            </g>
                            <ellipse cx="50" cy="42" rx="3" ry="20" fill="#7a5a1c" />
                            <circle cx="50" cy="24" r="5" fill="#7a5a1c" />
                        </svg>
                    </div>

                    {/* Teddy bear */}
                    <div className="teddy" aria-hidden="true">
                        <svg viewBox="0 0 220 240" width="220" height="240">
                            {/* Ears */}
                            <circle cx="60" cy="55" r="26" fill="#c79b27" />
                            <circle cx="60" cy="55" r="14" fill="#f1d98a" />
                            <circle cx="160" cy="55" r="26" fill="#c79b27" />
                            <circle cx="160" cy="55" r="14" fill="#f1d98a" />

                            {/* Head */}
                            <ellipse cx="110" cy="95" rx="72" ry="66" fill="#e0b840" />

                            {/* Muzzle */}
                            <ellipse cx="110" cy="118" rx="34" ry="26" fill="#f6e2a8" />

                            {/* Eyes */}
                            <circle cx="84" cy="88" r="7" fill="#3f3424" />
                            <circle cx="136" cy="88" r="7" fill="#3f3424" />
                            <circle cx="86" cy="85" r="2.4" fill="#fff" />
                            <circle cx="138" cy="85" r="2.4" fill="#fff" />

                            {/* Nose + mouth */}
                            <ellipse cx="110" cy="112" rx="8" ry="6" fill="#5c3d1a" />
                            <path d="M110 118 Q98 128 90 122"
                                stroke="#5c3d1a" strokeWidth="2"
                                fill="none" strokeLinecap="round" />
                            <path d="M110 118 Q122 128 130 122"
                                stroke="#5c3d1a" strokeWidth="2"
                                fill="none" strokeLinecap="round" />

                            {/* Cheeks */}
                            <circle cx="68" cy="112" r="9" fill="#e88a8a" opacity="0.55" />
                            <circle cx="152" cy="112" r="9" fill="#e88a8a" opacity="0.55" />

                            {/* Body */}
                            <ellipse cx="110" cy="190" rx="62" ry="52" fill="#e0b840" />

                            {/* Belly */}
                            <ellipse cx="110" cy="196" rx="36" ry="34" fill="#f6e2a8" />

                            {/* Arms */}
                            <ellipse cx="52" cy="180" rx="20" ry="30" fill="#c79b27"
                                transform="rotate(-15 52 180)" />
                            <ellipse cx="168" cy="180" rx="20" ry="30" fill="#c79b27"
                                transform="rotate(15 168 180)" />

                            {/* Feet */}
                            <ellipse cx="82" cy="232" rx="24" ry="16" fill="#c79b27" />
                            <ellipse cx="138" cy="232" rx="24" ry="16" fill="#c79b27" />
                            <ellipse cx="82" cy="232" rx="10" ry="7" fill="#f6e2a8" />
                            <ellipse cx="138" cy="232" rx="10" ry="7" fill="#f6e2a8" />
                        </svg>
                    </div>

                    <p className="critter-caption">
                        Someone little is waiting for you…
                    </p>

                    <button
                        className="open-letter-button"
                        onClick={handleOpen}
                    >
                        Open Your Letter
                    </button>

                    {/* Paw-print trail */}
                    <div className="paw-trail" aria-hidden="true">
                        <span>🐾</span>
                        <span>🐾</span>
                        <span>🐾</span>
                    </div>
                </section>
            )}

            {/* Letter — appears after clicking */}
            {opened && (
                <section className="next-content">
                    <article className="letter">
                        <p className="letter-heading">A LETTER FOR YOU</p>

                        <div className="gold-line">
                            <span></span>
                            ✦
                            <span></span>
                        </div>

                        <h1 className="letter-title">Dear Newly Born,</h1>

                        <p className="letter-body">
                            On this special day, I wanted to take a moment
                            to tell you how much you mean to me. Your
                            kindness, your warmth, and your endless crazness
                            have shaped so many beautiful moments in my life.

                            Happy Chapter 25✨

                            May this new chapter of your life be filled with moments you never saw coming,
                             dreams that finally make sense, and happiness that feels effortless. 
                             May you grow without losing the person you are, laugh a little louder, be crazy a little deeper, 
                             and keep becoming someone your younger self would be proud of.

                            Here’s to another year of unexpected blessings, beautiful memories, 
                            and a life that keeps surprising you in the best ways. 🥂💫

                            Your story is still being written and the best pages may be yet to come. 
                            Happy Birthday Senior Nerd!
                        </p>

                        <p className="letter-body">
                            May this year bring you as much joy as you
                            bring to everyone around you.
                        </p>

                        <p className="letter-signature">
                            With all my Nerdification,
                            <br />
                            <span>— Always</span>
                        </p>
                    </article>
                </section>
            )}

            <div className="bottom-decoration">
                <span>✦</span>
                <span>♡</span>
                <span>✦</span>
            </div>

        </main>
    );
}

export default Next;