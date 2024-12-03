function formatNumber(num) {
  num= Number(num)
  if (num <= 100) {
    return num.toString();
  }else if(num >= 10000) {
    // 10000显示为10k，大于10000显示为10k+
    return num===10000 ? '10k' : '10k+'
  }
  else {
    const magnitude = Math.floor(Math.log10(num));
    const base = Math.pow(10, magnitude);
    const value = Math.floor(num / base) * base;
    return value.toString() + '+';
  }
}

