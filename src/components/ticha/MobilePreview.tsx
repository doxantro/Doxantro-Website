'use client';

import { useState } from 'react';
import SciencePractice from './SciencePractice';
import { ArrowRight, BookOpen, Check, Flame, Home, Lightbulb, Sparkles, TrendingUp } from 'lucide-react';

export default function MobilePreview() {
  const [screen, setScreen] = useState<'today' | 'practice' | 'progress'>('today');
  const [goal, setGoal] = useState(5);
  const [completedTopic, setCompletedTopic] = useState('');
  const [complete, setComplete] = useState(false);

  return (
    <section id="daily-learning" className="tc-habit-section">
      <div className="tc-wrap tc-section tc-habit-grid">
        <div className="tc-habit-copy">
          <p className="tc-eyebrow">CURIOSITY, MEET CONSISTENCY.</p>
          <h2>A learning habit.<br />A sharper everyday.</h2>
          <p>Ticha’s AI is being designed to track learning activity, notice patterns and help you build a habit that lasts. A little practice, a thoughtful nudge, a new idea—small moments to keep learning and stay mentally sharp.</p>
          <ul className="tc-checks">
            <li><Check size={17} /> Personal goals that fit your day</li>
            <li><Check size={17} /> Activity tracking to see your consistency grow</li>
            <li><Check size={17} /> AI-guided recommendations for what to explore next</li>
          </ul>
          <div className="tc-preview-instructions"><span className="tc-demo-badge">Interactive app concept</span><p>Take a look around. Set a daily goal, experiment with a projectile, or balance a chemical equation. Then check your progress.</p><ArrowRight size={22} /></div>
          <p className="tc-small">A preview of our planned mobile experience. Demo activity stays on this page and resets when you reload.</p>
        </div>

        <div className="tc-phone-stage">
          <div className="tc-phone">
            <div className="tc-phone-status" aria-hidden="true"><span>9:41</span><span className="tc-phone-island" /><span>••• ▰</span></div>
            <div className="tc-phone-brand"><span>ticha.</span><span className="tc-phone-avatar">You</span></div>
            <div className="tc-phone-content">
              {screen === 'today' && <div>
                <p className="tc-phone-kicker">A LITTLE EVERY DAY</p><h3>Make room<br />for a new idea.</h3><p className="tc-phone-muted">Your next small step starts here.</p>
                <div className="tc-streak"><Flame size={22} /><div><strong>{complete ? '4' : '3'} learning days</strong><span>in this example week</span></div><Sparkles size={19} /></div>
                <p className="tc-phone-label">YOUR DAILY GOAL</p><div className="tc-goals" role="group" aria-label="Daily learning goal">{[5, 10, 15].map(minutes => <button key={minutes} type="button" aria-pressed={goal === minutes} onClick={() => setGoal(minutes)}>{minutes}<small>min / day</small></button>)}</div>
                <div className="tc-daily-card"><span><Lightbulb size={16} /> TODAY’S LITTLE CHALLENGE</span><h4>Big questions.<br />Hands-on answers.</h4><p>Explore projectile motion & chemical equations.</p><button type="button" onClick={() => setScreen('practice')}>{complete ? 'Revisit practice' : 'Try a quick practice'}<ArrowRight size={16} /></button></div>
              </div>}
              <div hidden={screen !== 'practice'}><SciencePractice onComplete={topic => { setCompletedTopic(topic); setComplete(true); setScreen('progress'); }} /></div>
              {screen === 'progress' && <div aria-live="polite">
                <p className="tc-phone-kicker">SMALL STEPS ADD UP</p><h3>Look how<br />you’re showing up.</h3><p className="tc-phone-muted">Consistency is a kind of progress.</p>
                <div className="tc-week"><div className="tc-phone-label">YOUR EXAMPLE WEEK</div><div className="tc-week-days">{['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => <div key={i}><span className={i < 3 || (i === 3 && complete) ? 'tc-day-done' : ''}>{i < 3 || (i === 3 && complete) ? <Check size={14} /> : '·'}</span><small>{day}</small></div>)}</div></div>
                <div className="tc-phone-stats"><div><strong>{complete ? 4 : 3}</strong><span>active days</span></div><div><strong>{goal} min</strong><span>daily goal</span></div></div>
                {complete && <p className="tc-session-complete" role="status"><Check size={16} /> Your demo practice is complete.</p>}
                <div className="tc-ai-note"><Sparkles size={19} /><strong>A possible next step</strong><p>{complete ? `You’ve explored ${completedTopic}. Try the other science activity next to keep building connections.` : 'You’ve made time to learn this week. Try a hands-on science activity to keep the rhythm going.'}</p><span>Example guidance · not live AI</span></div>
                <button className="tc-phone-return" type="button" onClick={() => setScreen('today')}>Back to your day <ArrowRight size={15} /></button>
              </div>}
            </div>
            <nav className="tc-phone-nav" aria-label="Mobile app preview">{([{ id: 'today', label: 'Today', icon: Home }, { id: 'practice', label: 'Practice', icon: BookOpen }, { id: 'progress', label: 'Progress', icon: TrendingUp }] as const).map(({ id, label, icon: Icon }) => <button key={id} type="button" aria-pressed={screen === id} onClick={() => setScreen(id)}><Icon size={19} /><span>{label}</span></button>)}</nav>
            <div className="tc-phone-home" aria-hidden="true" />
          </div>
          <p className="tc-phone-caption">Tap to explore · Illustrative screens & activity</p>
        </div>
      </div>
    </section>
  );
}
