import { v2 as cloudinary } from "cloudinary";

export default eventHandler(async (event) => {
  const body: any = await readBody(event);

  const signature = cloudinary.utils.api_sign_request(
    body.paramsToSign,
    process.env?.CLOUDINARY_API_SECRET!
  );

  return { signature };
});
