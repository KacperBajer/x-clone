export const formatDate = (date: string) => {
    const now = new Date();
    const inputDate = new Date(date);
  
    const nowUTC = Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      now.getUTCHours(),
      now.getUTCMinutes(),
      now.getUTCSeconds()
    );
    const inputUTC = Date.UTC(
      inputDate.getUTCFullYear(),
      inputDate.getUTCMonth(),
      inputDate.getUTCDate(),
      inputDate.getUTCHours(),
      inputDate.getUTCMinutes(),
      inputDate.getUTCSeconds()
    );
  
    const diffInMs = nowUTC - inputUTC;
  
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  
    const currentYear = now.getUTCFullYear();
    const inputYear = inputDate.getUTCFullYear();
  
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minutes ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    } else if (diffInDays < 7) {
      return `${diffInDays} days ago`;
    } else {
      const options: Intl.DateTimeFormatOptions = {
        month: 'short',
        day: 'numeric',
        ...(currentYear !== inputYear && { year: 'numeric' }),
        timeZone: 'UTC',
      };
  
      return inputDate.toLocaleDateString('en-US', options);
    }
  }
  