### **AI Design Specification: The "Aura" Luxury Landing Page**

**Objective:** This document provides a strict set of instructions for an AI agent to construct a landing page. Adherence to these specifications is mandatory. The aesthetic goal is "Aura"—a design that is clean, luxurious, and feels effortlessly premium.

---

#### **RULESET 1: GLOBAL PAGE & GRID DIRECTIVES**

1.  **Background Color:** Set the global `<body>` background color to `#F9F9F9` (a very light, warm gray).
2.  **Default Text Color:** Set the default text color for all paragraph and body text to `#222222` (a soft, dark charcoal).
3.  **Grid System:**
    *   Implement a 12-column flexible grid.
    *   **Content Container:** All page content (text, images, sections) MUST be constrained within a central container that is `1140px` wide on desktop viewports. On smaller viewports, the container should have `24px` of padding on the left and right.
    *   This creates generous, un-utilized whitespace on the outer edges of the page.

---

#### **RULESET 2: SPACING & LAYOUT INSTRUCTIONS**

1.  **Vertical Section Spacing:** The vertical distance (margin-bottom) between each major `<section>` element MUST be `160px`. This is a non-negotiable rule to ensure a paced, uncluttered flow.
2.  **Intra-Section Spacing:**
    *   The space between a section's headline (H2) and the content below it MUST be `64px`.
    *   The space between an image and its related text block MUST be `48px`.
    *   The space between individual paragraphs of text MUST be `24px`.

---

#### **RULESET 3: TYPOGRAPHY SYSTEM (MANDATORY)**

**Primary Font:** Use the 'Inter' font family. If unavailable, use 'Manrope'. If both are unavailable, default to a system sans-serif font.

*   **H1 - Primary Headline:**
    *   **Instruction:** Use for the main hero headline ONLY.
    *   `font-family: 'Lexend', sans-serif;`
    *   `font-size: 72px;`
    *   `font-weight: 700;` (Bold)
    *   `letter-spacing: -2.5px;`
    *   `line-height: 1.1;`

*   **H2 - Section Headlines:**
    *   **Instruction:** Use for the title of each major page section.
    *   `font-family: 'Lexend', sans-serif;`
    *   `font-size: 52px;`
    *   `font-weight: 700;` (Bold)
    *   `letter-spacing: -1.5px;`

*   **H3 - Sub-headings:**
    *   **Instruction:** Use for supporting titles within a section.
    *   `font-family: 'Lexend', sans-serif;`
    *   `font-size: 28px;`
    *   `font-weight: 600;` (Semi-Bold)

*   **Body Text:**
    *   **Instruction:** Use for all standard paragraphs.
    *   `font-family: 'Lexend', sans-serif;`
    *   `font-size: 18px;`
    *   `font-weight: 400;` (Regular)
    *   `line-height: 1.7;`

*   **Caption/Label:**
    *   **Instruction:** Use for small labels or image captions.
    *   `font-family: 'Lexend', sans-serif;`
    *   `font-size: 14px;`
    *   `font-weight: 500;` (Medium)
    *   `text-transform: uppercase;`
    *   `letter-spacing: 1px;`

---

#### **RULESET 4: COLOR PALETTE (FIXED)**

*   **Primary/Background:** `#F9F9F9`
*   **Primary/Text:** `#222222`
*   **Accent/Action (Buttons, Links):** `#FFD700` (A luxurious gold)
*   **Supporting/Borders:** `#EAEAEA`

---

#### **RULESET 5: MEDIA PROTOCOL - "THE ELEVATED FRAME"**

**Instruction:** This styling MUST be applied to all primary images and videos on the page. Treat this as a component or a wrapper class.

1.  **Step 1 (Rounding):** Apply a `border-radius` of `20px` to the media element.
2.  **Step 2 (Border):** Wrap the media element in a container. This container MUST have a `padding` of `10px` all around the media, creating a visual border. The background of this container is `#FFFFFF`.
3.  **Step 3 (Container Styling):** Apply a `border-radius` of `24px` to this white container. This ensures the corners of the frame are slightly more rounded than the media inside it.
4.  **Step 4 (Shadow):** Apply a `box-shadow` to the white container: `0px 16px 48px rgba(0, 0, 0, 0.1);`. The shadow must be soft and diffused.

---

#### **RULESET 6: INTERACTIVE ELEMENT STYLES**

*   **Buttons (Primary CTA):**
    *   **Base State:** `background-color: #FFD700;` `color: #FFFFFF;` `border-radius: 50px;` `padding: 16px 32px;` `font-weight: 600;` `transition: all 0.3s ease;` `box-shadow: 0px 8px 24px rgba(255, 215, 0, 0.2);`
    *   **Hover State:** `transform: translateY(-3px);` `box-shadow: 0px 12px 32px rgba(255, 215, 0, 0.3);`

*   **Links:**
    *   **Base State:** `color: #FFD700;` `text-decoration: none;` `font-weight: 500;`
    *   **Hover State:** `text-decoration: underline;`

---

#### **RULESET 7: ANIMATION & MOTION DIRECTIVES**

1.  **Default Scroll Animation:** All sections and their child elements MUST fade in and slide up on scroll.
    *   **Initial State (Off-screen):** `opacity: 0;` `transform: translateY(30px);`
    *   **Final State (On-screen):** `opacity: 1;` `transform: translateY(0);`
    *   **Transition:** `transition: opacity 0.8s ease, transform 0.8s ease;`
2.  **Staggered Animation:** For elements in a list or grid, apply a `transition-delay` of `150ms` to each subsequent item. The first item has a delay of `0ms`, the second `150ms`, the third `300ms`, and so on.

**Conclusion:** Execute these instructions precisely to construct the target landing page. No deviation is permitted.