// ================================================
// 🔧 여기에 본인 정보를 입력하세요!
// ================================================
const SUPABASE_URL = 'https://dgqkhvjxtsymwmafyppc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRncWtodmp4dHN5bXdtYWZ5cHBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3NTA5NTcsImV4cCI6MjA5NTMyNjk1N30.ySLVNM1hX_hSRqgEwfng1GBdvfGUJrm01tpJNgQZ_AM';

const USER_CONFIG = {
  'sdjing@naver.com': {
    name: 'S',
    color: '#a8d5a2',
    markerColor: '#6dbf67',
    starColor: '#1a237e'   // S: 남색 별
  },
  'hey_0314@naver.com': {
    name: 'H',
    color: '#c3a8e0',
    markerColor: '#a97dd4',
    starColor: '#ffffff'   // H: 흰색 별
  }
};

// ================================================
// 테마 색상 (진하게 변경)
// ================================================
const THEMES = {
  '맛집':        { color: '#e53935', emoji: '🍽️', label: '맛집' },
  '애견동반맛집': { color: '#f9a825', emoji: '🐾', label: '애견동반 맛집' },
  '숙박':        { color: '#8e24aa', emoji: '🏨', label: '숙박' },
  '가볼만한곳':  { color: '#039be5', emoji: '📍', label: '가볼만한 곳' }
};

// ================================================
// Supabase 초기화
// ================================================
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
window.supabase = supabaseClient;

// ================================================
// 공통 유틸 함수
// ================================================
async function getCurrentUser() {
  const { data: { user } } = await supabaseClient.auth.getUser();
  return user;
}

function getUserConfig(email) {
  return USER_CONFIG[email] || { name: email, color: '#aaa', markerColor: '#888', starColor: '#fff' };
}

async function checkAuth() {
  const { data: { session } } = await supabaseClient.auth.getSession();
  if (!session) {
    window.location.href = 'login.html';
    return null;
  }
  return session.user;
}
