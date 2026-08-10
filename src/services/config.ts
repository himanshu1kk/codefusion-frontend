export const API_ORIGIN = 'https://codefusion-backend-tzj4.onrender.com';

export const apiRoutes = {
  auth: `${API_ORIGIN}/api/v1/auth`,
  cf: `${API_ORIGIN}/api/v0.1/cf`,
  handleVerification: `${API_ORIGIN}/api/handle-verification`,
} as const;

export const legacyRoutes = {
  login: '/codeLogin.html',
  register: '/index1.html',
  handle: '/handle.html',
  contests: '/contest.html',
  practice: '/practice.html',
} as const;
