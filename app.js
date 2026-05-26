// ================================================
// 🔧 여기에 본인 정보를 입력하세요!
// ================================================
const SUPABASE_URL = 'https://dgqkhvjxtsymwmafyppc.supabase.co';         // 예: https://abcdefgh.supabase.co
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRncWtodmp4dHN5bXdtYWZ5cHBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3NTA5NTcsImV4cCI6MjA5NTMyNjk1N30.ySLVNM1hX_hSRqgEwfng1GBdvfGUJrm01tpJNgQZ_AM'; // anon public 키
const KAKAO_MAP_KEY = 'f7da18f5467c98e0e45cdd5bd535596d';         // 카카오 JavaScript 키

// 나(파스텔 녹색)와 A(파스텔 보라색)의 이메일을 입력하세요
const USER_CONFIG = {
  'sdjing@naver.com': {           // 본인 이메일로 변경
    name: 'S',
    color: '#a8d5a2',               // 파스텔 녹색
    markerColor: '#6dbf67'
  },
  'hey_0314@naver.com': {            // A의 이메일로 변경
    name: 'H',
    color: '#c3a8e0',               // 파스텔 보라색
    markerColor: '#a97dd4'
  }
};

// ================================================
// Supabase 초기화
// ================================================
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 전역에서 supabase로 접근 가능하게
window.supabase = supabaseClient;

// ================================================
// 테마 설정
// ================================================
const THEMES = {
  '맛집': { color: '#FF8A65', emoji: '🍽️', label: '맛집' },
  '애견동반맛집': { color: '#FFB74D', emoji: '🐾', label: '애견동반 맛집' },
  '숙박': { color: '#64B5F6', emoji: '🏨', label: '숙박' },
  '가볼만한곳': { color: '#81C784', emoji: '📍', label: '가볼만한 곳' }
};

// ================================================
// 공통 유틸 함수
// ================================================
async function getCurrentUser() {
  const { data: { user } } = await supabaseClient.auth.getUser();
  return user;
}

function getUserConfig(email) {
  return USER_CONFIG[email] || { name: email, color: '#aaa', markerColor: '#888' };
}

async function checkAuth() {
  const { data: { session } } = await supabaseClient.auth.getSession();
  if (!session) {
    window.location.href = 'login.html';
    return null;
  }
  return session.user;
}
