# Specification

## Summary
**Goal:** Remove the "What would you like to change?" customization overlay from the Pro Fix Handyman site entirely.

**Planned changes:**
- Delete `frontend/src/components/CustomizationPrompt.tsx`
- Remove the import of `CustomizationPrompt` from `App.tsx`
- Remove the auto-display timer (800ms `setTimeout`) that triggers the overlay in `App.tsx`
- Remove any related state management and rendering of the component from `App.tsx`

**User-visible outcome:** The customization/admin overlay no longer appears on page load or at any point during site navigation. All visitors see the normal site without any popup dialog.
