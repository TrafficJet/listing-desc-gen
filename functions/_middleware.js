export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname === 'www.listing-description-gen.com') {
    url.hostname = 'listing-description-gen.com';
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
