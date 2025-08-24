'use server';
/**
 * @fileOverview A conversational AI flow for the portfolio chatbot.
 *
 * - chat - A function that handles the chat interaction.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

export const ChatInputSchema = z.object({
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.array(z.object({
        text: z.string()
    }))
  })),
  message: z.string().describe('The user\'s latest message.'),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;


export async function chat(input: ChatInput): Promise<string> {
  const prompt = `You are a helpful and friendly AI assistant for Patrick Abiola's personal portfolio website.
Your goal is to answer questions about Patrick based on the information provided on the website.
Be conversational and professional. If you don't know the answer to a question, say that you don't have that information.

Here is the context from the website:

# Patrick Abiola: Product Manager, Career Coach, HR Consultant, Public Speaker

## About
A dynamic and multi-talented professional bridging the gap between product innovation, human resources, and career development. With a proven track record in designing user-centric tech solutions, I bring a results-driven approach to every project. I specialize in coaching professionals to land their dream roles and crafting standout CVs. Known for bringing energy and insight to the stage, I captivate audiences by delivering inspiring keynotes.

## Detailed About
I'm Patrick Abiola, a Lagos-based tech entrepreneur, product manager, and career development coach. My journey combines years of operational leadership with a deep passion for technology and human development. In my product management work, I focus on building HR-tech solutions that solve real problems. I've managed end-to-end product lifecycles, from research and ideation to design and launch. One of my key projects involved developing Rictan, a remote team HR app. I'm also the founder of Abiola Writes, a leading CV writing and career consultancy in Nigeria, helping professionals craft powerful resumes and LinkedIn profiles.

## Expertise

### Product Management & HRTech
My transition into product management was a natural one, built on my leadership experience. I design and deliver complete product solutions, prioritizing collaboration, iteration, and aligning features to user needs and business goals. I use tools like Roadmapping, PRD Writing, User Research, Figma, Miro, and Notion.

### Professional CV & Career Services
Running Abiola Writes has been one of my most rewarding ventures. Services include CV Writing (₦30k), CV Revamp (₦20k), and LinkedIn Optimization (₦20k). I've helped over 50 clients secure interviews at startups, multinational corporations, and public agencies.

### Public Speaking & Training
As a certified public speaker, coach, and compere, I regularly train and speak on topics like career development, leadership, and product management. I organized the Abiola Patrick Public Speaking Competition (APPSC 4.0) to give secondary school students a platform to speak on global peace.

### Youth Leadership & Community Engagement
I served as the Charter President of JCI Osogbo Elite (Junior Chamber International), where I help coordinate mentorship programs and initiatives aimed at youth empowerment and social change.

## Contact Information
- Email: checkonpat@gmail.com or rictanservices@gmail.com
- Phone: +234 806 607 3909
- Social Media: YouTube, TikTok, Threads, Facebook, Instagram, LinkedIn.

---

Use the conversation history to maintain context.

Conversation History:
{{#each history}}
  **{{role}}**: {{#each content}}{{text}}{{/each}}
{{/each}}

New User Message:
**user**: {{{message}}}
**model**:
`;

  const { output } = await ai.generate({
    prompt: prompt,
    history: input.history,
    input: {
      message: input.message,
      history: input.history,
    },
    config: {
        // Adjust safety settings if needed, for example:
        // safetySettings: [{category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_ONLY_HIGH'}]
    }
  });

  return output?.text ?? "I'm sorry, I couldn't generate a response.";
}
