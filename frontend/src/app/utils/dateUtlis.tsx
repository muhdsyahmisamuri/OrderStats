export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are 0-indexed, so we add 1
  const year = date.getFullYear().toString().slice(-2); // Get last 2 digits of year
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${day}-${String(month).padStart(2, "0")}-${year} ${String(
    hours
  ).padStart(2, "0")}.${String(minutes).padStart(2, "0")}`;
};
