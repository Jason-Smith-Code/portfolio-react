export function calculateAge() {
    const birthday = new Date("02/20/1984");
    const today = new Date();
    const diffInMs = Math.abs(today - birthday);
    var result = parseInt(diffInMs / (1000 * 60 * 60 * 24 * 365));
    return result;
  }