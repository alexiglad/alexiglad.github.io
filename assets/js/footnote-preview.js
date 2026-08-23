document.addEventListener("DOMContentLoaded", () => {
  const footnoteLinks = document.querySelectorAll('a.footnote[role="doc-noteref"]');
  if (footnoteLinks.length === 0) return;

  let preview;

  const hidePreview = () => {
    preview?.remove();
    preview = undefined;
  };

  const showPreview = (link) => {
    hidePreview();

    const targetId = decodeURIComponent(link.hash.slice(1));
    const footnote = document.getElementById(targetId);
    if (!footnote) return;

    preview = document.createElement("div");
    preview.className = "footnote-preview";
    preview.setAttribute("role", "tooltip");
    preview.innerHTML = footnote.innerHTML;
    preview.querySelectorAll(".reversefootnote").forEach((backlink) => backlink.remove());
    document.body.appendChild(preview);

    const linkRect = link.getBoundingClientRect();
    const previewRect = preview.getBoundingClientRect();
    const gutter = 12;
    const left = Math.min(
      Math.max(gutter, linkRect.left + linkRect.width / 2 - previewRect.width / 2),
      window.innerWidth - previewRect.width - gutter,
    );
    const fitsAbove = linkRect.top >= previewRect.height + gutter;
    const preferredTop = fitsAbove ? linkRect.top - previewRect.height - 8 : linkRect.bottom + 8;
    const top = Math.min(Math.max(gutter, preferredTop), window.innerHeight - previewRect.height - gutter);

    preview.style.left = `${left}px`;
    preview.style.top = `${top}px`;
  };

  footnoteLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => showPreview(link));
    link.addEventListener("mouseleave", hidePreview);
    link.addEventListener("focus", () => showPreview(link));
    link.addEventListener("blur", hidePreview);
    link.addEventListener("click", hidePreview);
  });

  window.addEventListener("scroll", hidePreview, {passive: true});
  window.addEventListener("resize", hidePreview);
});
