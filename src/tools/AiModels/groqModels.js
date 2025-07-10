const groqChatModels = [
  "allam-2-7b",
  "compound-beta",
  "compound-beta-mini",
  "deepseek-r1-distill-llama-70b",
  "gemma2-9b-it",
  "llama-3.1-8b-instant",
  "llama-3.3-70b-versatile",
  "llama3-70b-8192",
  "llama3-8b-8192",
  "meta-llama/llama-4-maverick-17b-128e-instruct",
  "meta-llama/llama-4-scout-17b-16e-instruct",
  "meta-llama/llama-guard-4-12b",
  "meta-llama/llama-prompt-guard-2-22m",
  "meta-llama/llama-prompt-guard-2-86m",
  "mistral-saba-24b",
  "qwen-qwq-32b",
  "qwen/qwen3-32b"
];

export const speechToTextModels = [
  "distil-whisper-large-v3-en",
  "whisper-large-v3",
  "whisper-large-v3-turbo"
];

export const textToSpeechModels = [
  "playai-tts",
  "playai-tts-arabic"
];


export default groqChatModels;
export { speechToTextModels, textToSpeechModels };
