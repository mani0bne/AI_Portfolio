import fs from "fs";
import { extractTextFromPDF } from "../utils/pdfParser.js";
import { generatePortfolioJSON } from "../utils/gemini.js";
import { generatePortfolioData } from "../utils/groqService.js";

export const uploadResume = async (req, res) => {
  try {
    const filePath = req.file.path;

    const resumeText = await extractTextFromPDF(filePath);

    let portfolioData;

    try {
      // Try Gemini first
      portfolioData = await generatePortfolioJSON(resumeText);
      console.log("✅ Gemini used");
    } catch (err) {
      console.log("⚠️ Gemini failed, switching to Groq...");

      // Fallback to Groq
      portfolioData = await generatePortfolioData(resumeText);
      console.log("✅ Groq used");
    }

    // Delete uploaded file after processing
    fs.unlinkSync(filePath);

    res.status(200).json(portfolioData);
  } catch (error) {
    console.error("UPLOAD ERROR:", error);
    res.status(500).json({
      error: "Failed to process resume",
    });
  }
};
