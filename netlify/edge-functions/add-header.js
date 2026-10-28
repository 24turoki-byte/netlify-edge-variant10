export default async (request, context) => {
  const response = await context.next();
  response.headers.set("X-Edge-Served-By", "Netlify-Edge-Function");
  return response;
};
