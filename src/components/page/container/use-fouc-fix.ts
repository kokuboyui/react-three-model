import { useEffect } from 'react';

export const useFoucFix = (): void => {
  useEffect(() => {
    // Gather all server-side rendered stylesheet entries.
    let ssrPageStyleSheetsEntries = Array.from(
      document.querySelectorAll('link[rel="stylesheet"][data-n-p]')
    ).map((element) => ({
      element,
      href: element.getAttribute('href'),
    }));

    // Remove the `data-n-p` attribute to prevent Next.js from removing it early.
    ssrPageStyleSheetsEntries.forEach(({ element }) =>
      element.removeAttribute('data-n-p')
    );

    const fixedStyleHrefs: string[] = [];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mutationHandler = (mutations: any): void => {
      // Gather all <style data-n-href="/..."> elements.
      const newStyleEntries = mutations
        .filter(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ({ target }: any) =>
            target.nodeName === 'STYLE' && target.hasAttribute('data-n-href')
        )
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .map(({ target }: any) => ({
          element: target,
          href: target.getAttribute('data-n-href'),
        }));

      // Cycle through them and either:
      // - Remove the `data-n-href` attribute to prevent Next.js from removing it early.
      // - Remove the element if it's already present.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      newStyleEntries.forEach(({ element, href }: any) => {
        const styleExists = fixedStyleHrefs.includes(href);

        if (styleExists) {
          element.remove();
        } else {
          element.setAttribute('data-fouc-fix-n-href', href);
          element.removeAttribute('data-n-href');
          fixedStyleHrefs.push(href);
        }
      });

      // Cycle through the server-side rendered stylesheets and remove the ones that
      // are already present as inline <style> tags added by Next.js, so that we don't have duplicate styles.
      ssrPageStyleSheetsEntries = ssrPageStyleSheetsEntries.reduce(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (entries: any[], entry) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const { element, href }: any = entry;
          const styleExists = fixedStyleHrefs.includes(href);

          if (styleExists) {
            element.remove();
          } else {
            entries.push(entry);
          }

          return entries;
        },
        []
      );
    };

    const observer = new MutationObserver(mutationHandler);

    observer.observe(document.head, {
      subtree: true,
      attributeFilter: ['media'],
    });

    return () => observer.disconnect();
  }, []);
};
