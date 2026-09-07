export function AyahCallout() {
  return (
    <section className="w-full py-space-xl px-gutter-mobile lg:px-gutter-desktop bg-surface-container-low">
      <div className="max-w-4xl mx-auto bg-surface-container-lowest rounded-2xl p-space-xl shadow-sm flex flex-col md:flex-row items-center gap-space-lg">
        <div className="w-16 h-16 rounded-full bg-secondary-container/30 flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-display-md-mobile text-secondary">format_quote</span>
        </div>
        <div className="flex flex-col gap-space-xs text-center md:text-left">
          <p className="font-headline-sm text-headline-sm text-primary italic">
            &ldquo;The best among you (Muslims) are those who learn the Quran and teach it.&rdquo;
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-space-sm font-label-sm text-label-sm text-on-surface-variant">
            <span className="font-bold text-secondary">Prophet Muhammad ﷺ</span>
            <span>•</span>
            <span>Sahih al-Bukhari 5027</span>
            <span>•</span>
            <span className="text-primary font-semibold">Narrated by &lsquo;Uthman bin &lsquo;Affan</span>
          </div>
        </div>
      </div>
    </section>
  );
}
