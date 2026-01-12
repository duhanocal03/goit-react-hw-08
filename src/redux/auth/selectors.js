// Kullanıcının giriş yapıp yapmadığını kontrol eder
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

// Giriş yapmış kullanıcının bilgilerini (name, email) döndürür
export const selectUser = (state) => state.auth.user;

// Sayfa yenilendiğinde (refresh) mevcut kullanıcının doğrulanıp doğrulanmadığını takip eder
export const selectIsRefreshing = (state) => state.auth.isRefreshing;