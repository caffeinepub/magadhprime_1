# Specification

## Summary
**Goal:** Update the Visual Trust grid to use the newly provided external image URLs for items #2, #3, #4, and #6.

**Planned changes:**
- Update the `images` array in `frontend/src/components/sections/VisualTrustSection.tsx` so positions #2, #3, #4, and #6 point to the user-provided external URLs.
- Keep the existing layout, captions, and `ImageWithFallback` behavior unchanged while swapping only the specified image sources.
- Remove or revise the existing TODO comment so it no longer states the 6th image URL is missing.

**User-visible outcome:** The Visual Trust section displays the updated images in slots 2, 3, 4, and 6 while everything else remains visually and behaviorally the same.
