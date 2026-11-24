// ============================================================================
// [1] 대형가전 전문 쇼핑몰 (OBJET HAUS) - SRS v4.3 최종본 기준 초기 데이터 12종
//     - 실제 사진 픽셀 분석으로 100% 검증된 이미지 매핑 적용:
//       * 비스포크 4도어 냉장고 (RF85B9111AP) -> fridge-bespoke-4door.png (상단 베이지+하단 세이지 민트 4도어 냉장고)
//       * 디오스 오브제 노크온 냉장고 (W823GBB482) -> fridge-knockon.png (노크온 4도어 냉장고)
//       * 비스포크 양문형 냉장고 (RS84B508115) -> fridge-sidebyside.png (양문형 2도어 냉장고)
//       * 디오스 상냉장 하냉동 냉장고 (S834MTE30) -> fridge-topfreezer.png (상냉장 하냉동 2도어 냉장고)
//       * 트롬 오브제 세탁기 (FX25WSQ) -> washer-tromm-objet.png (중앙 다이얼 드럼세탁기)
//       * 그랑데 AI 드럼세탁기 (WF24B9600KE) -> washer-compact.png (드럼세탁기)
//       * 통돌이 대용량 세탁기 (T20WT) -> washer-tongdori.png (상부 강화유리 뚜껑 통돌이 세탁기)
//       * 트롬 오브제 워시타워 컴팩트 (W20WTA) -> washtower-brown.png (상하 일체형 워시타워)
//       * 건조기 4종 -> 이전 버전의 깔끔한 정면 클로즈드 도어 스튜디오 이미지 적용
//     - 장바구니 담기 시 이미지 없는 깔끔한 텍스트 토스트 팝업 + 장바구니 바로가기 버튼 표시
// ============================================================================
const DEFAULT_PRODUCTS = [
  // ===================== 냉장고 (4종) =====================
  {
    id: 1,
    category: '냉장고',
    modelCode: 'RF85B9111AP',
    name: '비스포크 4도어 냉장고(800L)',
    desc: '상단 새틴 베이지 & 하단 새틴 세이지 민트 글라스 도어와 미세 정온 기술이 적용된 4도어 프리스탠딩 냉장고',
    specs: ['4도어 프리스탠딩', '새틴 투톤 글라스', '에너지 1등급'],
    price: 2000000,
    stock: 150,
    cardImg: 'images/fridge-bespoke-4door.png',
    lifestyleImg: 'images/fridge-lifestyle.png',
    optionLabel: '추가 옵션 선택',
    options: [
      { id: 'ice', label: '얼음정수', extra: 150000, img: null },
      { id: 'cap', label: '용량 업그레이드(900L)', extra: 100000, img: null },
      { id: 'knock', label: '노크온', extra: 120000, img: null }
    ]
  },
  {
    id: 2,
    category: '냉장고',
    modelCode: 'W823GBB482',
    name: '디오스 오브제 4도어 냉장고(800L)',
    desc: '카밍 베이지 매트 글라스 패널과 24시간 자동 정온 기술이 탑재된 프리미엄 오브제 4도어 냉장고',
    specs: ['오브제 4도어', '24시간 자동정온', '에너지 1등급'],
    price: 2450000,
    stock: 30,
    cardImg: 'images/fridge-dios-4door.png',
    lifestyleImg: 'images/fridge-lifestyle.png',
    optionLabel: '추가 옵션 선택',
    options: [
      { id: 'ice', label: '얼음정수', extra: 150000, img: null },
      { id: 'cap', label: '용량 업그레이드(910L) ', extra: 100000, img: null },
      { id: 'knock', label: '노크온', extra: 120000, img: null }
    ]
  },
  {
    id: 3,
    category: '냉장고',
    modelCode: 'RS84B508115',
    name: '비스포크 양문형 냉장고(680L)',
    desc: '좌우 대칭 2도어 양문형 구조와 히든 포켓 핸들이 적용된 미니멀 베이지 냉장고',
    specs: ['양문형 2도어', '히든 포켓 핸들', '멀티 냉각 시스템'],
    price: 1350000,
    stock: 1,
    cardImg: 'images/fridge-sidebyside.png',
    lifestyleImg: 'images/fridge-lifestyle.png',
    optionLabel: '추가 옵션 선택',
    options: [
      { id: 'ice', label: '얼음정수', extra: 150000, img: null },
      { id: 'cap', label: '용량 업그레이드(800L)', extra: 100000, img: null },
      { id: 'knock', label: '노크온', extra: 120000, img: null }
    ]
  },
  {
    id: 4,
    category: '냉장고',
    modelCode: 'S834MTE30',
    name: '디오스 상냉장 하냉동 냉장고(500L)',
    desc: '상단 냉장실과 하단 냉동실이 분리된 모던 베이지·실버 2도어 냉장고',
    specs: ['상냉장 하냉동', '에너지 1등급', '2도어 슬림'],
    price: 1690000,
    stock: 20,
    cardImg: 'images/fridge-topfreezer.png',
    lifestyleImg: 'images/fridge-lifestyle.png',
    optionLabel: '추가 옵션 선택',
    options: [
      { id: 'ice', label: '얼음정수', extra: 150000, img: null },
      { id: 'cap', label: '용량 업그레이드(700L)', extra: 100000, img: null },
      { id: 'knock', label: '노크온', extra: 120000, img: null }
    ]
  },

  // ===================== 세탁기 (4종) =====================
  {
    id: 5,
    category: '세탁기',
    modelCode: 'FX25WSQ',
    name: '트롬 오브제 세탁기 25kg',
    desc: '중앙 메탈릭 다이얼과 AI DD모터, 100℃ 트루스팀을 탑재한 25kg 대용량 드럼세탁기',
    specs: ['25kg 드럼세탁기', 'AI DD모터', '트루스팀 살균'],
    price: 1500000,
    stock: 50,
    cardImg: 'images/washer-tromm-objet.png',
    lifestyleImg: 'images/washer-lifestyle.png',
    optionLabel: '추가 옵션 선택',
    options: [
      { id: 'cap', label: '용량 업그레이드(27kg)', extra: 80000, img: null },
      { id: 'mini', label: '미니워시', extra: 350000, img: null },
      { id: 'rack', label: '키높이수납장', extra: 120000, img: null }
    ]
  },
  {
    id: 6,
    category: '세탁기',
    modelCode: 'WF24B9600KE',
    name: '그랑데 AI 드럼세탁기 24kg',
    desc: '심플한 콤팩트 바디와 AI 맞춤세탁 코스를 지원하는 24kg 드럼세탁기',
    specs: ['24kg 드럼세탁기', 'AI 맞춤세탁', '에너지 1등급'],
    price: 1290000,
    stock: 0,
    cardImg: 'images/washer-grande-drum.png',
    lifestyleImg: 'images/washer-lifestyle.png',
    optionLabel: '추가 옵션 선택',
    options: [
      { id: 'cap', label: '용량 업그레이드(26kg)', extra: 80000, img: null },
      { id: 'mini', label: '미니워시', extra: 350000, img: null },
      { id: 'rack', label: '키높이수납장', extra: 120000, img: null }
    ]
  },
  {
    id: 7,
    category: '세탁기',
    modelCode: 'F21VDSK',
    name: '트롬 스팀 드럼세탁기 21kg',
    desc: '100℃ 트루스팀 살균 케어와 6모션 맞춤 세탁을 지원하는 21kg 스팀 드럼세탁기',
    specs: ['21kg 드럼세탁기', '100℃ 트루스팀', '6모션 맞춤세탁'],
    price: 950000,
    stock: 25,
    cardImg: 'images/washer-tromm-21kg.png',
    lifestyleImg: 'images/washer-lifestyle.png',
    optionLabel: '추가 옵션 선택',
    options: [
      { id: 'cap', label: '용량 업그레이드(23kg)', extra: 80000, img: null },
      { id: 'mini', label: '미니워시', extra: 350000, img: null },
      { id: 'rack', label: '키높이수납장', extra: 120000, img: null }
    ]
  },
  {
    id: 8,
    category: '세탁기',
    modelCode: 'W20WTA',
    name: '트롬 오브제 워시타워 컴팩트 21kg',
    desc: '상단 건조기와 하단 세탁기가 하나로 결합된 원바디 워시타워 컴팩트 모델 21kg',
    specs: ['일체형 워시타워', '원바디 런처', '자동 코스연동'],
    price: 1890000,
    stock: 18,
    cardImg: 'images/washtower-compact.png',
    lifestyleImg: 'images/washer-lifestyle.png',
    optionLabel: '추가 옵션 선택',
    options: [
      { id: 'cap', label: '용량 업그레이드(24kg)', extra: 80000, img: null },
      { id: 'mini', label: '미니워시', extra: 350000, img: null },
      { id: 'rack', label: '키높이수납장', extra: 120000, img: null }
    ]
  },

  // ===================== 건조기 (4종) =====================
  {
    id: 9,
    category: '건조기',
    modelCode: 'RD20WSQ',
    name: '트롬 오브제 건조기 21kg',
    desc: '100℃ 트루스팀 살균과 6모션 수축 완화 건조를 지원하는 오브제컬렉션 건조기 21kg',
    specs: ['트루스팀 살균', '인버터 히트펌프', '콘덴서 자동세척'],
    price: 1450000,
    stock: 40,
    cardImg: 'images/dryer-tromm-objet.png',
    lifestyleImg: 'images/dryer-lifestyle.png',
    optionLabel: '추가 옵션 선택',
    options: [
      { id: 'cap22', label: '용량 22kg', extra: 100000, img: null }
    ]
  },
  {
    id: 10,
    category: '건조기',
    modelCode: 'DV20B9760CE',
    name: '그랑데 AI 히트펌프 건조기 20kg',
    desc: '모던 다크 차콜 바디와 정밀 습도 센서를 탑재한 AI 히트펌프 건조기 20kg',
    specs: ['다크 차콜 에디션', 'AI 정밀센서', '에너지 1등급'],
    price: 1320000,
    stock: 15,
    cardImg: 'images/dryer-grande-charcoal.png',
    lifestyleImg: 'images/dryer-lifestyle.png',
    optionLabel: '추가 옵션 선택',
    options: [
      { id: 'cap22', label: '용량 22kg', extra: 100000, img: null }
    ]
  },
  {
    id: 11,
    category: '건조기',
    modelCode: 'RH17VTS',
    name: '트롬 인버터 건조기 실속형 17kg',
    desc: '콤팩트한 17kg 용량과 저온 제습 기술로 전기료 부담을 낮춘 실속형 건조기',
    specs: ['17kg 실속형', '저온 제습건조', '에너지 1등급'],
    price: 980000,
    stock: 12,
    cardImg: 'images/dryer-tromm-slim.png',
    lifestyleImg: 'images/dryer-lifestyle.png',
    optionLabel: '추가 옵션 선택',
    options: [
      { id: 'cap22', label: '용량 22kg', extra: 100000, img: null }
    ]
  },
  {
    id: 12,
    category: '건조기',
    modelCode: 'DV24B9760BE',
    name: '비스포크 그랑데 AI 건조기 24kg',
    desc: '두꺼운 겨울 이불까지 한 번에 건조하는 소프트 샌드 컬러 24kg 대용량 건조기',
    specs: ['24kg 초대용량', '소프트 샌드', 'AI 맞춤건조'],
    price: 1580000,
    stock: 22,
    cardImg: 'images/dryer-bespoke-24kg.png',
    lifestyleImg: 'images/dryer-lifestyle.png',
    optionLabel: '추가 옵션 선택',
    options: [
      { id: 'cap22', label: '용량 26kg', extra: 100000, img: null }
    ]
  }
];

