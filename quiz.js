console.log("attachment quiz script loaded ✅");

// Attachment style metadata
const attachmentStyles = {
  secure: {
    name: "Secure Attachment",
    description:
      "You feel safe in intimacy, trust yourself and others, and communicate your thoughts and emotions clearly in relationships. You are able to regulate your emotions more effectively and are more willing to open up and work through conflict in a healthy way. This attachment style typically develops in individuals who were raised in a secure, supportive, and nurturing environment, where parents or primary caregivers were reliable and consistently met both physical and emotional needs. As a result, secure individuals are able to express love and affection genuinely without becoming possessive, overprotective, or clingy, allowing relationships to feel both stable and emotionally balanced.",
  },
  anxious: {
    name: "Anxious Attachment",
    description:
      "You crave emotional closeness and reassurance in relationships, but you often struggle with fear of abandonment, rejection, or being replaced. You may overthink conversations, feel anxious when replies are delayed, or interpret emotional distance as a sign that something is wrong. When your partner needs space, it can feel unsettling, leading you to seek reassurance or immediate communication to feel secure again. This attachment style often develops from inconsistent emotional support earlier in life, which can create a deep need for validation and closeness. While you are caring, loyal, and emotionally invested, your relationships may feel intense at times because your sense of safety is closely tied to feeling emotionally connected and reassured.",
  },
  avoidant: {
    name: "Avoidant Attachment",
    description:
      "You value independence and self-reliance, often feeling most comfortable when you are emotionally self-sufficient. You may prefer solving problems on your own and can feel uneasy or overwhelmed when others seek deep emotional closeness or depend on you too much. Intimacy can sometimes feel suffocating, leading you to create emotional distance by minimizing feelings, changing the subject during emotional conversations, or focusing more on work, hobbies, or personal goals. You might downplay the importance of romantic relationships or struggle to express affection, even when you genuinely care. This attachment style often develops from early experiences where emotional needs were discouraged or unmet, making vulnerability feel risky or uncomfortable. While you are capable and independent, you may find it challenging to fully open up or rely on others without feeling a loss of control.",
  },
  disorganized: {
    name: "Anxious-Avoidant (Disorganized) Attachment",
    description:
      "You want emotional closeness and meaningful connection, but you also fear rejection, betrayal, or being hurt once you let your guard down. This can create a push and pull dynamic in relationships where you crave intimacy but suddenly withdraw when things start to feel too real or emotionally intense. You may feel torn between wanting to be close and needing distance, often switching between warmth and emotional shutdown. Trust can feel difficult because part of you expects relationships to fall apart, even when things are going well. This attachment style often develops from inconsistent or confusing emotional experiences, making intimacy feel both comforting and threatening at the same time. As a result, your relationships may feel emotionally unpredictable, as you struggle to balance your desire for deep connection with your instinct to protect yourself from potential pain.",
  },
};

// ✅ CTA + Character image mapping
const resultExtras = {
  secure: {
    characterName: "Daniel",
    cta: "The character you may relate to the most is Daniel. Read about him in our Entertainment section’s comics, and if you want to learn more about how to manage your attachment style better, view our infographics.",
    img: "./assets/d1.PNG",
  },
  anxious: {
    characterName: "Rain",
    cta: "The character you may relate to the most is  Rain. Read about her in our Entertainment section’s comics, and if you want to learn more about how to manage your attachment style better, view our infographics.",
    img: "./assets/r1.PNG",
  },
  avoidant: {
    characterName: "Felicity",
    cta: "The character you may relate to the most is Felicity. Read about her in our Entertainment section’s comics, and if you want to learn more about how to manage your attachment style better, view our infographics.",
    img: "./assets/f1.PNG",
  },
  disorganized: {
    characterName: "Felix",
    cta: "The character you may relate to the most is Felix. Read about him in our Entertainment section’s comics, and if you want to learn more about how to manage your attachment style better, view our infographics.",
    img: "./assets/fe1.PNG",
  },
};

