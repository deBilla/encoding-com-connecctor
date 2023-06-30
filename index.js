const axios = require("axios");

class EncodingConnector {
  constructor(userId, userKey) {
    this.userId = userId;
    this.userKey = userKey;
    this.baseUrl = "https://manage.encoding.com";
    this.headers = {
      "Content-Type": "application/json",
    };
  }

  async getMediaInfo() {
    const query = {
      userid: this.userId,
      userkey: this.userKey,
      action: "GetMediaList",
      version: "1",
    };

    try {
      const response = await axios.post(
        this.baseUrl,
        { query: query },
        { headers: this.headers }
      );
      return response.data;
    } catch (error) {
      console.error("Error retrieving media information:", error);
      throw error;
    }
  }

  async encodeVideo(inputUrl, outputUrl) {
    const query = {
      userid: this.userId,
      userkey: this.userKey,
      action: "AddMedia"
    };

    try {
      const response = await axios.post(
        this.baseUrl,
        { query: query },
        { headers: this.headers }
      );
      return response.data;
    } catch (error) {
      console.error("Error encoding video:", error);
      throw error;
    }
  }

  async encoderQuery(query) {
    try {
      const response = await axios.post(
        this.baseUrl,
        { query: query },
        { headers: this.headers }
      );
      return response.data;
    } catch (error) {
      console.error("Error encoding video:", error);
      throw error;
    }
  }
}

module.exports = EncodingConnector;