// SRS v4.3 테스트 계정 5종 (admin01 + user01~user04)
const DEFAULT_USERS = [
  {
    id: 'admin01',
    email: 'admin1@test.com',
    pw: 'Admin1234!',
    name: '관리자01',
    role: 'admin',
    points: 0,
    pointHistory: [],
    coupons: []
  },
  {
    id: 'user01',
    email: 'user1@test.com',
    pw: 'Test1234!',
    name: '김회원(user01)',
    role: 'user',
    points: 10000,
    pointHistory: [
      { date: '2026-11-17', desc: '초기 테스트 포인트 지급', amount: 10000, balance: 10000 }
    ],
    coupons: [
      { id: 'CP-U1-1', title: '웰컴 쿠폰 (50,000원 할인)', amount: 50000, expiry: '2026-12-31', status: '사용가능' }
    ]
  },
  {
    id: 'user02',
    email: 'user2@test.com',
    pw: 'Test1234!',
    name: '이쿠폰(user02)',
    role: 'user',
    points: 500,
    pointHistory: [
      { date: '2026-11-10', desc: '초기 보유 포인트', amount: 500, balance: 500 }
    ],
    coupons: [
      { id: 'CP-U2-EXP', title: '웰컴 쿠폰 (기간만료 테스트)', amount: 50000, expiry: '2026-10-31', status: '기간만료' },
      { id: 'CP-U2-USED', title: '웰컴 쿠폰 (사용완료 테스트)', amount: 50000, expiry: '2026-12-31', status: '사용완료' }
    ]
  },
  {
    id: 'user03',
    email: 'user3@test.com',
    pw: 'Test1234!',
    name: '박주문(user03)',
    role: 'user',
    points: 35000,
    pointHistory: [
      { date: '2026-11-15', desc: '주문 적립 포인트', amount: 35000, balance: 35000 }
    ],
    coupons: []
  },
  {
    id: 'user04',
    email: 'user4@test.com',
    pw: 'Test1234!',
    name: '최신규(user04)',
    role: 'user',
    points: 0,
    pointHistory: [],
    coupons: []
  }
];

const DEFAULT_ORDERS = [
  {
    orderId: 'ORD-20261117-01',
    orderDate: '2026-11-17',
    userId: 'user03',
    userName: '박주문(user03)',
    address: '경기도 안산시 단원구 중앙대로 123',
    items: [
      { productId: 1, category: '냉장고', name: '비스포크 4도어 냉장고', modelCode: 'RF85B9111AP', optionText: '노크온 (+120,000원)', qty: 1, unitPrice: 2120000 }
    ],
    multiDiscount: 0,
    couponId: '',
    couponDiscount: 0,
    pointUsed: 0,
    cardDiscount: 106000,
    amount: 2014000,
    earnedPoints: 20140,
    status: '결제완료'
  },
  {
    orderId: 'ORD-20261116-02',
    orderDate: '2026-11-16',
    userId: 'user03',
    userName: '박주문(user03)',
    address: '경기도 안산시 단원구 중앙대로 123',
    items: [
      { productId: 5, category: '세탁기', name: '트롬 오브제 세탁기', modelCode: 'FX25WSQ', optionText: '옵션 없음', qty: 1, unitPrice: 1500000 }
    ],
    multiDiscount: 0,
    couponId: '',
    couponDiscount: 0,
    pointUsed: 0,
    cardDiscount: 0,
    amount: 1500000,
    earnedPoints: 15000,
    status: '배송준비'
  },
  {
    orderId: 'ORD-20261114-03',
    orderDate: '2026-11-14',
    userId: 'user03',
    userName: '박주문(user03)',
    address: '경기도 안산시 단원구 중앙대로 123',
    items: [
      { productId: 9, category: '건조기', name: '트롬 오브제 건조기', modelCode: 'RD20WSQ', optionText: '용량 22kg (+100,000원)', qty: 1, unitPrice: 1550000 }
    ],
    multiDiscount: 0,
    couponId: '',
    couponDiscount: 0,
    pointUsed: 0,
    cardDiscount: 0,
    amount: 1550000,
    earnedPoints: 15500,
    status: '배송완료'
  },
  {
    orderId: 'ORD-20261113-04',
    orderDate: '2026-11-13',
    userId: 'user03',
    userName: '박주문(user03)',
    address: '경기도 안산시 단원구 중앙대로 123',
    items: [
      { productId: 11, category: '건조기', name: '트롬 인버터 건조기 실속형', modelCode: 'RH17VTS', optionText: '옵션 없음', qty: 1, unitPrice: 980000 }
    ],
    multiDiscount: 0,
    couponId: '',
    couponDiscount: 0,
    pointUsed: 0,
    cardDiscount: 0,
    amount: 980000,
    earnedPoints: 0,
    status: '취소됨'
  }
];


let products = JSON.parse(localStorage.getItem('srs43_v12_t25_products')) || JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
let users = JSON.parse(localStorage.getItem('srs43_v12_t25_users')) || JSON.parse(JSON.stringify(DEFAULT_USERS));
let currentUser = JSON.parse(localStorage.getItem('srs43_v12_t25_current_user')) || null;
let guestCart = JSON.parse(localStorage.getItem('srs43_v12_t25_guest_cart')) || [];
let userCarts = JSON.parse(localStorage.getItem('srs43_v12_t25_user_carts')) || {};
let orders = JSON.parse(localStorage.getItem('srs43_v12_t25_orders')) || JSON.parse(JSON.stringify(DEFAULT_ORDERS));

let currentCat = 'ALL';
let currentProductId = null;
let selectedOptionIds = [];
let selQty = 1;
let simCardDiscount = false;
let viewLifestyle = false;
let checkoutItemsCache = [];
let mypageTab = 'active';
let adminTab = 'sales';
let toastTimer = null;

function getActiveCart() {
  if (!currentUser) return guestCart;
  if (!userCarts[currentUser.id]) userCarts[currentUser.id] = [];
  return userCarts[currentUser.id];
}

function setActiveCart(newCart) {
  if (!currentUser) guestCart = newCart;
  else userCarts[currentUser.id] = newCart;
}

function saveState() {
  localStorage.setItem('srs43_v12_t25_products', JSON.stringify(products));
  localStorage.setItem('srs43_v12_t25_users', JSON.stringify(users));
  localStorage.setItem('srs43_v12_t25_current_user', JSON.stringify(currentUser));
  localStorage.setItem('srs43_v12_t25_guest_cart', JSON.stringify(guestCart));
  localStorage.setItem('srs43_v12_t25_user_carts', JSON.stringify(userCarts));
  localStorage.setItem('srs43_v12_t25_orders', JSON.stringify(orders));
  updateHeaderUI();
}

const formatKRW = (num) => Number(num).toLocaleString('ko-KR') + '원';

function showView(viewId) {
  if (viewId === 'view-admin') {
    if (!currentUser || currentUser.role !== 'admin') {
      openAlertModal('관리자 권한이 없습니다. 상품 목록 화면으로 이동합니다.', '권한 안내', () => showView('view-home'));
      return;
    }
  }
  if ((viewId === 'view-checkout' || viewId === 'view-mypage') && !currentUser) {
    openAlertModal('로그인이 필요한 서비스입니다.', '로그인 안내', () => openAuthView('login'));
    return;
  }

  document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(viewId).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (viewId === 'view-home') renderProducts();
  if (viewId === 'view-cart') renderCart();
  if (viewId === 'view-checkout') renderCheckout();
  if (viewId === 'view-mypage') renderMyPage();
  if (viewId === 'view-admin') renderAdmin();
}

function updateHeaderUI() {
  const activeCart = getActiveCart();
  const totalQty = activeCart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('cartBadge').innerText = totalQty;

  const utilAuth = document.getElementById('utilAuthLinks');
  const adminBtn = document.getElementById('adminNavBtn');

  if (currentUser && currentUser.role === 'admin') {
    adminBtn.style.display = 'inline-flex';
  } else {
    adminBtn.style.display = 'none';
  }

  if (currentUser) {
    const availCoupons = (currentUser.coupons || []).filter(c => c.status === '사용가능').length;
    utilAuth.innerHTML = `
      <span><strong>${currentUser.name}</strong>님 (${currentUser.role === 'admin' ? '관리자' : `${currentUser.points.toLocaleString()}P · 쿠폰 ${availCoupons}장`})</span>
      <span class="util-divider">|</span>
      <button onclick="showView('view-mypage')">마이페이지</button>
      <span class="util-divider">|</span>
      <button onclick="logout()">로그아웃</button>
    `;
  } else {
    utilAuth.innerHTML = `
      <button onclick="openAuthView('login')">로그인</button>
      <span class="util-divider">|</span>
      <button onclick="openAuthView('signup')">회원가입</button>
    `;
  }
}

// ============================================================================
// [2] 깔끔한 텍스트 전용 장바구니 토스트 팝업 (이미지 없음)
// ============================================================================
function showCartToast(productName, qty) {
  const toast = document.getElementById('cartToast');
  document.getElementById('toastTitle').innerText = '장바구니에 상품이 담겼습니다.';
  document.getElementById('toastSub').innerText = `${productName} (${qty}개)`;

  toast.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}


// ============================================================================
// [2-B] 브라우저 alert / confirm 대체 커스텀 모달창
// ============================================================================
let _uiAlertCallback = null;

function openAlertModal(message, title = '안내', onClose = null) {
  document.getElementById('uiAlertTitle').innerText = title;
  document.getElementById('uiAlertMessage').innerText = message;
  document.getElementById('uiAlertCancelBtn').style.display = 'none';
  document.getElementById('uiAlertOkBtn').innerText = '확인';
  _uiAlertCallback = onClose || null;
  document.getElementById('uiAlertModal').classList.add('open');
}

function openConfirmModal(message, onConfirm, title = '확인') {
  document.getElementById('uiAlertTitle').innerText = title;
  document.getElementById('uiAlertMessage').innerText = message;
  document.getElementById('uiAlertCancelBtn').style.display = 'inline-flex';
  document.getElementById('uiAlertOkBtn').innerText = '확인';
  _uiAlertCallback = (confirmed) => {
    if (confirmed && typeof onConfirm === 'function') {
      onConfirm();
    }
  };
  document.getElementById('uiAlertModal').classList.add('open');
}

