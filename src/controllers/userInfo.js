import axios from 'axios';

// Function to get user information from LinkedIn
async function getUserInfo() {
  const accessToken = 'AQVICKuSLY9KXgWsFwAkmM-jVP0U1WgUyVUPy_HFbYJmp3ukm79b0McV5ueAo4gVG0SbS0qv4QG2BQ3VOgtSpLQ_se6KRS594_8xzUMw0c4b_goI6C4_HOCIsVW4DmTA-WgvR14FWW8DK24Ey3FluqFgokpzGi_aXPADNMGvCFLnHZ5ccDV6ygzx22ozZ2YnnBei_W8eHAtdWCLScME8V9HG_XVt00zFKKe8-1S2m3OxmWu2NGdo7OMd12Cx_NEvLeuIX7_eu5O6yeZf9ttybBbyfzZgkGnKTTHTGOW820h2TA7kGcwRvXVt4EMl0lTwylP39UP91anyxDggHAoG4QSLdPD3VQ';

  try {
    const url = 'https://api.linkedin.com/v2/userinfo';
    console.log('Fetching user info with URL:', url);

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      timeout: 5000,
    });

    console.log('User info fetched successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching user info:', error.message);
    throw error;
  }
}


export default getUserInfo;