# Specification

## Summary
**Goal:** Update the first image in the Visual Trust grid to load from a provided external URL while keeping the rest of the section unchanged.

**Planned changes:**
- In `frontend/src/components/sections/VisualTrustSection.tsx`, set the first Visual Trust image `src` to `https://i.postimg.cc/DfNT4zDB/IMG-20260214-041839.png` (not using `getGeneratedAssetUrl`).
- Keep all other Visual Trust images, layout/styling, and `ImageWithFallback` behavior exactly as-is.

**User-visible outcome:** The first Visual Trust image displays from the external URL, with no visible changes to the grid layout or other images.
