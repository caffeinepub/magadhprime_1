# Specification

## Summary
**Goal:** Replace the homepage Hero background with the user-uploaded wheat-field image while keeping the rest of the website unchanged.

**Planned changes:**
- Process the uploaded wheat-field image into a 1920x1080 optimized WebP and name it `hero-wheat-field.dim_1920x1080.webp`.
- Place the processed image under `frontend/public/assets/generated/` so it is served at `/assets/generated/hero-wheat-field.dim_1920x1080.webp`.
- Ensure the homepage Hero continues to load the same referenced filename via the existing `ImageWithFallback` path, with no other UI/copy/behavior changes elsewhere on the site.

**User-visible outcome:** The homepage Hero displays the new wheat-field background image, and all other site sections remain exactly the same.
