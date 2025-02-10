import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import styles from './components/FAQSection.module.css'
import App from './App.jsx'

const FAQSection = () => {
  const faqs = [
    {
      question: "What is your typical turnaround time?",
      answer: "Our standard delivery time is 2-3 business days for most projects. For complex edits or longer videos, we'll provide a specific timeline during our initial review."
    },
    {
      question: "Can I request revisions?",
      answer: "Yes! Each project includes two rounds of revisions at no extra cost. Additional revisions are available at a reasonable rate."
    },
    {
      question: "Do you have any work samples?",
      answer: "We showcase a variety of sample projects on our portfolio page. You can also request a custom demo tailored to your specific needs."
    },
    {
      question: "What's your satisfaction guarantee?",
      answer: "We stand behind our work with a 100% satisfaction guarantee. If you're not completely satisfied, we'll work with you until we get it right."
    }
  ];

  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        <div className={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <details key={index} className={styles.faqItem}>
              <summary className={styles.summary}>
                {faq.question}
                <span className={styles.plusIcon}>+</span>
              </summary>
              <div className={styles.answer}>
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
        <div className={styles.callToAction}>
          <a 
            href="https://calendly.com/prodbyabhimat/30min" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.bookCallButton}
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <FAQSection />
  </StrictMode>,
)