function resolveUiAlert(confirmed) {
  const modal = document.getElementById('uiAlertModal');
  if (modal) modal.classList.remove('open');
  const cb = _uiAlertCallback;
  _uiAlertCallback = null;
  if (typeof cb === 'function') {
    cb(confirmed);
  }
}

function goCartFromToast() {
  const toast = document.getElementById('cartToast');
  toast.classList.remove('show');
  if (toastTimer) clearTimeout(toastTimer);
  showView('view-cart');
}

// ============================================================================
// [3] S-01 로그인 / 회원가입
// ============================================================================
function openAuthView(mode = 'login') {
  switchAuthTab(mode);
  showView('view-auth');
}

function switchAuthTab(mode) {
  document.getElementById('tabLoginBtn').classList.toggle('active', mode === 'login');
  document.getElementById('tabSignupBtn').classList.toggle('active', mode === 'signup');
  document.getElementById('loginFormPanel').style.display = mode === 'login' ? 'block' : 'none';
  document.getElementById('signupFormPanel').style.display = mode === 'signup' ? 'block' : 'none';
  document.getElementById('loginError').innerText = '';
  document.getElementById('regError').innerText = '';
}

function validateSignupRealtime() {
  const id = document.getElementById('regId').value.trim();
  const pw = document.getElementById('regPw').value;
  const idHint = document.getElementById('regIdHint');
  const pwHint = document.getElementById('regPwHint');

  const idValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,8}$/.test(id);
  idHint.className = 'rule-hint ' + (id ? (idValid ? 'ok' : 'bad') : '');
  idHint.innerText = idValid ? '✓ 사용 가능한 아이디 형식입니다.' : '영문과 숫자를 모두 포함한 8자 이하 (예: user01)';

  const types = [/[A-Za-z]/.test(pw), /\d/.test(pw), /[^A-Za-z0-9]/.test(pw)].filter(Boolean).length;
  const pwValid = pw.length >= 8 && pw.length <= 20 && types >= 2;
  pwHint.className = 'rule-hint ' + (pw ? (pwValid ? 'ok' : 'bad') : '');
  pwHint.innerText = pwValid ? '✓ 안전한 비밀번호 조합입니다.' : '8~20자, 영문·숫자·특수문자 중 2종 이상 조합 필수';
}

function mergeGuestCartIntoUser(userId) {
  if (guestCart.length === 0) return;
  if (!userCarts[userId]) userCarts[userId] = [];
  const target = userCarts[userId];

  guestCart.forEach(gItem => {
    const prod = products.find(p => p.id === gItem.productId);
    const maxAllowed = prod ? Math.min(99, prod.stock) : 99;
    const same = target.find(t => t.productId === gItem.productId && t.optionKey === gItem.optionKey);
    if (same) {
      same.qty = Math.min(maxAllowed, same.qty + gItem.qty);
    } else {
      target.push({ ...gItem, qty: Math.min(maxAllowed, gItem.qty) });
    }
  });
  guestCart = [];
}

function handleSignup(e) {
  e.preventDefault();
  const id = document.getElementById('regId').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const pw = document.getElementById('regPw').value;
  const errEl = document.getElementById('regError');

  if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,8}$/.test(id)) {
    errEl.innerText = '아이디는 영문과 숫자를 모두 포함한 8자 이하로 입력해 주세요. (예: user01)';
    return;
  }
  if (users.some(u => u.id.toLowerCase() === id.toLowerCase())) {
    errEl.innerText = '이미 사용 중인 아이디입니다.';
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errEl.innerText = '올바른 이메일 형식(아이디@도메인)을 입력해 주세요.';
    return;
  }
  if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
    errEl.innerText = '이미 가입된 이메일입니다.';
    return;
  }
  const types = [/[A-Za-z]/.test(pw), /\d/.test(pw), /[^A-Za-z0-9]/.test(pw)].filter(Boolean).length;
  if (pw.length < 8 || pw.length > 20 || types < 2) {
    errEl.innerText = '비밀번호는 8~20자이며 영문·숫자·특수문자 중 2종 이상 조합해야 합니다.';
    return;
  }

  errEl.innerText = '';
  const newUser = {
    id,
    email,
    pw,
    name: `${id}님`,
    role: 'user',
    points: 0,
    pointHistory: [],
    coupons: [
      { id: 'CP-' + Date.now(), title: '신규 가입 웰컴 쿠폰 (50,000원)', amount: 50000, expiry: '2026-12-31', status: '사용가능' }
    ]
  };
  users.push(newUser);
  currentUser = JSON.parse(JSON.stringify(newUser));
  mergeGuestCartIntoUser(currentUser.id);
  saveState();
  openAlertModal('회원가입이 완료되었습니다! 웰컴 쿠폰(50,000원 할인)이 즉시 발급되었습니다.', '가입 완료', () => showView('view-home'));
}

function handleLogin(e) {
  e.preventDefault();
  const idOrEmail = document.getElementById('loginId').value.trim();
  const pw = document.getElementById('loginPw').value;
  const errEl = document.getElementById('loginError');

  const found = users.find(u => (u.id === idOrEmail || u.email === idOrEmail) && u.pw === pw);
  if (!found) {
    errEl.innerText = '아이디(이메일) 또는 비밀번호가 일치하지 않습니다.';
    return;
  }

  errEl.innerText = '';
  currentUser = JSON.parse(JSON.stringify(found));
  if (currentUser.role !== 'admin') {
    mergeGuestCartIntoUser(currentUser.id);
  }
  saveState();
  if (found.role === 'admin') showView('view-admin');
  else showView('view-home');
}

function logout() {
  currentUser = null;
  saveState();
  showView('view-home');
}

// ============================================================================
// [4] S-02 상품 목록 (실시간 잔여 재고 표시: 구매 시 차감 / 주문 취소 시 복원)
// ============================================================================
function filterCategory(cat) {
  currentCat = cat;
  document.querySelectorAll('#catNav button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === cat);
  });
  document.querySelectorAll('.cat-item').forEach(card => {
    card.classList.toggle('active', card.dataset.cat === cat);
  });
  document.getElementById('sectionTitle').innerText = cat === 'ALL' ? '전체 대형가전' : `${cat} 전체 모델`;
  showView('view-home');
}


function syncSearchInputs(val) {
  const gnb = document.getElementById('gnbSearchInput');
  const cat = document.getElementById('catalogSearchInput');
  if (gnb && gnb.value !== val) gnb.value = val;
  if (cat && cat.value !== val) cat.value = val;
  renderProducts();
}

