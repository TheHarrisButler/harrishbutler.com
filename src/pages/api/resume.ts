import { NextApiRequest, NextApiResponse } from "next";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? "",
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? "",
    },
  });

  const getObjectCommand = new GetObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: process.env.AWS_BUCKET_KEY,
  });

  try {
    const data = await s3.send(getObjectCommand);

    const body = await new Response(data.Body as BodyInit).arrayBuffer();

    res.setHeader("Content-Type", "application/pdf");

    res.send(Buffer.from(body));
  } catch (error) {
    res.status(500).send(error);
  }
}
