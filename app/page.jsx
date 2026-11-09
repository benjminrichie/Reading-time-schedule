
'use client';

import { useState } from "react";
import { BookOpen, RotateCcw, Clock3, CalendarDays, FileText } from "lucide-react";

export default function HomePage() {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [pagesRead, setPagesRead] = useState("");
  const [totalPages, setTotalPages] = useState("");
  const [days, setDays] = useState("");

  const measuredMinutes = (Number(hours) || 0) * 60 + (Number(minutes) || 0);
  const hasReadingTime = hours !== "" || minutes !== "";
  const isReady = hasReadingTime && measuredMinutes > 0 && Number(pagesRead) > 0 && Number(totalPages) > 0 && Number(days) > 0;
  const minutesPerDay = isReady
    ? Math.max(1, Math.round((measuredMinutes / Number(pagesRead)) * Number(totalPages) / Number(days)))
    : 0;
  const pagesPerDay = isReady ? Number(totalPages) / Number(days) : 0;

  function resetForm() {
    setHours("");
    setMinutes("");
    setPagesRead("");
    setTotalPages("");
    setDays("");
  }

  function formatDuration(value) {
    const wholeHours = Math.floor(value / 60);
    const remainingMinutes = value % 60;
    if (wholeHours && remainingMinutes) return `${wholeHours} hr ${remainingMinutes} min`;
    if (wholeHours) return `${wholeHours} ${wholeHours === 1 ? "hour" : "hours"}`;
    return `${remainingMinutes} ${remainingMinutes === 1 ? "minute" : "minutes"}`;
  }

  return (
    <main className="schedule-page">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Page by Page home">
          <span className="brand-mark"><BookOpen size={19} strokeWidth={2.2} /></span>
          <span>page by page</span>
        </a>
        <span className="topbar-note">A calmer way to finish your reading</span>
      </header>

      <section className="workspace" aria-labelledby="page-title">
        <div className="intro">
          <div className="eyebrow"><span className="eyebrow-line" /> YOUR READING PLAN</div>
          <h1 id="page-title">Make time for<br /><em>every page.</em></h1>
          <p>Tell us your pace and your deadline. We’ll turn the handout into a daily reading target.</p>
        </div>

        <div className="planner">
          <section className="inputs-panel" aria-label="Reading details">
            <div className="panel-heading">
              <div>
                <span className="step-label">01 / THE DETAILS</span>
                <h2>Set your reading goal</h2>
              </div>
              <button className="reset-button" type="button" onClick={resetForm} aria-label="Reset form" title="Reset form">
                <RotateCcw size={17} />
              </button>
            </div>

            <div className="field-group">
              <label className="field-label" htmlFor="pages-read">How many pages did you read?</label>
              <p className="field-hint">Use a sample of pages you have already read.</p>
              <div className="single-field">
                <input id="pages-read" type="number" min="1" step="1" inputMode="numeric" placeholder="e.g. 5" value={pagesRead} onChange={(event) => setPagesRead(event.target.value)} />
                <FileText size={17} aria-hidden="true" />
              </div>
            </div>

            <div className="field-group time-group">
              <label className="field-label" htmlFor="reading-hours">How long did it take?</label>
              <p className="field-hint">Enter the time spent reading those pages.</p>
              <div className="time-fields">
                <div className="number-field">
                  <input id="reading-hours" type="number" min="0" step="1" inputMode="numeric" placeholder="0" value={hours} onChange={(event) => setHours(event.target.value)} aria-label="Hours to read pages" />
                  <span>hours</span>
                </div>
                <div className="number-field">
                  <input id="reading-minutes" type="number" min="0" max="59" step="1" inputMode="numeric" placeholder="0" value={minutes} onChange={(event) => setMinutes(event.target.value)} aria-label="Minutes to read pages" />
                  <span>minutes</span>
                </div>
              </div>
            </div>

            <div className="field-row">
              <div className="field-group compact-field">
                <label className="field-label" htmlFor="total-pages">Total pages</label>
                <p className="field-hint">In your handout</p>
                <div className="single-field">
                  <input id="total-pages" type="number" min="1" step="1" inputMode="numeric" placeholder="e.g. 120" value={totalPages} onChange={(event) => setTotalPages(event.target.value)} />
                  <FileText size={17} aria-hidden="true" />
                </div>
              </div>
              <div className="field-group compact-field">
                <label className="field-label" htmlFor="finish-days">Days to finish</label>
                <p className="field-hint">Your available days</p>
                <div className="single-field">
                  <input id="finish-days" type="number" min="1" step="1" inputMode="numeric" placeholder="e.g. 10" value={days} onChange={(event) => setDays(event.target.value)} />
                  <CalendarDays size={17} aria-hidden="true" />
                </div>
              </div>
            </div>
            <p className="privacy-note"><Clock3 size={14} /> Your plan stays right here in your browser.</p>
          </section>

          <section className={`result-panel${isReady ? " result-ready" : ""}`} aria-live="polite" aria-label="Your daily reading schedule">
            <div className="result-topline">
              <span className="step-label">02 / YOUR DAILY TARGET</span>
              <span className="result-indicator" aria-hidden="true" />
            </div>
            {isReady ? (
              <>
                <p className="result-kicker">Plan to read for</p>
                <div className="result-time">{formatDuration(minutesPerDay)}<span> / day</span></div>
                <div className="result-rule" />
                <div className="result-stats">
                  <div><span className="stat-value">{Number.isInteger(pagesPerDay) ? pagesPerDay : pagesPerDay.toFixed(1)}</span><span className="stat-label">pages each day</span></div>
                  <div><span className="stat-value">{formatDuration(minutesPerDay * Number(days))}</span><span className="stat-label">estimated total</span></div>
                </div>
                <p className="result-footnote">Based on {formatDuration(measuredMinutes)} for {pagesRead} {Number(pagesRead) === 1 ? "page" : "pages"}.</p>
              </>
            ) : (
              <div className="empty-result">
                <div className="empty-icon"><Clock3 size={22} strokeWidth={1.7} /></div>
                <h2>Your schedule<br />will appear here.</h2>
                <p>Fill in your reading time, page count, and finish date to see your daily target.</p>
              </div>
            )}
            <div className="result-bottom"><span>STEADY PROGRESS, ONE DAY AT A TIME</span><BookOpen size={17} /></div>
          </section>
        </div>

        <footer className="page-footer"><span>PAGE BY PAGE</span><span>Small sessions add up.</span></footer>
      </section>
      </main>
  );
}