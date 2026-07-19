 // 1. Initialize the page year counter
  document.getElementById('current-year').textContent = new Date().getFullYear();

  /**
   * Generates a standardized date string (YYYY-MM-DD) for API calls.
   * @returns {string} Today's date formatted as YYYY-MM-DD.
   */
  function getTodayDateString() {
      const now = new Date
