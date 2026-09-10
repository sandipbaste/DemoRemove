import { useState } from "react";
import "./App.css";
function App() {
  const [opened, setOpened] = useState(false);
  const openSurprise = () => {
    setOpened(true);
  };
  const resetSurprise = () => {
    setOpened(false);
  };
  return (
    <div className="birthday-app">
      {" "}
      {/* Background Animation */}{" "}
      <div className="background-animation">
        {" "}
        <span>❤️</span> <span>🌹</span> <span>🤍</span> <span>🌸</span>{" "}
        <span>❤️</span> <span>✨</span> <span>🌷</span> <span>🤍</span>{" "}
        <span>💕</span> <span>🌹</span>{" "}
      </div>{" "}
      {!opened ? (
        /* ================= SURPRISE SCREEN ================= */ <section className="surprise-screen">
          {" "}
          <div className="sparkles"> ✦ ✧ ✦ ✧ ✦ </div>{" "}
          <p className="for-text"> A LITTLE SURPRISE FOR </p>{" "}
          <h1 className="siddhi-name"> Siddhi </h1>{" "}
          <p className="small-message">
            {" "}
            Something small, beautiful and special is waiting for you... ❤️{" "}
          </p>{" "}
          {/* Gift */}{" "}
          <div className="gift-container">
            {" "}
            <div className="gift-glow"></div>{" "}
            <div className="gift-box">
              {" "}
              <div className="gift-lid">
                {" "}
                <div className="gift-ribbon"></div>{" "}
              </div>{" "}
              <div className="gift-body">
                {" "}
                <div className="vertical-ribbon"></div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <button className="surprise-button" onClick={openSurprise}>
            {" "}
            <span>🎁</span> Open Surprise <span>❤️</span>{" "}
          </button>{" "}
          <p className="click-text">
            {" "}
            Click to open your special surprise ✨{" "}
          </p>{" "}
        </section>
      ) : (
        /* ================= WISH SCREEN ================= */ <section className="wish-screen">
          {" "}
          {/* Confetti */}{" "}
          <div className="confetti-container">
            {" "}
            {Array.from({ length: 35 }).map((_, index) => (
              <span key={index}>
                {" "}
                {index % 3 === 0 ? "❤️" : index % 3 === 1 ? "✨" : "🌹"}{" "}
              </span>
            ))}{" "}
          </div>{" "}
          {/* Main Card */}{" "}
          <div className="main-card">
            {" "}
            <div className="top-flowers"> 🌹 🤍 🌹 🤍 🌹 </div>{" "}
            <p className="special-text"> ✨ A SPECIAL WISH FOR YOU ✨ </p>{" "}
            <h1 className="birthday-heading"> Happy Birthday </h1>{" "}
            <h2 className="birthday-name"> Siddhi ❤️ </h2>{" "}
            <div className="cake"> 🎂 </div>{" "}
            <p className="birthday-wish">
              {" "}
              Wishing you a very Happy Birthday! ❤️{" "}
            </p>{" "}
            <p className="intro-text">
              {" "}
              On this beautiful day, I have one special wish for you...{" "}
            </p>{" "}
            {/* ================= HEALTH SECTION ================= */}{" "}
            <div className="health-card">
              {" "}
              <div className="health-icon"> 🌿 </div>{" "}
              <p className="health-label"> SPECIAL HEALTH WISHES </p>{" "}
              <h2> A Special Health Wish For Siddhi ❤️ </h2>{" "}
              <div className="health-content">
                {" "}
                <div className="health-item">
                  {" "}
                  <span>🌿</span>{" "}
                  <p>
                    {" "}
                    May you always have good health and stay happy, strong and
                    healthy.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="health-item">
                  {" "}
                  <span>❤️</span>{" "}
                  <p>
                    {" "}
                    May your life always be free from illness, sadness, stress
                    and worries.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="health-item">
                  {" "}
                  <span>🌸</span>{" "}
                  <p>
                    {" "}
                    May every new day bring you fresh energy, positivity,
                    confidence and happiness.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="health-item">
                  {" "}
                  <span>🤍</span>{" "}
                  <p>
                    {" "}
                    May your mind always be peaceful and may the beautiful smile
                    on your face always stay the same.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="health-item">
                  {" "}
                  <span>✨</span>{" "}
                  <p>
                    {" "}
                    Always take good care of yourself, give yourself enough rest
                    and never forget to make yourself happy.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="health-item">
                  {" "}
                  <span>🌹</span>{" "}
                  <p>
                    {" "}
                    May every stage of your life bring you great health,
                    positive energy, happiness and beautiful memories.{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div className="special-quote">
                {" "}
                “May your health always be strong, your heart always be happy,
                your mind always be peaceful, and your beautiful smile stay
                forever.” ❤️{" "}
              </div>{" "}
            </div>{" "}
            {/* Teddy & Flowers */}{" "}
            <div className="gift-section">
              {" "}
              <div className="teddy-box">
                {" "}
                <div className="floating-heart"> ❤️ </div>{" "}
                <div className="teddy"> 🧸 </div> <h3> For You, Siddhi 🤍 </h3>{" "}
                <p> A little gift filled with love 🎁 </p>{" "}
              </div>{" "}
              <div className="flower-box">
                {" "}
                <div className="flowers-animation"> 🌹🌸🌷 </div>{" "}
                <h3> Stay Healthy ❤️ </h3>{" "}
                <p> Always stay happy, healthy and smiling. </p>{" "}
              </div>{" "}
            </div>{" "}
            {/* Final Message */}{" "}
            <div className="final-message">
              {" "}
              <div className="final-flowers"> 🌹 🤍 🌹 </div>{" "}
              <h2> One Last Special Wish... 💌 </h2>{" "}
              <p>
                {" "}
                No matter what happens in life, always take care of yourself.
                Your health and happiness are more important than anything
                else.{" "}
              </p>{" "}
              <p>
                {" "}
                Stay positive, keep smiling, take care of your beautiful heart,
                and enjoy every moment of your life.{" "}
              </p>{" "}
              <p>
                {" "}
                May you always be surrounded by happiness, peace, love and good
                health.{" "}
              </p>{" "}
              <div className="final-wish">
                {" "}
                Happy Birthday Siddhi 🎂❤️{" "}
              </div>{" "}
              <div className="heart-line"> ❤️ 🤍 ❤️ 🤍 ❤️ </div>{" "}
            </div>{" "}
          </div>{" "}
          <button className="again-button" onClick={resetSurprise}>
            {" "}
            🎁 Open Surprise Again{" "}
          </button>{" "}
        </section>
      )}{" "}
    </div>
  );
}
export default App;
