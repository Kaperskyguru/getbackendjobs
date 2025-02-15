export default defineNitroPlugin((nitroApp: any) => {
  if (process.env.NODE_ENV === "development") return;
  nitroApp.hooks.hook("render:html", (html: any, { event }: any) => {
    html.head.push(`
    
    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-L2D0DMYE2P"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-L2D0DMYE2P');
</script>


<script defer src="https://analytics.us.umami.is/script.js" data-website-id="5996851d-15d1-4b11-9ce7-9dd9aa2ef6d2"></script>

<!-- Plausible -->
<script defer data-domain="getbackendjobs.com" src="https://plausible.io/js/script.js"></script>


<!-- Fathom - beautiful, simple website analytics -->
  <script src="https://cdn.usefathom.com/script.js" data-site="HTSWREGQ" defer></script>
<!-- / Fathom -->

<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "off2nbtvix");
</script>

    `);
  });
});
