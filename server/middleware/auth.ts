export default defineEventHandler((event) => {
  const clientSideRoutes = !event.node?.req?.url?.startsWith("/api");

  // console.log(event.node.req.headers.authorization);

  if (clientSideRoutes) {
    return;
  }

  event.context.auth = {
    authenticated: true,
  };
});
