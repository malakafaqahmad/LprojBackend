import config from '../../config/config.js';
import axios from 'axios';

// Function to create a simple text-only LinkedIn post payload
function createLinkedInPostPayload(text, authorUrn) {
  return {
    author: authorUrn,
    lifecycleState: "PUBLISHED",
    specificContent: {
      "com.linkedin.ugc.ShareContent": {
        shareCommentary: {
          text: text,
        },
        shareMediaCategory: "NONE",
      },
    },
    visibility: {
      "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC",
    },
  };
}

// Function to post to LinkedIn
const postLinkedIn = async (text) => {
  const authorUrn = config.authURN;
  const payload = createLinkedInPostPayload(text, authorUrn);

  try {
    const response = await axios.post(config.postUrl, payload, {
      headers: {
        Authorization: `Bearer ${config.accessToken}`,
        "Content-Type": "application/json",
        "X-Restli-Protocol-Version": "2.0.0", // optional but recommended
      },
    });

    console.log("✅ LinkedIn post created successfully:", response.data); 
  } catch (error) {
    console.error("❌ Error creating LinkedIn post:");
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Details:", error.response.data);
    } else {
      console.error(error.message);
    }
  }
};

export default postLinkedIn;
