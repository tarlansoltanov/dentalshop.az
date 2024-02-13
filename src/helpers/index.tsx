// Mobile Navigation Toggle
export const toggleMobileNavigation = () => {
  document.body.classList.toggle("navigation-active");
};

// Get URL with filter params
export const getURLWithFilterParams = (url: string, filters: any) => {
  const params = convertToSearchParams(filters);

  if (!params.toString()) return url;

  return `${url}?${params.toString()}`;
};

// Convert object to URLSearchParams
export const convertToSearchParams = (filters: any) => {
  Object.keys(filters).forEach(
    (key) => (filters[key] === null || filters[key] === "") && delete filters[key]
  );
  return new URLSearchParams(filters);
};
