import { SummaryResponse } from "@/types";

export async function summarizeAPI(
  formData: FormData
): Promise<SummaryResponse> {

  const API_URL =
    process.env.NEXT_PUBLIC_API_URL;

  console.log("API URL:", API_URL);

  const response = await fetch(
    `${API_URL}/api/summarize`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.error || "Failed to summarize"
    );
  }

  return data;
}