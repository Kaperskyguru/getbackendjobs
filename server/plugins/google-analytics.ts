export default defineNitroPlugin((nitroApp: any) => {
  if (process.env.NODE_ENV == "development") return;
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

    `);
  });
});