function renderProducts() {
  const sort = document.getElementById('sortSelect').value;
  const rawKeyword = document.getElementById('gnbSearchInput').value.trim();
  const keyword = rawKeyword.toLowerCase();

  let list = products.filter(p => {
    const matchCat = currentCat === 'ALL' || p.category === currentCat;
    const matchKey = !keyword || p.name.toLowerCase().includes(keyword) || p.category.toLowerCase().includes(keyword) || p.modelCode.toLowerCase().includes(keyword);
    return matchCat && matchKey;
  });

  if (sort === 'latest') list.sort((a, b) => b.id - a.id);
  if (sort === 'asc') list.sort((a, b) => a.price - b.price);
  if (sort === 'desc') list.sort((a, b) => b.price - a.price);

  document.getElementById('productCount').innerText = `총 ${list.length}개 모델`;

  const grid = document.getElementById('productGrid');
  if (list.length === 0) {
    grid.innerHTML = '<div class="white-panel" style="grid-column:1/-1; text-align:center; color:var(--text-muted);">검색 조건에 일치하는 대형가전이 없습니다.</div>';
    return;
  }

  grid.innerHTML = list.map(p => `
    <div class="prod-card">
      <div class="prod-img-area" onclick="openPDP(${p.id})">
        <div class="tag-row-top">
          <span class="tag-flag ${p.stock === 0 ? 'soldout' : ''}">${p.stock > 0 ? `재고 ${p.stock}대` : '품절'}</span>
        </div>
        <div class="prod-img-inner">
          <img src="${p.cardImg}" alt="${p.name}" />
        </div>
      </div>
      <div class="prod-info">
        <div class="prod-model">
          <span>${p.category}</span>
          <span>${p.modelCode}</span>
        </div>
        <div class="prod-name" onclick="openPDP(${p.id})">${p.name}</div>
        <div class="prod-specs">
          ${p.specs.map(s => `<span>${s}</span>`).join('')}
        </div>
        <div class="price-section">
          <div class="price-main">
            <span class="price-val">${formatKRW(p.price)}</span>
          </div>
          <div class="price-sub">제휴카드 5% 혜택가 ${formatKRW(Math.round(p.price * 0.95))}</div>
        </div>
        <div class="card-actions">
          <button class="btn-line" ${p.stock === 0 ? 'disabled' : ''} onclick="quickAddCart(${p.id})">장바구니</button>
          <button class="btn-solid" ${p.stock === 0 ? 'disabled' : ''} onclick="openPDP(${p.id})">
            ${p.stock === 0 ? '품절' : '상세 · 옵션선택'}
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function quickAddCart(id) {
  const p = products.find(item => item.id === id);
  if (!p || p.stock === 0) return openAlertModal('품절된 상품입니다.');

  const activeCart = getActiveCart();
  const sameInCart = activeCart.filter(i => i.productId === p.id).reduce((s, i) => s + i.qty, 0);
  if (sameInCart + 1 > p.stock) {
    return openAlertModal(`남은 재고 수량(${p.stock}대)을 초과하여 담을 수 없습니다.`);
  }

  const existing = activeCart.find(i => i.productId === p.id && i.optionKey === 'NONE');
  if (existing) {
    existing.qty += 1;
  } else {
    activeCart.push({
      uid: Date.now() + Math.random(),
      productId: p.id,
      category: p.category,
      name: p.name,
      modelCode: p.modelCode,
      optionKey: 'NONE',
      optionText: '기본 사양 (추가 옵션 없음)',
      unitPrice: p.price,
      qty: 1,
      img: p.cardImg,
      checked: true
    });
  }
  setActiveCart(activeCart);
  saveState();
  showCartToast(p.name, 1);
}

// ============================================================================
// [5] S-03 상품 상세
// ============================================================================
function openPDP(id) {
  currentProductId = id;
  selectedOptionIds = [];
  selQty = 1;
  simCardDiscount = false;
  viewLifestyle = false;
  renderPDP();
  showView('view-pdp');
}

function toggleProductOption(optId) {
  const idx = selectedOptionIds.indexOf(optId);
  if (idx > -1) {
    selectedOptionIds.splice(idx, 1);
  } else {
    selectedOptionIds.push(optId);
  }
  viewLifestyle = false;
  renderPDP();
}

function renderPDP() {
  const p = products.find(item => item.id === currentProductId);
  if (!p) return;

  const chosenOpts = p.options.filter(o => selectedOptionIds.includes(o.id));
  const optionExtraSum = chosenOpts.reduce((s, o) => s + o.extra, 0);
  const unitPrice = p.price + optionExtraSum;
  const baseTotal = unitPrice * selQty;
  const cardDiscountAmt = simCardDiscount ? Math.round(baseTotal * 0.05) : 0;
  const benefitTotal = baseTotal - cardDiscountAmt;

  const modelImg = p.cardImg;
  const mainImg = viewLifestyle ? p.lifestyleImg : modelImg;

  document.getElementById('pdpContent').innerHTML = `
    <div style="margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
      <button class="icon-btn" onclick="showView('view-home')">← 상품 목록으로</button>
      <span style="font-size:12px; color:var(--text-muted);">모델명 : ${p.modelCode}</span>
    </div>
    <div class="pdp-grid">
      <div>
        <div class="pdp-stage ${viewLifestyle ? 'cover' : ''}">
          <img src="${mainImg}" alt="${p.name}" />
        </div>
        <div class="pdp-thumbs">
          <button class="pdp-thumb ${!viewLifestyle ? 'active' : ''}" onclick="viewLifestyle=false; renderPDP();" title="제품 단독 컷">
            <img src="${modelImg}" alt="단독 컷" />
          </button>
          <button class="pdp-thumb ${viewLifestyle ? 'active' : ''}" onclick="viewLifestyle=true; renderPDP();" title="공간 연출 컷">
            <img src="${p.lifestyleImg}" alt="연출 컷" />
          </button>
        </div>
      </div>

      <div>
        <div style="font-size:13px; font-weight:700; color:var(--brand); margin-bottom:6px;">
          ${p.category} · ${p.stock > 0 ? `남은 재고 ${p.stock}대` : '일시 품절'}
        </div>
        <h2 style="font-size:24px; font-weight:800; margin-bottom:8px;">${p.name}</h2>
        <p style="font-size:14px; color:var(--text-secondary); margin-bottom:14px;">${p.desc}</p>
        <div class="prod-specs" style="margin-bottom:16px;">
          ${p.specs.map(s => `<span>${s}</span>`).join('')}
        </div>
        <div style="font-size:14px; color:var(--text-secondary);">
          기준 판매가 : <strong>${formatKRW(p.price)}</strong>
        </div>

        <div class="opt-block">
          <div class="opt-title">
            <span>${p.optionLabel}</span>
            ${selectedOptionIds.length > 0
      ? `<button type="button" class="btn-clear-opts" onclick="selectedOptionIds=[]; renderPDP();">✕ 전체 선택 해제</button>`
      : ''}
          </div>
          <div class="opt-pills">
            ${p.options.map(o => {
        const isSelected = selectedOptionIds.includes(o.id);
        return `
                <button type="button" class="opt-pill ${isSelected ? 'active' : ''}" onclick="toggleProductOption('${o.id}')">
                  <span>${o.label}</span>
                  <span class="opt-price-tag">+${o.extra.toLocaleString()}원</span>
                </button>
              `;
      }).join('')}
          </div>
        </div>

        <div class="opt-block">
          <div class="opt-title">
            <span>수량 선택</span>
          </div>
          <div class="qty-box">
            <button type="button" ${p.stock === 0 ? 'disabled' : ''} onclick="changePdpQty(-1)">-</button>
            <input type="number" id="pdpQtyInput" value="${selQty}" min="1" max="${Math.min(99, p.stock)}"
              ${p.stock === 0 ? 'disabled' : ''} onchange="handlePdpQtyInput(this.value)" />
            <button type="button" ${p.stock === 0 ? 'disabled' : ''} onclick="changePdpQty(1)">+</button>
          </div>
        </div>

        <div class="sim-box">
          <div class="sim-row">
            <span>기본 판매가 + 선택 옵션(${chosenOpts.length}개) × ${selQty}개</span>
            <strong>${formatKRW(baseTotal)}</strong>
          </div>
          <div class="sim-row">
            <label style="display:flex; align-items:center; gap:6px; cursor:pointer; font-weight:600;">
              <input type="checkbox" ${simCardDiscount ? 'checked' : ''} onchange="simCardDiscount=this.checked; renderPDP();" style="accent-color:var(--brand);" />
              제휴 카드 즉시 할인 (5%) 적용
            </label>
            <span style="color:var(--brand); font-weight:700;">-${formatKRW(cardDiscountAmt)}</span>
          </div>
          <div style="border-top:1px solid #E2D9D0; padding-top:10px; margin-top:8px; display:flex; justify-content:space-between; align-items:center;">
            <span style="font-weight:700;">최대 혜택가</span>
            <span style="font-size:23px; font-weight:800; color:var(--brand);">${formatKRW(benefitTotal)}</span>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:18px;">
          <button class="btn-line" style="padding:14px;" ${p.stock === 0 ? 'disabled' : ''} onclick="addPdpToCart(false)">장바구니 담기</button>
          <button class="btn-solid" style="padding:14px;" ${p.stock === 0 ? 'disabled' : ''} onclick="addPdpToCart(true)">바로 구매하기</button>
        </div>
      </div>
    </div>
  `;
}
function changePdpQty(delta) {
  const p = products.find(item => item.id === currentProductId);
  const next = selQty + delta;
  if (next < 1) return openAlertModal('수량은 1 이상이어야 합니다.');
  if (next > 99) return openAlertModal('최대 주문 가능 수량은 99개입니다.');
  if (next > p.stock) return openAlertModal(`남은 재고 수량(${p.stock}대)을 초과할 수 없습니다.`);
  selQty = next;
  renderPDP();
}

function handlePdpQtyInput(val) {
  const p = products.find(item => item.id === currentProductId);
  const num = Number(val);
  if (!Number.isInteger(num) || num < 1) {
    openAlertModal('수량은 1 이상의 정수만 입력 가능합니다.');
    selQty = 1;
  } else if (num > 99) {
    openAlertModal('최대 주문 가능 수량은 99개입니다.');
    selQty = Math.min(99, p.stock);
  } else if (num > p.stock) {
    openAlertModal(`남은 재고 수량(${p.stock}대)을 초과할 수 없습니다.`);
    selQty = p.stock;
  } else {
    selQty = num;
  }
  renderPDP();
}

function buildSelectedProductPayload(p) {
  const chosenOpts = p.options.filter(o => selectedOptionIds.includes(o.id));
  const optionExtraSum = chosenOpts.reduce((s, o) => s + o.extra, 0);
  const unitPrice = p.price + optionExtraSum;
  const optionKey = chosenOpts.length > 0 ? chosenOpts.map(o => o.id).sort().join('+') : 'NONE';
  const optionText = chosenOpts.length > 0
    ? chosenOpts.map(o => `${o.label}(+${o.extra.toLocaleString()}원)`).join(', ')
    : '기본 사양 (추가 옵션 없음)';

  const modelImg = p.cardImg;

  return {
    uid: Date.now() + Math.random(),
    productId: p.id,
    category: p.category,
    name: p.name,
    modelCode: p.modelCode,
    optionKey,
    optionText,
    unitPrice,
    qty: selQty,
    img: modelImg,
    checked: true
  };
}

function addPdpToCart(isDirectBuy) {
  const p = products.find(item => item.id === currentProductId);
  if (!p || p.stock === 0) return openAlertModal('품절된 상품입니다.');

  const payload = buildSelectedProductPayload(p);

  if (isDirectBuy) {
    if (!currentUser) {
      const gCart = getActiveCart();
      const same = gCart.find(i => i.productId === p.id && i.optionKey === payload.optionKey);
      if (same) same.qty = Math.min(Math.min(99, p.stock), same.qty + payload.qty);
      else gCart.push(payload);
      setActiveCart(gCart);
      saveState();
      openAlertModal('바로 구매를 위해 로그인이 필요합니다. 로그인 후 장바구니 내역이 자동 병합됩니다.', '로그인 안내', () => openAuthView('login'));
      return;
    }
    checkoutItemsCache = [payload];
    showView('view-checkout');
    return;
  }

  const activeCart = getActiveCart();
  const totalInCartForProduct = activeCart.filter(i => i.productId === p.id).reduce((s, i) => s + i.qty, 0);
  if (totalInCartForProduct + payload.qty > p.stock) {
    return openAlertModal(`장바구니 합산 수량이 남은 재고(${p.stock}대)를 초과할 수 없습니다.`);
  }

  const same = activeCart.find(i => i.productId === p.id && i.optionKey === payload.optionKey);
  if (same) {
    if (same.qty + payload.qty > 99) return openAlertModal('최대 주문 수량은 99개입니다.');
    same.qty += payload.qty;
  } else {
    activeCart.push(payload);
  }
  setActiveCart(activeCart);
  saveState();
  showCartToast(payload.name, payload.qty);
}

// ============================================================================
// [6] S-04 장바구니
// ============================================================================
let cartUsePoints = 0;
let cartCardDiscount = false;

function renderCart() {
  const activeCart = getActiveCart();
  const listEl = document.getElementById('cartListArea');
  const sumEl = document.getElementById('cartSummaryArea');

  if (activeCart.length === 0) {
    listEl.innerHTML = '<div class="white-panel" style="text-align:center; padding:56px 20px; color:var(--text-muted);">장바구니에 담긴 상품이 없습니다.</div>';
    sumEl.innerHTML = '';
    return;
  }

  const allChecked = activeCart.every(i => i.checked);
  listEl.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; padding:10px 14px; background:#fff; border:1px solid var(--line); border-radius:8px;">
      <label style="display:flex; align-items:center; gap:8px; font-size:13px; font-weight:700; cursor:pointer;">
        <input type="checkbox" ${allChecked ? 'checked' : ''} onchange="toggleAllCart(this.checked)" style="width:16px; height:16px; accent-color:var(--brand);" />
        전체 선택 (${activeCart.filter(i => i.checked).length}/${activeCart.length})
      </label>
      <button type="button" class="icon-btn" style="padding:5px 12px; font-size:12px;" onclick="deleteSelectedCart()">선택 삭제</button>
    </div>
  ` + activeCart.map((item, idx) => `
    <div class="cart-row">
      <input type="checkbox" ${item.checked ? 'checked' : ''} onchange="toggleSingleCart(${idx})" style="width:17px; height:17px; accent-color:var(--brand);" />
      <div class="cart-left">
        <img src="${item.img}" alt="${item.name}" />
        <div>
          <div style="font-size:11px; color:var(--text-muted);">${item.category} · ${item.modelCode}</div>
          <div style="font-weight:700; font-size:15px;">${item.name}</div>
          <div style="font-size:12px; color:var(--brand); margin:2px 0;">선택 옵션: ${item.optionText}</div>
          <div style="font-size:14px; font-weight:700;">${formatKRW(item.unitPrice)} × ${item.qty}개 = ${formatKRW(item.unitPrice * item.qty)}</div>
        </div>
      </div>
      <div style="display:flex; align-items:center; gap:6px;">
        <button class="icon-btn" style="padding:4px 10px;" onclick="changeCartQty(${idx}, -1)">-</button>
        <span style="font-weight:700; min-width:24px; text-align:center;">${item.qty}</span>
        <button class="icon-btn" style="padding:4px 10px;" onclick="changeCartQty(${idx}, 1)">+</button>
        <button class="icon-btn" style="padding:4px 10px; color:var(--danger);" onclick="removeCartItem(${idx})">삭제</button>
      </div>
    </div>
  `).join('');

  const checkedItems = activeCart.filter(i => i.checked);
  const subtotal = checkedItems.reduce((s, i) => s + i.unitPrice * i.qty, 0);

  const distinctProductIds = new Set(checkedItems.map(i => i.productId));
  const multiDiscount = distinctProductIds.size >= 2 ? Math.round(subtotal * 0.05) : 0;

  const afterMulti = Math.max(0, subtotal - multiDiscount);
  const maxPoints = currentUser ? currentUser.points : 0;
  if (cartUsePoints > maxPoints) cartUsePoints = maxPoints;
  if (cartUsePoints > afterMulti) cartUsePoints = afterMulti;

  const afterPoint = Math.max(0, afterMulti - cartUsePoints);
  const cardDiscount = cartCardDiscount ? Math.round(afterPoint * 0.05) : 0;
  const finalPrice = Math.max(0, afterPoint - cardDiscount);

  sumEl.innerHTML = `
    <div class="checkout-card">
      <h3 style="font-size:17px; margin-bottom:16px;">장바구니 결제 예정 금액</h3>
      <div class="sum-line"><span>선택 상품 합계 (${checkedItems.length}건)</span><span>${formatKRW(subtotal)}</span></div>
      <div class="sum-line" style="color:${multiDiscount > 0 ? 'var(--brand)' : 'var(--text-muted)'};">
        <span>다품목 할인 (서로 다른 2종 이상 5%)</span>
        <span>-${formatKRW(multiDiscount)}</span>
      </div>

      <div style="margin:14px 0; padding:12px 0; border-top:1px solid var(--line); border-bottom:1px solid var(--line);">
        <label style="display:block; font-size:12px; font-weight:700; margin-bottom:6px;">
          예상 포인트 할인 ${currentUser ? `(보유: ${currentUser.points.toLocaleString()}P)` : '(로그인 시 적용)'}
        </label>
        <input type="number" value="${cartUsePoints}" min="0" max="${maxPoints}" step="100"
          ${!currentUser ? 'disabled' : ''} style="width:100%; margin-bottom:12px;"
          onchange="cartUsePoints=Math.max(0, Math.min(${maxPoints}, Number(this.value)||0)); renderCart();" />

        <label style="display:flex; align-items:center; gap:6px; font-size:13px; font-weight:600; cursor:pointer;">
          <input type="checkbox" ${cartCardDiscount ? 'checked' : ''} onchange="cartCardDiscount=this.checked; renderCart();" style="accent-color:var(--brand);" />
          제휴 카드 추가 할인 (5%) 적용
        </label>
      </div>

      <div class="sum-line"><span>포인트/카드 할인</span><span>-${formatKRW(cartUsePoints + cardDiscount)}</span></div>
      <div class="sum-line" style="font-size:18px; font-weight:800; margin-top:12px;">
        <span>최종 결제가격</span>
        <span style="color:var(--brand);">${formatKRW(finalPrice)}</span>
      </div>

      <button class="btn-solid" style="width:100%; padding:14px; margin-top:14px; font-size:15px;"
        ${checkedItems.length === 0 ? 'disabled' : ''} onclick="goOrderFromCart()">
        주문하기
      </button>
    </div>
  `;
}

function toggleAllCart(checked) {
  const activeCart = getActiveCart();
  activeCart.forEach(i => i.checked = checked);
  setActiveCart(activeCart);
  saveState();
  renderCart();
}

function toggleSingleCart(idx) {
  const activeCart = getActiveCart();
  activeCart[idx].checked = !activeCart[idx].checked;
  setActiveCart(activeCart);
  saveState();
  renderCart();
}

function changeCartQty(idx, delta) {
  const activeCart = getActiveCart();
  const item = activeCart[idx];
  if (!item) return;
  const prod = products.find(p => p.id === item.productId);
  const next = item.qty + delta;

  if (next < 1) {
    return openAlertModal('최소 주문 수량은 1개입니다.', '수량 안내');
  }
  if (next > 99) {
    return openAlertModal('최대 주문 가능 수량은 99개입니다.', '수량 안내');
  }
  if (prod) {
    const otherQty = activeCart
      .filter((c, i) => i !== idx && c.productId === item.productId)
      .reduce((s, c) => s + c.qty, 0);
    if (otherQty + next > prod.stock) {
      return openAlertModal(`남은 재고 수량(${prod.stock}대)을 초과할 수 없습니다.`, '재고 안내');
    }
  }

  item.qty = next;
  setActiveCart(activeCart);
  saveState();
  renderCart();
}

function removeCartItem(idx) {
  const activeCart = getActiveCart();
  activeCart.splice(idx, 1);
  setActiveCart(activeCart);
  saveState();
  renderCart();
}

function deleteSelectedCart() {
  const activeCart = getActiveCart();
  if (!activeCart.some(i => i.checked)) return openAlertModal('삭제할 상품을 선택해 주세요.');
  setActiveCart(activeCart.filter(i => !i.checked));
  saveState();
  renderCart();
}

function goOrderFromCart() {
  const activeCart = getActiveCart();
  const checked = activeCart.filter(i => i.checked);
  if (checked.length === 0) return openAlertModal('주문할 상품을 선택해 주세요.');

  if (!currentUser) {
    openAlertModal('주문을 위해 로그인이 필요합니다. 로그인 후 장바구니 내역이 자동 병합됩니다.', '로그인 안내', () => openAuthView('login'));
    return;
  }

  checkoutItemsCache = JSON.parse(JSON.stringify(checked));
  showView('view-checkout');
}

// ============================================================================
// [7] S-05 주문·결제 페이지 (결제 완료 시 재고 즉시 차감 -> 목록/상세 UI 즉시 반영)
// ============================================================================
function renderCheckout() {
  const box = document.getElementById('checkoutContent');
  if (!currentUser || checkoutItemsCache.length === 0) {
    box.innerHTML = '<div class="white-panel">주문할 상품 정보가 없습니다.</div>';
    return;
  }

  const subtotal = checkoutItemsCache.reduce((s, i) => s + i.unitPrice * i.qty, 0);
  const distinctIds = new Set(checkoutItemsCache.map(i => i.productId));
  const multiDiscount = distinctIds.size >= 2 ? Math.round(subtotal * 0.05) : 0;

  const availCoupons = (currentUser.coupons || []).filter(c => c.status === '사용가능');
  const selCouponId = document.getElementById('orderCouponSel')?.value || '';
  const appliedCoupon = availCoupons.find(c => c.id === selCouponId);
  const couponDiscount = appliedCoupon ? appliedCoupon.amount : 0;

  const afterMultiCoupon = Math.max(0, subtotal - multiDiscount - couponDiscount);
  const maxPoints = currentUser.points;
  let usePoint = Number(document.getElementById('orderPointInput')?.value || 0);
  if (usePoint < 0 || Number.isNaN(usePoint)) usePoint = 0;
  if (usePoint > maxPoints) usePoint = maxPoints;
  if (usePoint > afterMultiCoupon) usePoint = afterMultiCoupon;

  const afterPoint = Math.max(0, afterMultiCoupon - usePoint);
  const useCard = document.getElementById('orderCardCheck')?.checked || false;
  const cardDiscount = useCard ? Math.round(afterPoint * 0.05) : 0;
  const finalAmount = Math.max(0, afterPoint - cardDiscount);
  const earnedPoints = Math.round(finalAmount * 0.01);

  box.innerHTML = `
    <div class="cart-grid">
      <div>
        <div class="white-panel">
          <h3 style="font-size:17px; margin-bottom:14px;">배송 및 전문기사 설치 주소</h3>
          <div class="field-group">
            <label>받는 분</label>
            <input type="text" id="orderReceiver" value="${currentUser.name}" />
          </div>
          <div class="field-group">
            <label>설치 주소</label>
            <input type="text" id="orderAddress" value="" placeholder="배송 및 설치 주소를 입력하세요" />
          </div>
        </div>

        <div class="white-panel">
          <h3 style="font-size:17px; margin-bottom:14px;">주문 상품 정보 (${checkoutItemsCache.length}건)</h3>
          ${checkoutItemsCache.map(item => `
            <div class="cart-row">
              <div class="cart-left">
                <img src="${item.img}" alt="${item.name}" />
                <div>
                  <div style="font-weight:700;">${item.name} (${item.modelCode})</div>
                  <div style="font-size:12px; color:var(--brand);">${item.optionText}</div>
                  <div style="font-size:13px; margin-top:4px;">${formatKRW(item.unitPrice)} × ${item.qty}개 = <strong>${formatKRW(item.unitPrice * item.qty)}</strong></div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="checkout-card">
        <h3 style="font-size:17px; margin-bottom:16px;">쿠폰 · 포인트 · 결제 금액</h3>
        <div class="sum-line"><span>상품 합계</span><span>${formatKRW(subtotal)}</span></div>
        <div class="sum-line" style="color:${multiDiscount > 0 ? 'var(--brand)' : 'var(--text-muted)'};">
          <span>다품목 할인 (2종 이상 5%)</span><span>-${formatKRW(multiDiscount)}</span>
        </div>

        <div style="margin:14px 0; padding:14px 0; border-top:1px solid var(--line); border-bottom:1px solid var(--line);">
          <label style="display:block; font-size:12px; font-weight:700; margin-bottom:6px;">보유 쿠폰 선택 (사용 가능 ${availCoupons.length}장)</label>
          <select id="orderCouponSel" style="width:100%; margin-bottom:12px;" onchange="renderCheckout()">
            <option value="">쿠폰 선택 안함</option>
            ${availCoupons.map(c => `<option value="${c.id}" ${selCouponId === c.id ? 'selected' : ''}>${c.title} (-${c.amount.toLocaleString()}원)</option>`).join('')}
          </select>

          <label style="display:block; font-size:12px; font-weight:700; margin-bottom:6px;">포인트 사용 (보유: ${maxPoints.toLocaleString()}P)</label>
          <input type="number" id="orderPointInput" value="${usePoint}" min="0" max="${maxPoints}" step="100"
            style="width:100%; margin-bottom:12px;" onchange="renderCheckout()" />

          <label style="display:flex; align-items:center; gap:6px; font-size:13px; font-weight:600; cursor:pointer;">
            <input type="checkbox" id="orderCardCheck" ${useCard ? 'checked' : ''} onchange="renderCheckout()" style="accent-color:var(--brand);" />
            제휴 카드 즉시 할인 (5%)
          </label>
        </div>

        <div class="sum-line"><span>쿠폰 할인</span><span>-${formatKRW(couponDiscount)}</span></div>
        <div class="sum-line"><span>포인트 사용</span><span>-${formatKRW(usePoint)}</span></div>
        <div class="sum-line"><span>제휴 카드 할인</span><span>-${formatKRW(cardDiscount)}</span></div>
        <div class="sum-line" style="color:var(--success); font-weight:700;">
          <span>결제 완료 시 적립 예정 (1%)</span><span>+${earnedPoints.toLocaleString()} P</span>
        </div>

        <div class="sum-line" style="font-size:19px; font-weight:800; border-top:1px solid var(--line); padding-top:14px; margin-top:10px;">
          <span>최종 결제 금액</span>
          <span style="color:var(--brand);">${formatKRW(finalAmount)}</span>
        </div>

        <button class="btn-solid" style="width:100%; padding:14px; margin-top:14px; font-size:15px;"
          onclick="submitOrderPayment(${finalAmount}, ${multiDiscount}, '${selCouponId}', ${couponDiscount}, ${usePoint}, ${cardDiscount}, ${earnedPoints})">
          결제하기
        </button>
      </div>
    </div>
  `;
}

function submitOrderPayment(finalAmount, multiDiscount, couponId, couponDiscount, pointUsed, cardDiscount, earnedPoints) {
  const address = document.getElementById('orderAddress').value.trim();
  if (!address) return openAlertModal('설치 주소를 입력해 주세요.');

  const qtyMap = {};
  checkoutItemsCache.forEach(i => {
    qtyMap[i.productId] = (qtyMap[i.productId] || 0) + i.qty;
  });
  for (const [pid, reqQty] of Object.entries(qtyMap)) {
    const prod = products.find(p => p.id === Number(pid));
    if (!prod || prod.stock < reqQty) {
      return openAlertModal(`[${prod ? prod.name : ''}] 남은 재고(${prod ? prod.stock : 0}대)가 부족하여 결제할 수 없습니다.`);
    }
  }

  // 구매 수량만큼 실제 재고 차감
  checkoutItemsCache.forEach(i => {
    const prod = products.find(p => p.id === i.productId);
    prod.stock -= i.qty;
  });

  const today = new Date().toISOString().slice(0, 10);

  if (couponId) {
    const targetC = (currentUser.coupons || []).find(c => c.id === couponId);
    if (targetC) targetC.status = '사용완료';
  }

  if (!currentUser.pointHistory) currentUser.pointHistory = [];
  if (pointUsed > 0) {
    currentUser.points -= pointUsed;
    currentUser.pointHistory.unshift({
      date: today,
      desc: '주문 결제 포인트 사용',
      amount: -pointUsed,
      balance: currentUser.points
    });
  }
  if (earnedPoints > 0) {
    currentUser.points += earnedPoints;
    currentUser.pointHistory.unshift({
      date: today,
      desc: '상품 구매 적립 (실결제 1%)',
      amount: earnedPoints,
      balance: currentUser.points
    });
  }

  const uIdx = users.findIndex(u => u.id === currentUser.id);
  if (uIdx !== -1) users[uIdx] = JSON.parse(JSON.stringify(currentUser));

  const newOrder = {
    orderId: 'ORD-' + today.replace(/-/g, '') + '-' + Math.floor(10 + Math.random() * 89),
    orderDate: today,
    userId: currentUser.id,
    userName: currentUser.name,
    address,
    items: JSON.parse(JSON.stringify(checkoutItemsCache)),
    multiDiscount,
    couponId,
    couponDiscount,
    pointUsed,
    cardDiscount,
    amount: finalAmount,
    earnedPoints,
    status: '결제완료'
  };
  orders.unshift(newOrder);

  const orderedUids = new Set(checkoutItemsCache.map(i => i.uid));
  const activeCart = getActiveCart().filter(i => !orderedUids.has(i.uid));
  setActiveCart(activeCart);
  checkoutItemsCache = [];

  saveState();
  openAlertModal(`결제가 완료되었습니다!
실결제 금액: ${formatKRW(finalAmount)} (적립: +${earnedPoints.toLocaleString()}P)`);
  mypageTab = 'active';
  showView('view-mypage');
}

// ============================================================================
// [8] S-06 마이페이지
// ============================================================================
function renderMyPage() {
  const box = document.getElementById('mypageContent');
  if (!currentUser) return;

  const myAllOrders = orders.filter(o => o.userId === currentUser.id);
  const activeOrders = myAllOrders.filter(o => ['결제완료', '배송준비', '설치중'].includes(o.status));
  const pastOrders = myAllOrders.filter(o => ['배송완료', '취소됨'].includes(o.status));
  const myCoupons = currentUser.coupons || [];
  const availCoupons = myCoupons.filter(c => c.status === '사용가능');
  const pHistory = currentUser.pointHistory || [];

  let tabContentHtml = '';

  if (mypageTab === 'active') {
    tabContentHtml = `
      <div class="white-panel">
        <h3 style="font-size:17px; margin-bottom:14px;">진행 중 주문 내역 (${activeOrders.length}건)</h3>
        ${activeOrders.length === 0 ? '<p style="color:var(--text-muted); font-size:13px;">진행 중인 주문 내역이 없습니다.</p>' : `
          <table>
            <thead><tr><th>주문번호</th><th>주문일</th><th>주문 상품 및 옵션</th><th>할인 내역</th><th>실결제금액</th><th>상태</th><th>관리</th></tr></thead>
            <tbody>
              ${activeOrders.map(o => `
                <tr>
                  <td><strong>${o.orderId}</strong></td>
                  <td>${o.orderDate}</td>
                  <td>${o.items.map(i => `${i.name} [${i.optionText}] × ${i.qty}개`).join('<br/>')}</td>
                  <td style="font-size:12px;">
                    다품목 -${(o.multiDiscount || 0).toLocaleString()}원 / 쿠폰 -${(o.couponDiscount || 0).toLocaleString()}원<br/>
                    포인트 -${(o.pointUsed || 0).toLocaleString()}P / 카드 -${(o.cardDiscount || 0).toLocaleString()}원
                  </td>
                  <td><strong>${formatKRW(o.amount)}</strong></td>
                  <td><strong style="color:var(--brand);">${o.status}</strong></td>
                  <td>
                    ${(o.status === '결제완료')
        ? `<button class="icon-btn" style="color:var(--danger); border-color:var(--danger);" onclick="cancelUserOrder('${o.orderId}')">주문 취소</button>`
        : `<span style="font-size:12px; color:var(--text-muted);">취소 불가 (${o.status})</span>`}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        `}
      </div>
    `;
  } else if (mypageTab === 'past') {
    tabContentHtml = `
      <div class="white-panel">
        <h3 style="font-size:17px; margin-bottom:14px;">과거 주문 내역 (${pastOrders.length}건)</h3>
        ${pastOrders.length === 0 ? '<p style="color:var(--text-muted); font-size:13px;">과거 주문 내역이 없습니다.</p>' : `
          <table>
            <thead><tr><th>주문번호</th><th>주문일</th><th>주문 상품 및 옵션</th><th>실결제금액</th><th>최종 상태</th></tr></thead>
            <tbody>
              ${pastOrders.map(o => `
                <tr>
                  <td><strong>${o.orderId}</strong></td>
                  <td>${o.orderDate}</td>
                  <td>${o.items.map(i => `${i.name} [${i.optionText}] × ${i.qty}개`).join('<br/>')}</td>
                  <td><strong>${formatKRW(o.amount)}</strong></td>
                  <td><span style="font-weight:700; color:${o.status === '취소됨' ? 'var(--danger)' : 'var(--success)'};">${o.status}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        `}
      </div>
    `;
  } else if (mypageTab === 'points') {
    tabContentHtml = `
      <div class="white-panel">
        <h3 style="font-size:17px; margin-bottom:14px;">보유 포인트 변동 내역 (현재 잔액: ${currentUser.points.toLocaleString()}P)</h3>
        ${pHistory.length === 0 ? '<p style="color:var(--text-muted); font-size:13px;">포인트 변동 이력이 없습니다.</p>' : `
          <table>
            <thead><tr><th>일자</th><th>내용</th><th>변동 포인트</th><th>잔여 포인트</th></tr></thead>
            <tbody>
              ${pHistory.map(h => `
                <tr>
                  <td>${h.date}</td>
                  <td>${h.desc}</td>
                  <td style="font-weight:700; color:${h.amount >= 0 ? 'var(--success)' : 'var(--danger)'};">
                    ${h.amount >= 0 ? '+' : ''}${h.amount.toLocaleString()}P
                  </td>
                  <td><strong>${h.balance.toLocaleString()}P</strong></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        `}
      </div>
    `;
  } else if (mypageTab === 'coupons') {
    tabContentHtml = `
      <div class="white-panel">
        <h3 style="font-size:17px; margin-bottom:14px;">보유 쿠폰함 (사용 가능 ${availCoupons.length}장 / 전체 ${myCoupons.length}장)</h3>
        ${myCoupons.length === 0 ? '<p style="color:var(--text-muted); font-size:13px;">보유 중인 쿠폰이 없습니다.</p>' : `
          <div class="coupon-grid">
            ${myCoupons.map(c => `
              <div class="coupon-card ${c.status !== '사용가능' ? 'inactive' : ''}">
                <div>
                  <div style="font-size:16px; font-weight:800; color:var(--brand); margin-bottom:3px;">${c.amount.toLocaleString()}원 할인</div>
                  <div style="font-size:14px; font-weight:700; margin-bottom:4px;">${c.title}</div>
                  <div style="font-size:12px; color:var(--text-secondary);">주문 금액 제한 없음 · 유효기간 ~${c.expiry}</div>
                </div>
                <span class="coupon-tag">${c.status}</span>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    `;
  }

  box.innerHTML = `
    <div style="margin-bottom:20px;">
      <h2 style="font-size:22px; font-weight:800;">마이페이지</h2>
      <p style="font-size:13px; color:var(--text-secondary); margin-top:4px;">${currentUser.name} (${currentUser.email})</p>
    </div>

    <div class="mypage-summary-grid">
      <div class="stat-card">
        <div class="stat-label">진행 중 주문 / 전체 주문</div>
        <div class="stat-value">${activeOrders.length}건 <span style="font-size:14px; color:var(--text-muted); font-weight:500;">/ 총 ${myAllOrders.length}건</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">보유 포인트</div>
        <div class="stat-value accent">${currentUser.points.toLocaleString()} P</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">보유 쿠폰 (사용가능)</div>
        <div class="stat-value">${availCoupons.length}장 <span style="font-size:14px; color:var(--text-muted); font-weight:500;">/ 전체 ${myCoupons.length}장</span></div>
      </div>
    </div>

    <div class="sub-tabs">
      <button class="sub-tab-btn ${mypageTab === 'active' ? 'active' : ''}" onclick="mypageTab='active'; renderMyPage();">① 진행 중 주문 내역 (${activeOrders.length})</button>
      <button class="sub-tab-btn ${mypageTab === 'past' ? 'active' : ''}" onclick="mypageTab='past'; renderMyPage();">② 과거 주문 내역 (${pastOrders.length})</button>
      <button class="sub-tab-btn ${mypageTab === 'points' ? 'active' : ''}" onclick="mypageTab='points'; renderMyPage();">③ 보유 포인트 내역</button>
      <button class="sub-tab-btn ${mypageTab === 'coupons' ? 'active' : ''}" onclick="mypageTab='coupons'; renderMyPage();">④ 보유 쿠폰함 (${myCoupons.length})</button>
    </div>

    ${tabContentHtml}
  `;
}

function cancelUserOrder(orderId) {
  const order = orders.find(o => o.orderId === orderId);
  if (!order) return;
  if (order.status !== '결제완료') {
    return openAlertModal(`현재 상태(${order.status})에서는 주문을 취소할 수 없습니다.`);
  }
  // confirmed via modal

  order.status = '취소됨';

  // 주문 취소 시 상품 재고 즉시 복원
  order.items.forEach(item => {
    const prod = products.find(p => p.id === item.productId);
    if (prod) prod.stock += item.qty;
  });

  const today = new Date().toISOString().slice(0, 10);
  if (!currentUser.pointHistory) currentUser.pointHistory = [];

  if (order.couponId) {
    const targetC = (currentUser.coupons || []).find(c => c.id === order.couponId);
    if (targetC) targetC.status = '사용가능';
  }
  if (order.earnedPoints > 0) {
    currentUser.points = Math.max(0, currentUser.points - order.earnedPoints);
    currentUser.pointHistory.unshift({
      date: today,
      desc: `주문 취소로 인한 적립 포인트 회수 (${order.orderId})`,
      amount: -order.earnedPoints,
      balance: currentUser.points
    });
  }
  if (order.pointUsed > 0) {
    currentUser.points += order.pointUsed;
    currentUser.pointHistory.unshift({
      date: today,
      desc: `주문 취소로 인한 사용 포인트 환급 (${order.orderId})`,
      amount: order.pointUsed,
      balance: currentUser.points
    });
  }

  const uIdx = users.findIndex(u => u.id === currentUser.id);
  if (uIdx !== -1) users[uIdx] = JSON.parse(JSON.stringify(currentUser));

  saveState();
  renderMyPage();
  openAlertModal('주문이 취소되었으며 재고, 쿠폰, 포인트가 복원되었습니다.', '주문 취소 완료');
}

// ============================================================================
// [9] S-07 관리자 페이지
// ============================================================================
function renderAdmin() {
  const box = document.getElementById('adminContent');

  let tabHtml = '';
  if (adminTab === 'sales') {
    const startDate = document.getElementById('salesStartDate')?.value || '2026-11-01';
    const endDate = document.getElementById('salesEndDate')?.value || '2026-12-31';

    if (startDate > endDate) {
      openAlertModal('시작일은 종료일보다 늦을 수 없습니다.', '기간 조회 안내');
    }
    const validOrders = startDate <= endDate
      ? orders.filter(o => o.status !== '취소됨' && o.orderDate >= startDate && o.orderDate <= endDate)
      : [];
    const netSales = validOrders.reduce((s, o) => s + o.amount, 0);
    const avgSales = validOrders.length > 0 ? Math.round(netSales / validOrders.length) : 0;

    const catTotals = { '냉장고': 0, '세탁기': 0, '건조기': 0 };
    validOrders.forEach(o => {
      o.items.forEach(it => {
        if (catTotals[it.category] !== undefined) {
          catTotals[it.category] += it.unitPrice * it.qty;
        }
      });
    });
    const maxCat = Math.max(1, ...Object.values(catTotals));

    tabHtml = `
      <div class="white-panel">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:18px;">
          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
            <strong style="font-size:13px;">조회 기간:</strong>
            <input type="date" id="salesStartDate" value="${startDate}" onchange="renderAdmin()" />
            <span>~</span>
            <input type="date" id="salesEndDate" value="${endDate}" onchange="renderAdmin()" />
          </div>
          <button class="btn-excel" onclick="downloadSalesExcel('${startDate}', '${endDate}')">엑셀(.xls) 다운로드</button>
        </div>

        <div class="admin-kpi-grid">
          <div class="stat-card">
            <div class="stat-label">정상 주문 건수 (취소 제외)</div>
            <div class="stat-value">${validOrders.length}건</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">기간 내 순매출 합계</div>
            <div class="stat-value accent">${formatKRW(netSales)}</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">건당 평균 결제 금액</div>
            <div class="stat-value">${formatKRW(avgSales)}</div>
          </div>
        </div>

        <div class="admin-charts-grid">
          <div class="chart-box">
            <div class="chart-title">카테고리별 판매 매출 시각화</div>
            <div class="chart-sub">정상 주문 기준 품목별 매출 비중</div>
            ${Object.entries(catTotals).map(([cat, amt]) => {
      const sumAllCat = Object.values(catTotals).reduce((a, b) => a + b, 0);
      const pct = sumAllCat > 0 ? Math.round((amt / sumAllCat) * 100) : 0;
      const w = sumAllCat > 0 ? Math.max(4, Math.round((amt / maxCat) * 100)) : 0;
      const color = cat === '냉장고' ? '#A50034' : (cat === '세탁기' ? '#C86D51' : '#2E7D32');
      return `
                <div class="bar-row">
                  <div class="bar-label-row">
                    <span>${cat} (${pct}%)</span>
                    <span>${formatKRW(amt)}</span>
                  </div>
                  <div class="bar-track">
                    <div class="bar-fill" style="width:${w}%; background:${color};"></div>
                  </div>
                </div>
              `;
    }).join('')}
          </div>

          <div class="chart-box">
            <div class="chart-title">상품별 판매 랭킹 TOP 5</div>
            <div class="chart-sub">조회 기간 내 가장 많이 팔린 제품 (판매 수량 및 누적 매출 순)</div>
            ${(() => {
        const prodMap = {};
        validOrders.forEach(o => {
          o.items.forEach(it => {
            if (!prodMap[it.name]) {
              prodMap[it.name] = { name: it.name, qty: 0, sales: 0 };
            }
            prodMap[it.name].qty += it.qty;
            prodMap[it.name].sales += it.unitPrice * it.qty;
          });
        });
        const topProducts = Object.values(prodMap)
          .sort((a, b) => b.qty - a.qty || b.sales - a.sales)
          .slice(0, 5);
        if (topProducts.length === 0) {
          return '<p style="font-size:13px; color:var(--text-muted);">조회 기간 내 판매된 상품 내역이 없습니다.</p>';
        }
        const maxSales = Math.max(1, ...topProducts.map(x => x.sales));
        return topProducts.map((tp, idx) => {
          const w = Math.max(10, Math.round((tp.sales / maxSales) * 100));
          return `
                  <div class="bar-row">
                    <div class="bar-label-row">
                      <span><strong>${idx + 1}위</strong> ${tp.name} (${tp.qty}대)</span>
                      <span>${formatKRW(tp.sales)}</span>
                    </div>
                    <div class="bar-track">
                      <div class="bar-fill" style="width:${w}%; background:${idx === 0 ? 'var(--brand)' : '#2C2C2E'};"></div>
                    </div>
                  </div>
                `;
        }).join('');
      })()}
          </div>
        </div>

        <h3 style="font-size:16px; margin-bottom:12px;">조회된 정상 주문 상세 내역 (${validOrders.length}건)</h3>
        <table>
          <thead><tr><th>주문번호</th><th>주문일</th><th>주문자</th><th>주문 상품</th><th>순매출액</th><th>상태</th></tr></thead>
          <tbody>
            ${validOrders.length === 0 ? '<tr><td colspan="6" style="text-align:center; color:var(--text-muted);">데이터가 없습니다.</td></tr>' :
        validOrders.map(o => `
                <tr>
                  <td><strong>${o.orderId}</strong></td>
                  <td>${o.orderDate}</td>
                  <td>${o.userName}</td>
                  <td>${o.items.map(i => `${i.name}(${i.optionText})×${i.qty}`).join(', ')}</td>
                  <td><strong style="color:var(--brand);">${formatKRW(o.amount)}</strong></td>
                  <td>${o.status}</td>
                </tr>
              `).join('')
      }
          </tbody>
        </table>
      </div>
    `;
  } else if (adminTab === 'stock') {
    tabHtml = `
      <div class="white-panel">
        <h3 style="font-size:17px; margin-bottom:14px;">상품 재고 관리</h3>
        <table>
          <thead><tr><th>모델명</th><th>카테고리</th><th>상품명</th><th>기준 판매가</th><th>현재 재고</th><th>재고 수정</th></tr></thead>
          <tbody>
            ${products.map(p => `
              <tr>
                <td>${p.modelCode}</td>
                <td>${p.category}</td>
                <td><strong>${p.name}</strong></td>
                <td>${formatKRW(p.price)}</td>
                <td style="font-weight:700; color:${p.stock === 0 ? 'var(--danger)' : 'inherit'};">${p.stock}대 ${p.stock === 0 ? '(품절)' : ''}</td>
                <td>
                  <input type="number" id="adminStock-${p.id}" value="${p.stock}" min="0" style="width:80px;" />
                  <button class="icon-btn" onclick="updateAdminStock(${p.id})">저장</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  } else if (adminTab === 'test') {
    const statusOptions = ['결제완료', '배송준비', '설치중', '배송완료', '취소됨'];
    tabHtml = `
      <div class="white-panel">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:20px;">
          <div>
            <h3 style="font-size:17px;">테스트 지원 (초기 데이터 리셋 · 배송 상태 변경)</h3>
            <p style="font-size:12px; color:var(--text-muted); margin-top:4px;">주문별 원하는 배송 상태를 직접 선택해 변경하거나 전체 초기 데이터를 리셋할 수 있습니다.</p>
          </div>
          <button class="btn-solid" onclick="resetAllSrsData(true)">초기 데이터 리셋</button>
        </div>

        <table>
          <thead><tr><th>주문번호</th><th>주문자</th><th>주문 상품</th><th>결제금액</th><th>현재 상태</th><th>배송 상태 변경</th></tr></thead>
          <tbody>
            ${orders.map(o => `
              <tr>
                <td><strong>${o.orderId}</strong></td>
                <td>${o.userName}</td>
                <td>${o.items.map(i => `${i.name}×${i.qty}`).join(', ')}</td>
                <td>${formatKRW(o.amount)}</td>
                <td><strong style="color:${o.status === '취소됨' ? 'var(--danger)' : 'var(--brand)'};">${o.status}</strong></td>
                <td>
                  <div style="display:flex; align-items:center; gap:6px;">
                    <select id="deliverySel-${o.orderId}" style="padding:6px 10px; font-size:12px;">
                      ${statusOptions.map(st => `<option value="${st}" ${o.status === st ? 'selected' : ''}>${st}</option>`).join('')}
                    </select>
                    <button class="icon-btn" style="padding:6px 12px; font-size:12px;" onclick="changeDeliveryStatus('${o.orderId}')">적용</button>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  box.innerHTML = `
    <div style="margin-bottom:20px;">
      <h2 style="font-size:22px; font-weight:800;">관리자 페이지</h2>
      <p style="font-size:13px; color:var(--text-secondary); margin-top:4px;">매출 현황 집계·엑셀 다운로드, 상품 재고 수량 관리 및 테스트 지원</p>
    </div>

    <div class="sub-tabs">
      <button class="sub-tab-btn ${adminTab === 'sales' ? 'active' : ''}" onclick="adminTab='sales'; renderAdmin();">① 매출 현황 (기간조회 · 엑셀)</button>
      <button class="sub-tab-btn ${adminTab === 'stock' ? 'active' : ''}" onclick="adminTab='stock'; renderAdmin();">② 재고 관리</button>
      <button class="sub-tab-btn ${adminTab === 'test' ? 'active' : ''}" onclick="adminTab='test'; renderAdmin();">③ 테스트 지원 (배송 상태 변경)</button>
    </div>

    ${tabHtml}
  `;
}

function updateAdminStock(id) {
  const val = Number(document.getElementById(`adminStock-${id}`).value);
  if (val < 0 || !Number.isInteger(val)) return openAlertModal('재고 수량은 0 이상의 정수로 입력해 주세요.');
  const prod = products.find(p => p.id === id);
  if (prod) {
    prod.stock = val;
    saveState();
    renderAdmin();
    openAlertModal(`[${prod.name}] 재고가 ${val}대로 저장되었습니다.`);
  }
}

function changeDeliveryStatus(orderId) {
  const order = orders.find(o => o.orderId === orderId);
  const sel = document.getElementById(`deliverySel-${orderId}`);
  if (!order || !sel) return;
  const nextStatus = sel.value;
  if (order.status === nextStatus) {
    return openAlertModal(`이미 '${nextStatus}' 상태입니다.`);
  }
  order.status = nextStatus;
  saveState();
  renderAdmin();
  openAlertModal(`[${order.orderId}] 배송 상태가 '${nextStatus}'(으)로 변경되었습니다.`);
}

function resetAllSrsData(fromAdmin = false) {
  // confirmed via modal
  localStorage.removeItem('srs43_v12_t25_products');
  localStorage.removeItem('srs43_v12_t25_users');
  localStorage.removeItem('srs43_v12_t25_current_user');
  localStorage.removeItem('srs43_v12_t25_guest_cart');
  localStorage.removeItem('srs43_v12_t25_user_carts');
  localStorage.removeItem('srs43_v12_t25_orders');

  const prevUserId = currentUser ? currentUser.id : null;
  products = JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
  users = JSON.parse(JSON.stringify(DEFAULT_USERS));
  if (fromAdmin) {
    currentUser = users.find(u => u.id === 'admin01');
  } else if (prevUserId) {
    currentUser = users.find(u => u.id === prevUserId) || null;
  } else {
    currentUser = null;
  }
  guestCart = [];
  userCarts = {};
  orders = JSON.parse(JSON.stringify(DEFAULT_ORDERS));
  saveState();

  if (fromAdmin) {
    renderAdmin();
  } else {
    renderProducts();
    if (document.getElementById('view-cart').classList.contains('active')) renderCart();
    if (document.getElementById('view-mypage').classList.contains('active')) renderMyPage();
    if (document.getElementById('view-admin').classList.contains('active')) renderAdmin();
  }
  openAlertModal('초기 데이터로 복원되었습니다.', '초기화 완료');
}

function downloadSalesExcel(startDate, endDate) {
  const validOrders = orders.filter(o =>
    o.status !== '취소됨' && o.orderDate >= startDate && o.orderDate <= endDate
  );
  if (validOrders.length === 0) return openAlertModal('다운로드할 정상 주문 데이터가 없습니다.', '다운로드 안내');

  const netSales = validOrders.reduce((s, o) => s + o.amount, 0);
  const rowsHtml = validOrders.map(o => `
    <tr>
      <td>${o.orderId}</td>
      <td>${o.orderDate}</td>
      <td>${o.userId}</td>
      <td>${o.userName}</td>
      <td>${o.items.map(i => `${i.name}(${i.optionText})×${i.qty}`).join(' / ')}</td>
      <td>${o.multiDiscount || 0}</td>
      <td>${o.couponDiscount || 0}</td>
      <td>${o.pointUsed || 0}</td>
      <td>${o.cardDiscount || 0}</td>
      <td>${o.amount}</td>
      <td>${o.status}</td>
    </tr>
  `).join('');

  const excelHtml = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office"
          xmlns:x="urn:schemas-microsoft-com:office:excel"
          xmlns="http://www.w3.org/TR/REC-html40">
    <head>
      <meta charset="UTF-8" />
      <style>
        table { border-collapse: collapse; font-family: 'Malgun Gothic', sans-serif; font-size: 12px; }
        th { background-color: #A50034; color: #FFFFFF; font-weight: bold; border: 1px solid #CCCCCC; padding: 8px; }
        td { border: 1px solid #CCCCCC; padding: 6px 8px; }
        .total { background-color: #F4F4F4; font-weight: bold; }
      </style>
    </head>
    <body>
      <table>
        <thead>
          <tr>
            <th>주문번호</th>
            <th>주문일</th>
            <th>회원ID</th>
            <th>주문자명</th>
            <th>주문상품상세</th>
            <th>다품목할인(원)</th>
            <th>쿠폰할인(원)</th>
            <th>포인트사용(P)</th>
            <th>카드할인(원)</th>
            <th>순매출액(원)</th>
            <th>주문상태</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
          <tr class="total">
            <td colspan="9">조회 기간(${startDate} ~ ${endDate}) 정상 주문 총 ${validOrders.length}건 순매출 합계</td>
            <td>${netSales}</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </body>
    </html>
  `;

  const blob = new Blob(['﻿' + excelHtml], { type: 'application/vnd.ms-excel;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `OBJET_HAUS_매출현황_${startDate}_${endDate}.xls`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

updateHeaderUI();
renderProducts();


// ============================================================================
// [10] 푸터 테스터 계정 안내 모달 및 원클릭 자동 입력
// ============================================================================
function openTesterModal() {
  document.getElementById('testerModal').classList.add('open');
}

function closeTesterModal() {
  document.getElementById('testerModal').classList.remove('open');
}

function quickFillLogin(id, pw) {
  closeTesterModal();
  openAuthView('login');
  document.getElementById('loginId').value = id;
  document.getElementById('loginPw').value = pw;
}


// ============================================================================
// [11] 관리자 경로(/admin 및 #/admin) URL 직접 접근 제어 (AC-02-3 / NF-04)
// ============================================================================
function checkAdminUrlAccess() {
  const pendingRoute = sessionStorage.getItem('srs43_pending_route');
  const currentHash = window.location.hash || '';
  const currentPath = window.location.pathname || '';

  const isAdminRequested =
    pendingRoute === '/admin' ||
    /^#\/?admin\/?$/i.test(currentHash) ||
    /\/admin\/?$/i.test(currentPath);

  if (pendingRoute) {
    sessionStorage.removeItem('srs43_pending_route');
  }

  if (isAdminRequested) {
    if (!currentUser || currentUser.role !== 'admin') {
      openAlertModal('관리자 권한이 없습니다. 상품 목록 화면으로 이동합니다.', '권한 안내');
      if (window.history && window.history.replaceState) {
        const cleanUrl = window.location.pathname.replace(/\/admin\/?$/i, '/');
        window.history.replaceState(null, '', cleanUrl);
      }
      showView('view-home');
    } else {
      showView('view-admin');
    }
  }
}

window.addEventListener('hashchange', checkAdminUrlAccess);
document.addEventListener('DOMContentLoaded', checkAdminUrlAccess);


///mypage등 비정상 접근
function handlePendingSubRoute() {
  sessionStorage.removeItem('wawa_loop_guard');

  const pendingRoute = sessionStorage.getItem('wawa_pending_route');
  if (pendingRoute) {
    sessionStorage.removeItem('wawa_pending_route');
  }

  const currentHash = window.location.hash || '';
  const currentPath = window.location.pathname || '';

  const matchedPath =
    pendingRoute ||
    (currentPath.match(/\/(admin|mypage|cart|checkout)\/?$/i)?.[0]?.toLowerCase() || '') ||
    (currentHash.match(/^#\/?(admin|mypage|cart|checkout)\/?$/i)?.[1]
      ? '/' + currentHash.match(/^#\/?(admin|mypage|cart|checkout)\/?$/i)[1].toLowerCase()
      : '');

  if (!matchedPath) return;



  if (window.history && window.history.replaceState) {
    const cleanUrl = window.location.pathname
      .replace(/(\/index\.html)+/gi, '/')
      .replace(/\/{2,}/g, '/')
      .replace(/\/(admin|mypage|cart|checkout)\/?$/i, '/');
    window.history.replaceState(null, '', cleanUrl || '/objet-haus/');
  }

  if (matchedPath === '/admin') {
    if (!currentUser || currentUser.role !== 'admin') {
      openAlertModal('관리자 권한이 없습니다. 상품 목록 화면으로 이동합니다.', '권한 안내', () => showView('view-home'));
      showView('view-home');
    } else {
      showView('view-admin');
    }
    return;
  }

  if (matchedPath === '/mypage' || matchedPath === '/checkout') {
    if (!currentUser) {
      openAlertModal('로그인이 필요한 서비스입니다.', '로그인 안내', () => openAuthView('login'));
      showView('view-home');
    } else {
      showView(matchedPath === '/mypage' ? 'view-mypage' : 'view-checkout');
    }
    return;
  }

  if (matchedPath === '/cart') {
    showView('view-cart');
  }
}

window.addEventListener('hashchange', handlePendingSubRoute);
document.addEventListener('DOMContentLoaded', handlePendingSubRoute);


///뒤로가기 버튼

let _isPopstateNav = false;

function applyViewState(viewId) {
  if (viewId === 'view-admin') {
    if (!currentUser || currentUser.role !== 'admin') {
      openAlertModal('관리자 권한이 없습니다. 상품 목록 화면으로 이동합니다.', '권한 안내', () => applyViewState('view-home'));
      return;
    }
  }
  if ((viewId === 'view-checkout' || viewId === 'view-mypage') && !currentUser) {
    openAlertModal('로그인이 필요한 서비스입니다.', '로그인 안내', () => openAuthView('login'));
    return;
  }

  document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
  const targetSec = document.getElementById(viewId);
  if (!targetSec) return;
  targetSec.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (viewId === 'view-home') renderProducts();
  if (viewId === 'view-cart') renderCart();
  if (viewId === 'view-checkout') renderCheckout();
  if (viewId === 'view-mypage') renderMyPage();
  if (viewId === 'view-admin') renderAdmin();
}

function showView(viewId) {
  if (!_isPopstateNav && window.history && window.history.pushState) {
    const stateObj = { viewId, productId: currentProductId };
    const hashUrl = viewId === 'view-home' ? window.location.pathname : `#${viewId.replace('view-', '')}`;
    window.history.pushState(stateObj, '', hashUrl);
  }
  _isPopstateNav = false;
  applyViewState(viewId);
}

window.addEventListener('popstate', (e) => {
  _isPopstateNav = true;
  if (e.state && e.state.viewId) {
    if (e.state.viewId === 'view-pdp' && e.state.productId) {
      currentProductId = e.state.productId;
      renderPDP();
    }
    applyViewState(e.state.viewId);
  } else {
    applyViewState('view-home');
  }
});