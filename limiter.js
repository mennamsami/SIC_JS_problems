function rateLimiter(limit, interval) {
    let tokens = limit;
    let lastIssued = Date.now();
  
    return function() {
      const now = Date.now();
      const elapsed = now - lastIssued;
      const available = Math.floor(elapsed / interval) * limit;
  
      if (available > 0) {
        tokens = Math.min(tokens + available, limit);
        lastIssued = now;
      }
  
      if (tokens > 0) {
        tokens--;
        return true;
      } else {
        return false;
      }
    }
  }