import config from '../../config/config.js';
import axios from 'axios';

function createLinkedInArticlePayload(authorUrn, text, articleUrl, articleTitle, articleDescription) {
  return {
    author: authorUrn, //urn:li:person:2DyPgn56tP
    lifecycleState: "PUBLISHED",
    specificContent: {
      "com.linkedin.ugc.ShareContent": {
        shareCommentary: {
          text: text,
        },
        shareMediaCategory: "ARTICLE",
        media: [
          {
            status: "READY",
            originalUrl: articleUrl,
            title: {
              text: articleTitle
            },
            description: {
              text: articleDescription
            }
          }
        ]
      }
    },
    visibility: {
      "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"
    }
  };
}

const postLinkedInArticle = async (text, articleUrl, articleTitle, articleDescription) => {
  const authorUrn = config.authURN;
  console.log("the author urn is ", authorUrn);
  const payload = createLinkedInArticlePayload(authorUrn, text, articleUrl, articleTitle, articleDescription);

  try {
    const response = await axios.post(config.postUrl, payload, {
      headers: {
        Authorization: `Bearer ${config.accessToken}`,
        "Content-Type": "application/json",
        "X-Restli-Protocol-Version": "2.0.0"
      }
    });

    console.log("✅ LinkedIn article post created successfully:");
    console.log(response.data);
  } catch (error) {
    console.error("❌ Error creating LinkedIn article post:");
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Details:", error.response.data);
    } else {
      console.error(error.message);
    }
  }
};

export default postLinkedInArticle;
