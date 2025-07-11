import axios from 'axios';
import config from '../config/config.js';


export async function getUserInfo(req, res) {
  const accessToken = config.accessToken;
  try {
    const response = await axios.get(config.userInfoUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      timeout: 5000,
    });

    console.log('User info fetched successfully:', response.data);
    
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching user info:', error.message);
    throw error;
  }
}