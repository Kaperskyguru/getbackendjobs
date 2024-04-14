export default defineNitroPlugin((nitroApp) => {
  if (process.env.NODE_ENV === "development") return;
  nitroApp.hooks.hook("render:html", (html, ctx) => {
    if (!ctx.event._path?.includes("/hire-backend"))
      html.bodyAppend.push(`
    <script type="text/javascript" src="https://vec.emlsend.com/newform/dynamic/js/DoixZVisDzRq7oT8Lm6XDd58KAsOe1r6rUma6zaBBW0w4/46258/"></script>
    <script type="text/javascript" src="https://vec.emlsend.com/newform/dynamic/js/DoixZVisDzRq7oT8Lm6XDd58KAsOe1r6rUma6zaBBW0w4/46259/"></script>
      `);
  });
});
