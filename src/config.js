const dev = {
  s3: {
    REGION: "ap-northeast-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-98lxwnowj61v"
  },
  apiGateway: {
    REGION: "ap-northeast-2",
    URL: "https://sxys35ug77.execute-api.ap-northeast-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "ap-northeast-2",
    USER_POOL_ID: "ap-northeast-2_CjJtzsXMN",
    APP_CLIENT_ID: "4dipdccvesghf881tr1jao8pt0",
    IDENTITY_POOL_ID: "ap-northeast-2:cf884ad7-7eee-4704-8e39-9862f11755a3"
  }
};

const prod = {
  s3: {
    REGION: "ap-northeast-2",
    BUCKET: "notes-app-2-api-prod-serverlessdeploymentbucket-1gpxuo6gliqgq"
  },
  apiGateway: {
    REGION: "ap-northeast-2",
    URL: "https://i92mjkb75k.execute-api.ap-northeast-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-northeast-2",
    USER_POOL_ID: "ap-northeast-2_WdIeKXhQY",
    APP_CLIENT_ID: "60k48pb80dveg735s61mp4l01p",
    IDENTITY_POOL_ID: "ap-northeast-2:4d35dfd7-868f-4500-a991-6f1c9ce3f456"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};