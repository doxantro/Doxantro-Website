'use client';

import MathFraction from './MathFraction';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, MessageCircle, RotateCcw, Sparkles } from 'lucide-react';

const conversations = {
  physics: {
    label: 'Physics',
    question: 'Why doesn’t launching a ball almost straight up make it travel farther?',
    answer: 'A steeper launch gives the ball more time in the air, but less horizontal speed. Distance depends on both. On level ground without air resistance, 45° gives the best balance.',
    replies: [
      { question: 'Explain it with an analogy.', answer: 'Think of a fixed launch speed as a budget split between going up and going forward. Spend almost all of it going up, and the ball rises high but barely moves forward. At 45°, the upward and forward components are equal, giving the greatest range in this ideal model.' },
      { question: 'Show me the maths.', answer: <>Horizontal speed is v cos θ. Flight time is <MathFraction numerator="2v sin θ" denominator="g" label="2 v sine theta divided by g" />. Multiply them: R = <MathFraction numerator="v² sin(2θ)" denominator="g" label="v squared sine of 2 theta divided by g" />. The sine term reaches its maximum of 1 when 2θ = 90°, so θ = 45°.</> },
      { question: 'What changes in the real world?', answer: 'Air resistance slows the ball, and wind can change its motion. Launch and landing heights matter too. With those effects, the angle for maximum range can differ from 45°.' },
    ],
  },
  chemistry: {
    label: 'Chemistry',
    question: 'Why can’t I change O₂ to O₄ when I balance a chemical equation?',
    answer: 'A subscript is part of a substance’s chemical identity. A coefficient changes how many molecules take part. To count four oxygen atoms while keeping oxygen as O₂, write 2O₂.',
    replies: [
      { question: 'Walk me through methane combustion.', answer: 'Start with CH₄ + O₂ → CO₂ + H₂O. One CO₂ matches the carbon. Two H₂O match the four hydrogen atoms. The products now contain four oxygen atoms, so use two O₂: CH₄ + 2O₂ → CO₂ + 2H₂O.' },
      { question: 'How do I check my answer?', answer: 'Count each element separately on both sides. For CH₄ + 2O₂ → CO₂ + 2H₂O, each side has 1 carbon, 4 hydrogen and 4 oxygen atoms. Then check that the coefficients are the smallest whole-number ratio.' },
      { question: 'Explain coefficients another way.', answer: 'Think of molecules as sealed ingredient packets. The subscript tells you what is inside each packet. The coefficient tells you how many packets you have. You can add more packets without changing what each one contains.' },
    ],
  },
};

export default function ConversationPreview() {
  const [topic, setTopic] = useState<keyof typeof conversations>('physics');
  const [selected, setSelected] = useState<number[]>([]);
  const threadRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const thread = threadRef.current;
    if (thread) thread.scrollTop = selected.length ? thread.scrollHeight : 0;
  }, [selected, topic]);
  const conversation = conversations[topic];
  const remaining = conversation.replies.map((reply, index) => ({ ...reply, index })).filter(reply => !selected.includes(reply.index));

  return (
    <section id="conversation" className="tc-section tc-wrap tc-conversation-grid">
      <div className="tc-conversation-copy">
        <p className="tc-eyebrow">KEEP THE QUESTION GOING</p>
        <h2>A conversation.<br />Not a dead end.</h2>
        <p>“Why?” “What if?” “Can you explain that another way?” Ticha’s conversational learning experience is being designed to make room for every follow-up, helping learners work towards understanding at their own pace.</p>
        <ul className="tc-checks"><li><MessageCircle size={17} /> Ask the question behind your question</li><li><Sparkles size={17} /> Explore an analogy, the reasoning or a worked example</li><li><ArrowUpRight size={17} /> Connect an explanation to the next thing you try</li></ul>
        <p className="tc-small">Try a suggested reply in the preview. These are scripted examples of the experience we’re building, not responses from a live AI tutor.</p>
      </div>
      <div className="tc-chat">
        <div className="tc-chat-header"><span className="tc-ai-avatar">t.</span><div><strong>Think it through with Ticha</strong><small>Interactive conversation concept</small></div><button type="button" aria-label="Restart conversation" onClick={() => setSelected([])}><RotateCcw size={16} /></button></div>
        <div className="tc-science-tabs" role="group" aria-label="Conversation topic">{(Object.keys(conversations) as Array<keyof typeof conversations>).map(key => <button key={key} type="button" aria-pressed={topic === key} onClick={() => { setTopic(key); setSelected([]); }}>{conversations[key].label}</button>)}</div>
        <div ref={threadRef} className="tc-chat-thread" role="log" aria-label="Example conversation" aria-live="polite" aria-relevant="additions">
          <div className="tc-chat-bubble tc-chat-user"><span>You</span><p>{conversation.question}</p></div>
          <div className="tc-chat-bubble tc-chat-tutor"><span>Ticha</span><p>{conversation.answer}</p></div>
          {selected.map(index => <div key={`${topic}-${index}`} className="tc-chat-exchange"><div className="tc-chat-bubble tc-chat-user"><span>You</span><p>{conversation.replies[index].question}</p></div><div className="tc-chat-bubble tc-chat-tutor"><span>Ticha</span><p>{conversation.replies[index].answer}</p></div></div>)}
        </div>
        <div className="tc-chat-replies"><p>{remaining.length ? 'TAKE THE CONVERSATION FURTHER' : 'A LITTLE MORE UNDERSTANDING.'}</p>{remaining.map(reply => <button type="button" key={reply.index} onClick={() => setSelected(items => [...items, reply.index])}>{reply.question}<ArrowUpRight size={14} /></button>)}{!remaining.length && <button type="button" onClick={() => { setTopic(topic === 'physics' ? 'chemistry' : 'physics'); setSelected([]); }}>Explore {topic === 'physics' ? 'chemistry' : 'physics'} next<ArrowUpRight size={14} /></button>}</div>
        <p className="tc-chat-note">Scripted preview · No messages are sent or stored.</p>
      </div>
    </section>
  );
}
