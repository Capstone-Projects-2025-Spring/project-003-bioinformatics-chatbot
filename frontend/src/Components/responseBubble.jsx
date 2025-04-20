/**
 * @module ResponseBubble
 * This file exports the ResponseBubble component which displays a text message in a styled bubble.
 */

import PropTypes from "prop-types";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

/**
 * PropTypes for the ResponseBubble component.
 *
 * @property {string} text - The text message to display in the response bubble.
 */

ResponseBubble.propTypes = {
	text: PropTypes.string.isRequired,
};

/**
 * ResponseBubble component renders a styled bubble displaying a text message.
 * Supports Markdown formatting.
 *
 * @component
 * @param {object} props - The component props.
 * @param {string} props.text - The text message to display.
 * @returns {JSX.Element} The rendered response bubble element.
 */

export default function ResponseBubble({ text }) {
	const markdownText = `
# 🧬 CRISPR-Cas9 in Human Gene Editing

CRISPR-Cas9 is **revolutionizing modern medicine**, especially in the field of **gene editing**. Here's a breakdown of its impact and recent advancements:

---

## 🧪 What is CRISPR-Cas9?

CRISPR-Cas9 is a _genome editing tool_ derived from a bacterial defense system. It enables scientists to:

- Cut DNA at specific locations  
- Disable malfunctioning genes  
- Insert or repair genes with high precision  

> "It’s like a pair of molecular scissors guided by GPS." — Geneticist

---

## ⚡ Recent Breakthroughs (2024–2025)

### 1. **Sickle Cell Disease Therapy**
- 🔬 *Technique:* Ex vivo CRISPR correction of patient hematopoietic stem cells  
- ✅ *Result:* >90% of patients symptom-free in clinical trials

### 2. **Cancer Immunotherapy**
- 🧫 *Approach:* CRISPR-edited CAR-T cells  
- 🎯 *Target:* Tumor-specific antigens  
- 📈 *Outcome:* Improved T-cell persistence and tumor regression

### 3. **Vision Restoration**
- 👁 *Condition:* Leber Congenital Amaurosis (LCA)  
- 🧬 *Tool:* In vivo editing using viral delivery  
- 🌟 *Impact:* Partial sight restoration in blind patients

---

## 📚 Code Example (just for fun!)

\`\`\`python
def edit_gene(sequence, target, replacement):
    if target in sequence:
        return sequence.replace(target, replacement)
    return sequence

print(edit_gene("ATCGGATC", "GGA", "TTT"))  # Simulated gene edit
\`\`\`

---

## 📌 Ethical Considerations

- ⚖️ Germline editing remains controversial  
- 🧒 Heritable changes could affect future generations  
- 🧑‍⚖️ Global consensus still evolving

---

## 🔗 Learn More
- [Nature CRISPR Collection](https://www.nature.com/collections/crispr)
- [CRISPR Clinical Trials Tracker](https://crisprtrials.org)

---

*Last Updated: April 2025*
`;
	const [isCopied, setIsCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(text).then(() => {
			setIsCopied(true);
			setTimeout(() => setIsCopied(false), 1000);
		});
	};

	return (
		<div className='relative w-full px-4 pb-8 pt-2 bg-transparent text-primary break-words whitespace-pre-wrap mb-2 group'>
			<ReactMarkdown>{markdownText}</ReactMarkdown>

			<button
				className='relative mt-3 mb-2 rounded-xl'
				onClick={handleCopy}
				data-testid='copy-button'>
				{isCopied ? (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='size-4 text-primary hover:text-accent'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='m4.5 12.75 6 6 9-13.5'
						/>
					</svg>
				) : (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='size-4 text-primary hover:text-accent'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75'
						/>
					</svg>
				)}
			</button>
		</div>
	);
}
