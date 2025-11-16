# Duplicate Code Analysis for standalone/index.html

## Summary
Found **3 major areas** of duplicate code logic that can be refactored to reduce code duplication and improve maintainability.

---

## 1. Step Cards Duplication (Lines 1034-1270)

### Issue
Three nearly identical step card structures with only minor differences:
- **Step 1** (lines 1034-1110)
- **Step 2** (lines 1112-1190) 
- **Step 3** (lines 1192-1270)

### Differences Between Cards:
- Step number: `1`, `2`, `3`
- Animation classes: `scroll-slide-left`, `scroll-scale-in`, `scroll-slide-right`
- Delay classes: `scroll-delay-100`, `scroll-delay-200`, `scroll-delay-300`
- Text motion classes: `text-motion-delay-1`, `text-motion-delay-2`, `text-motion-delay-3`
- Emoji: `🎁`, `🎴`, `🎰`
- Title: "Open Daily Card", "Get Promo Code", "Claim Bonus"
- Description text
- Hover color: `text-red-200` (Step 1), `text-yellow-200` (Steps 2 & 3)
- Animated Background Glow: commented out in Step 1, present in Steps 2 & 3

### Duplicated Code (~75 lines per card):
- Card wrapper div with identical classes and styles
- Step number badge structure (identical)
- Content structure (identical)
- Decorative elements (identical)

### Recommendation
Refactor into a JavaScript function that generates step cards from a data array.

---

## 2. Terms & Conditions Cards Duplication (Lines 1312-1434)

### Issue
Five similar T&C card structures with only minor differences:
- **Eligibility** (lines 1312-1334)
- **Bonus Terms** (lines 1337-1359)
- **Usage** (lines 1362-1384)
- **Responsible Gaming** (lines 1387-1409)
- **Changes** (lines 1412-1434)

### Differences Between Cards:
- Scroll delay: `scroll-delay-100` through `scroll-delay-500`
- Icon background colors: `red-500/20`, `yellow-500/20`, `blue-500/20`, `green-500/20`, `purple-500/20`
- Icon border colors: `red-400/30`, `yellow-400/30`, `blue-400/30`, `green-400/30`, `purple-400/30`
- Icon emoji: `👤`, `🎁`, `🎴`, `🛡️`, `⚙️`
- Title text
- Decorative emoji: `✨`, `💎`, `🎰`, `❤️`, `📝`
- Description text

### Duplicated Code (~22 lines per card):
- Card wrapper structure (identical)
- Flex container structure (identical)
- Icon container structure (identical)
- Title structure (identical)
- Description structure (identical)

### Recommendation
Refactor into a JavaScript function that generates T&C cards from a data array.

---

## 3. Payment Method Icons Duplication (Lines 1450-1551)

### Issue
Eight identical payment method divs with only minor differences:
- **Visa** (lines 1450-1463)
- **Mastercard** (lines 1464-1485)
- **PayPal** (lines 1486-1496)
- **Skrill** (lines 1497-1507)
- **Neteller** (lines 1508-1518)
- **Bitcoin** (lines 1519-1529)
- **Ethereum** (lines 1530-1540)
- **Bank Transfer** (lines 1541-1551)

### Differences Between Icons:
- Title attribute
- Text content
- Text color/styling (some have gradients, some have solid colors)
- Font weight (bold vs semibold)

### Duplicated Code (~13 lines per icon):
- Outer div with identical classes: `bg-white/10 backdrop-blur-sm rounded px-2 py-1.5 hover:bg-white/15 transition-all duration-200`
- Inner div structure (identical)
- Font family style (identical)

### Recommendation
Refactor into a JavaScript function that generates payment icons from a data array.

---

## Estimated Code Reduction

- **Step Cards**: ~150 lines → ~30 lines (80% reduction)
- **T&C Cards**: ~110 lines → ~25 lines (77% reduction)
- **Payment Icons**: ~104 lines → ~20 lines (81% reduction)

**Total potential reduction: ~364 lines → ~75 lines (79% reduction)**

---

## Benefits of Refactoring

1. **Maintainability**: Changes to card structure only need to be made once
2. **Consistency**: Ensures all cards have identical structure and styling
3. **Readability**: Reduces file size and makes the code easier to navigate
4. **Flexibility**: Easy to add/remove/modify cards by updating data arrays
5. **DRY Principle**: Follows "Don't Repeat Yourself" best practice

---

## Suggested Refactoring Approach

1. Create data arrays for each section:
   - `stepsData` array for step cards
   - `termsData` array for T&C cards
   - `paymentMethodsData` array for payment icons

2. Create JavaScript functions:
   - `renderStepCard(stepData, index)`
   - `renderTermsCard(termData, index)`
   - `renderPaymentIcon(paymentData)`

3. Use `.map()` or loops to generate HTML dynamically

4. Call these functions during initialization

