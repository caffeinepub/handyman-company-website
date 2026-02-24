# Specification

## Summary
**Goal:** Restore text colors so that only the Hero section (with the background image) uses white text, while all other sections revert to black/dark text.

**Planned changes:**
- Keep all text in the Hero section (headline, tagline, stat labels, subheading) styled as white (`text-white`).
- Revert all text in the About, Services, Contact, Footer, and Navigation sections from white back to black or dark ink color (`text-gray-900` or equivalent).

**User-visible outcome:** The page is fully readable with dark text on light section backgrounds, while the hero image section retains its white text for contrast against the background image.
