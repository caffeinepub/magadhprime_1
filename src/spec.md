# Specification

## Summary
**Goal:** Update the Home page Hero background image to load from a specified external URL while preserving the current overlay gradient, layout, and fallback behavior.

**Planned changes:**
- Change the Hero background image source to `https://i.postimg.cc/rsn7SfgZ/IMG-20260214-021314.jpg` (replacing the current generated static asset reference).
- Ensure the existing overlay gradient remains applied on top of the Hero background image.
- Keep the existing `ImageWithFallback` behavior so the fallback UI renders if the external image fails to load.

**User-visible outcome:** The Home page Hero displays the new externally hosted background image with the same dark overlay and layout as before, and shows the existing fallback UI if the image cannot be loaded.