// All questions (category + statement text)
const questions = [
  // SECURE (10)
  {
    category: "secure",
    text: "I feel comfortable depending on others and letting them depend on me.",
  },
  {
    category: "secure",
    text: "I can express my needs and feelings openly without fear of rejection.",
  },
  {
    category: "secure",
    text: "I trust that my relationships can withstand conflict or distance.",
  },
  {
    category: "secure",
    text: "I believe that love can feel both free and stable at the same time.",
  },
  {
    category: "secure",
    text: "I don’t feel the need to constantly prove my worth in relationships.",
  },
  {
    category: "secure",
    text: "I can comfort others without feeling drained or overwhelmed.",
  },
  {
    category: "secure",
    text: "I usually expect that people mean well, even if they make mistakes.",
  },
  {
    category: "secure",
    text: "I can be alone without feeling abandoned or unloved.",
  },
  {
    category: "secure",
    text: "When a conflict happens, I focus on resolution rather than blame.",
  },
  {
    category: "secure",
    text: "I feel safe giving and receiving affection equally.",
  },

  // ANXIOUS (10)
  {
    category: "anxious",
    text: "I often worry that my partner doesn’t love me as much as I love them.",
  },
  {
    category: "anxious",
    text: "I find myself replaying conversations, wondering if I did something wrong.",
  },
  {
    category: "anxious",
    text: "I feel uneasy when my partner needs space or alone time.",
  },
  {
    category: "anxious",
    text: "I need frequent reassurance to feel secure in my relationships.",
  },
  {
    category: "anxious",
    text: "I tend to prioritize others’ needs over my own to keep them close.",
  },
  {
    category: "anxious",
    text: "I get anxious when messages or calls aren’t replied to quickly.",
  },
  {
    category: "anxious",
    text: "I often fear being replaced or forgotten by the people I love.",
  },
  {
    category: "anxious",
    text: "I struggle to relax unless I know where I stand with someone.",
  },
  {
    category: "anxious",
    text: "I sometimes mistake emotional distance as a sign of disinterest.",
  },
  {
    category: "anxious",
    text: "When I sense tension, I want to talk it out immediately to feel safe again.",
  },

  // AVOIDANT (10)
  {
    category: "avoidant",
    text: "I prefer to solve my problems alone rather than seeking help.",
  },
  {
    category: "avoidant",
    text: "I feel uncomfortable when people get too emotionally close to me.",
  },
  {
    category: "avoidant",
    text: "I tend to downplay the importance of romantic relationships.",
  },
  {
    category: "avoidant",
    text: "I feel suffocated when someone depends on me too much.",
  },
  {
    category: "avoidant",
    text: "I often change the subject when conversations get too emotional.",
  },
  {
    category: "avoidant",
    text: "I like to maintain personal space even in close relationships.",
  },
  {
    category: "avoidant",
    text: "I sometimes see vulnerability as a sign of weakness.",
  },
  {
    category: "avoidant",
    text: "I find it easier to focus on work or hobbies than emotional connection.",
  },
  {
    category: "avoidant",
    text: "I have difficulty expressing affection, even when I care deeply.",
  },
  {
    category: "avoidant",
    text: "I prefer not to rely on others, because it makes me feel out of control.",
  },

  // DISORGANIZED (10)
  {
    category: "disorganized",
    text: "I want intimacy, but I’m scared people will leave once they see the real me.",
  },
  {
    category: "disorganized",
    text: "I feel torn between wanting closeness and needing distance.",
  },
  {
    category: "disorganized",
    text: "When someone gets too close, I suddenly pull away without knowing why.",
  },
  {
    category: "disorganized",
    text: "I crave love but don’t fully trust it will last.",
  },
  {
    category: "disorganized",
    text: "I worry that if I let my guard down, I’ll be betrayed or hurt.",
  },
  {
    category: "disorganized",
    text: "I sometimes test people to see if they’ll still stay after I push them away.",
  },
  {
    category: "disorganized",
    text: "I find it hard to tell whether I’m afraid of being alone or afraid of being loved.",
  },
  {
    category: "disorganized",
    text: "My emotions in relationships can switch quickly between warmth and withdrawal.",
  },
  {
    category: "disorganized",
    text: "I often feel both comforted and frightened by emotional intimacy.",
  },
  {
    category: "disorganized",
    text: "I want deep connection, but part of me expects it to fall apart eventually.",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded, wiring quiz…");

  const form = document.getElementById("attachmentQuiz");
  const resultSection = document.getElementById("resultSection");
  const resultStyleEl = document.getElementById("resultStyle");
  const resultDescriptionEl = document.getElementById("resultDescription");
  const scoreBreakdownEl = document.getElementById("scoreBreakdown");
  const retakeBtn = document.getElementById("retakeBtn");

  // CTA elements
  const resultCtaTextEl = document.getElementById("resultCtaText");
  const resultCharacterImgEl = document.getElementById("resultCharacterImg");
  const ctaComicsLink = document.getElementById("ctaComicsLink");
  const ctaInfographicsLink = document.getElementById("ctaInfographicsLink");

  // Safety check
  if (!form) {
    console.error("❌ No element with id 'attachmentQuiz' found.");
    return;
  }

  renderQuestions(form);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const scores = { secure: 0, anxious: 0, avoidant: 0, disorganized: 0 };

    for (let i = 0; i < questions.length; i++) {
      const fieldName = `q${i}`;
      const field = form.elements[fieldName];

      if (!field || !field.value) {
        alert("Please answer all the questions before viewing your result.");
        return;
      }

      const value = parseInt(field.value, 10);
      const category = questions[i].category;
      scores[category] += value;
    }

    let maxScore = -Infinity;
    let dominantKeys = [];

    Object.entries(scores).forEach(([key, value]) => {
      if (value > maxScore) {
        maxScore = value;
        dominantKeys = [key];
      } else if (value === maxScore) {
        dominantKeys.push(key);
      }
    });

    let titleText;
    let descText;
    let dominantKeyForExtras = null;

    if (dominantKeys.length === 1) {
      const key = dominantKeys[0];
      dominantKeyForExtras = key;

      titleText = attachmentStyles[key].name;
      descText = attachmentStyles[key].description;
    } else {
      const names = dominantKeys.map((k) => attachmentStyles[k].name);
      titleText = "You show a blended attachment pattern";
      descText = `Your scores suggest a mix of: ${names.join(
        ", ",
      )}. You may relate to parts of each style depending on the relationship or situation.`;
    }

    if (
      !resultSection ||
      !resultStyleEl ||
      !resultDescriptionEl ||
      !scoreBreakdownEl
    ) {
      alert("Results section is not set up correctly in the HTML.");
      return;
    }

    // Title
    resultStyleEl.textContent = titleText;

    // Description => auto-split into 2 paragraphs
    const sentences = descText
      .split(". ")
      .map((s) => s.trim())
      .filter(Boolean);

    const mid = Math.ceil(sentences.length / 2);
    const p1 =
      sentences.slice(0, mid).join(". ") + (sentences.length ? "." : "");
    const p2 =
      sentences.slice(mid).join(". ") + (sentences.length > mid ? "." : "");

    resultDescriptionEl.innerHTML = `<p>${p1}</p>${p2 ? `<p>${p2}</p>` : ""}`;

    // CTA text
    if (resultCtaTextEl) {
      if (dominantKeyForExtras && resultExtras[dominantKeyForExtras]) {
        resultCtaTextEl.textContent = resultExtras[dominantKeyForExtras].cta;
      } else {
        resultCtaTextEl.textContent =
          "Want to learn more? Check out our Entertainment section’s comics and explore our infographics to find tools that fit you best.";
      }
    }

    // 🛑 FULL BODY IMAGES TEMP DISABLED (commented out)
    // If you want to re-enable, just uncomment this whole block.
    /*
    if (resultCharacterImgEl) {
      if (dominantKeyForExtras && resultExtras[dominantKeyForExtras]) {
        const extra = resultExtras[dominantKeyForExtras];
        resultCharacterImgEl.src = extra.img;
        resultCharacterImgEl.alt = `${extra.characterName} character full body`;
        resultCharacterImgEl.classList.remove("hidden");
      } else {
        resultCharacterImgEl.src = "";
        resultCharacterImgEl.alt = "";
        resultCharacterImgEl.classList.add("hidden");
      }
    }
    */

    // Also ensure it's hidden while disabled:
    if (resultCharacterImgEl) {
      resultCharacterImgEl.src = "";
      resultCharacterImgEl.alt = "";
      resultCharacterImgEl.classList.add("hidden");
    }

    // Score breakdown
    scoreBreakdownEl.innerHTML = "";
    const maxPerStyle = 10 * 5;

    Object.entries(scores).forEach(([key, value]) => {
      const row = document.createElement("div");
      row.className = "score-row";

      const label = document.createElement("span");
      label.className = "score-label";
      label.textContent = attachmentStyles[key].name;

      const score = document.createElement("span");
      score.className = "score-value";
      score.textContent = `${value} / ${maxPerStyle}`;

      row.appendChild(label);
      row.appendChild(score);
      scoreBreakdownEl.appendChild(row);
    });

    resultSection.classList.remove("hidden");
    resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  if (retakeBtn) {
    retakeBtn.addEventListener("click", () => {
      form.reset();
      resultSection.classList.add("hidden");

      if (resultCtaTextEl) resultCtaTextEl.textContent = "";

      // keep image hidden since we're disabling it for now
      if (resultCharacterImgEl) {
        resultCharacterImgEl.src = "";
        resultCharacterImgEl.alt = "";
        resultCharacterImgEl.classList.add("hidden");
      }

      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

function renderQuestions(form) {
  const grouped = { secure: [], anxious: [], avoidant: [], disorganized: [] };

  questions.forEach((q, index) => {
    grouped[q.category].push({ ...q, index });
  });

  const categoryOrder = ["secure", "anxious", "avoidant", "disorganized"];

  categoryOrder.forEach((catKey) => {
    const catData = attachmentStyles[catKey];
    const catQuestions = grouped[catKey];
    if (!catQuestions.length) return;

    // Removed attachment style section headers
    // const catTitle = document.createElement("h2");
    // catTitle.className = "category-title";
    // catTitle.textContent = catData.name;
    // form.appendChild(catTitle);

    // ✅ OPTION 1: remove category description paragraph so it ONLY appears in results
    // (intentionally removed)
    // const catDesc = document.createElement("p");
    // catDesc.className = "category-description";
    // catDesc.textContent = catData.description;
    // form.appendChild(catDesc);

    catQuestions.forEach((q) => {
      const questionDiv = document.createElement("div");
      questionDiv.className = "question";

      const p = document.createElement("p");
      p.className = "question-text";
      p.textContent = q.text;
      questionDiv.appendChild(p);

      const scaleRow = document.createElement("div");
      scaleRow.className = "scale-row";

      const leftLabel = document.createElement("span");
      leftLabel.className = "scale-label";
      leftLabel.textContent = "Strongly Disagree";
      scaleRow.appendChild(leftLabel);

      const optionsDiv = document.createElement("div");
      optionsDiv.className = "options";

      const name = `q${q.index}`;

      for (let value = 1; value <= 5; value++) {
        const option = document.createElement("label");
        option.className = "option";

        const input = document.createElement("input");
        input.type = "radio";
        input.name = name;
        input.value = value.toString();
        if (value === 1) input.required = true;

        const span = document.createElement("span");
        span.textContent = value.toString();

        option.appendChild(input);
        option.appendChild(span);
        optionsDiv.appendChild(option);
      }

      const rightLabel = document.createElement("span");
      rightLabel.className = "scale-label";
      rightLabel.textContent = "Strongly Agree";

      scaleRow.appendChild(optionsDiv);
      scaleRow.appendChild(rightLabel);

      questionDiv.appendChild(scaleRow);
      form.appendChild(questionDiv);
    });
  });
}

// LOADER
window.addEventListener("load", () => {
  const loader = document.getElementById("preloader");
  if (!loader) return;

  loader.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
  }, 600);
});
