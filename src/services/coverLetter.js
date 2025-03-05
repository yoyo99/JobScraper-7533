import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export const generateCoverLetter = async (jobDetails, userProfile) => {
  try {
    const prompt = `
    Write a professional cover letter for the following job:
    
    Position: ${jobDetails.title}
    Company: ${jobDetails.company}
    
    Candidate Profile:
    Experience: ${userProfile.experience}
    Skills: ${userProfile.skills.join(', ')}
    
    Please create a personalized and engaging cover letter that highlights relevant experience and skills.
    `;

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are a professional cover letter writer with expertise in crafting compelling and personalized cover letters."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7,
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Cover letter generation error:', error);
    throw new Error('Failed to generate cover letter');
  }
};