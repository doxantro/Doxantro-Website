'use client';

import { useState } from 'react';
import { ArrowRight, Play, RotateCcw } from 'lucide-react';

export default function SciencePractice({ onComplete }: { onComplete: (topic: string) => void }) {
  const [subject, setSubject] = useState<'physics' | 'chemistry'>('physics');
  const [angle, setAngle] = useState(35);
  const [speed, setSpeed] = useState(20);
  const [launch, setLaunch] = useState(0);
  const [choice, setChoice] = useState<number | null>(null);
  const [coefficients, setCoefficients] = useState([1, 1, 1, 1]);
  const [checked, setChecked] = useState(false);
  const gravity = 9.8;
  const radians = angle * Math.PI / 180;
  const flight = 2 * speed * Math.sin(radians) / gravity;
  const range = speed * speed * Math.sin(2 * radians) / gravity;
  const height = speed * speed * Math.sin(radians) ** 2 / (2 * gravity);
  // Fixed physical scale: 0–100 m horizontally, 0–50 m vertically.
  const path = Array.from({ length: 61 }, (_, i) => {
    const time = flight * i / 60;
    const x = 18 + speed * Math.cos(radians) * time * 2.2;
    const y = 142 - (speed * Math.sin(radians) * time - gravity * time * time / 2) * 2.2;
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(' ');
  const [methane, oxygen, carbonDioxide, water] = coefficients;
  const atoms = [
    { element: 'C', left: methane, right: carbonDioxide },
    { element: 'H', left: methane * 4, right: water * 2 },
    { element: 'O', left: oxygen * 2, right: carbonDioxide * 2 + water },
  ];
  const balanced = atoms.every(atom => atom.left === atom.right);
  const simplest = coefficients.every((value, i) => value === [1, 2, 1, 2][i]);

  return (
    <div className="tc-science">
      <p className="tc-phone-kicker">EXPLORE. EXPERIMENT. UNDERSTAND.</p>
      <h3>Your pocket<br />science lab.</h3>
      <div className="tc-science-tabs" role="group" aria-label="Science subject">
        {(['physics', 'chemistry'] as const).map(item => <button key={item} type="button" aria-pressed={subject === item} onClick={() => setSubject(item)}>{item === 'physics' ? 'Physics' : 'Chemistry'}</button>)}
      </div>
      {subject === 'physics' ? <div>
        <p className="tc-phone-kicker">PROJECTILE MOTION</p>
        <p className="tc-lab-prompt">How does launch angle change the flight of a ball?</p>
        <svg className="tc-projectile" viewBox="0 0 254 165" role="img" aria-label={`Projectile trajectory at ${angle} degrees and ${speed} metres per second. Range ${range.toFixed(1)} metres, height ${height.toFixed(1)} metres.`}>
          {[32, 54, 76, 98, 120].map(y => <line key={y} x1="18" x2="238" y1={y} y2={y} stroke="#d6dfc9" strokeDasharray="2 4" />)}
          <line x1="18" x2="238" y1="142" y2="142" stroke="#71835c" />
          <line x1="18" x2="18" y1="32" y2="142" stroke="#a3b28e" />
          <text x="18" y="157">0</text><text x="117" y="157">50 m</text><text x="215" y="157">100 m</text><text x="22" y="25">50 m</text>
          <path d={path} fill="none" stroke="#234d3b" strokeWidth="2" strokeDasharray="4 3" />
          {launch > 0 ? <circle key={`${launch}-${angle}-${speed}`} r="5" fill="#c66c32"><animateMotion path={path} dur={`${flight.toFixed(2)}s`} fill="freeze" /></circle> : <circle cx="18" cy="142" r="5" fill="#c66c32" />}
        </svg>
        <label className="tc-lab-slider">Launch angle <strong>{angle}°</strong><input aria-label="Launch angle" type="range" min="15" max="75" step="1" value={angle} onChange={event => { setAngle(Number(event.target.value)); setLaunch(0); }} /></label>
        <label className="tc-lab-slider">Initial speed <strong>{speed} m/s</strong><input aria-label="Initial speed" type="range" min="10" max="30" step="1" value={speed} onChange={event => { setSpeed(Number(event.target.value)); setLaunch(0); }} /></label>
        <div className="tc-lab-metrics" aria-live="polite"><span><strong>{range.toFixed(1)} m</strong>range</span><span><strong>{height.toFixed(1)} m</strong>peak height</span><span><strong>{flight.toFixed(2)} s</strong>flight time</span></div>
        <button type="button" className="tc-lab-action" onClick={() => setLaunch(value => value + 1)}><Play size={13} />{launch ? 'Launch again' : 'Launch ball'}</button>
        <p className="tc-lab-assumption">Ideal model: level ground, no air resistance, g = 9.8 m/s². Animation uses the calculated flight time.</p>
        <p className="tc-lab-prompt">At a fixed speed, which angle gives the greatest range?</p>
        <div className="tc-angle-options" role="group" aria-label="Angle for maximum range">{[30, 45, 60].map(value => <button key={value} type="button" aria-pressed={choice === value} onClick={() => setChoice(value)}>{value}°</button>)}</div>
        {choice !== null && <div className="tc-answer-feedback" role="status"><strong>{choice === 45 ? 'Exactly. The balance is 45°.' : 'Try comparing your trajectories.'}</strong><p>R = v² sin(2θ) / g. At 45°, sin(90°) = 1, so range is greatest. Complementary angles such as 30° and 60° give the same range.</p>{choice === 45 && <button type="button" onClick={() => onComplete('projectile motion')}>Finish physics <ArrowRight size={14} /></button>}</div>}
      </div> : <div>
        <p className="tc-phone-kicker">BALANCING EQUATIONS</p>
        <p className="tc-lab-prompt">Balance the complete combustion of methane using the smallest whole-number coefficients.</p>
        <div className="tc-equation-display" aria-label="Methane plus oxygen yields carbon dioxide and water">CH₄ + O₂ → CO₂ + H₂O</div>
        <div className="tc-coefficients">{['CH₄', 'O₂', 'CO₂', 'H₂O'].map((formula, index) => <label key={formula}><span>{formula}</span><select aria-label={`Coefficient for ${formula}`} value={coefficients[index]} onChange={event => { setCoefficients(values => values.map((value, i) => i === index ? Number(event.target.value) : value)); setChecked(false); }}>{[1, 2, 3, 4, 5, 6].map(value => <option key={value}>{value}</option>)}</select><small>{index < 2 ? 'reactant' : 'product'}</small></label>)}</div>
        <table className="tc-atom-table"><caption>Count the atoms on each side</caption><thead><tr><th>Atom</th><th>Left</th><th>Right</th><th>Match</th></tr></thead><tbody>{atoms.map(atom => <tr key={atom.element}><th scope="row">{atom.element}</th><td>{atom.left}</td><td>{atom.right}</td><td>{atom.left === atom.right ? '✓' : '≠'}</td></tr>)}</tbody></table>
        <p className="tc-lab-assumption">Change the coefficients, not the subscripts. Atoms must be conserved.</p>
        <button type="button" className="tc-lab-action" onClick={() => setChecked(true)}>Check equation <ArrowRight size={14} /></button>
        <button type="button" className="tc-phone-return" onClick={() => { setCoefficients([1, 1, 1, 1]); setChecked(false); }}><RotateCcw size={12} />Reset coefficients</button>
        {checked && <div className="tc-answer-feedback" role="status"><strong>{simplest ? 'Balanced. Every atom accounted for.' : balanced ? 'Balanced—now simplify.' : 'Not quite. Follow the atom counts.'}</strong><p>{simplest ? 'CH₄ + 2O₂ → CO₂ + 2H₂O. Both sides have 1 carbon, 4 hydrogen and 4 oxygen atoms.' : balanced ? 'These coefficients conserve atoms, but share a common factor. Reduce them to the smallest whole-number ratio.' : 'Start with carbon, then hydrogen. Finally, adjust oxygen to match the oxygen atoms in both products.'}</p>{simplest && <button type="button" onClick={() => onComplete('balancing chemical equations')}>Finish chemistry <ArrowRight size={14} /></button>}</div>}
      </div>}
      <p className="tc-lab-assumption">Interactive worked example · not live AI</p>
    </div>
  );
}
