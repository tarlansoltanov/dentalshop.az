// Mobile Navigation Toggle
export const toggleMobileNavigation = () => {
  document.body.classList.toggle("navigation-active");
};

// Get URL with filter params
export const getURLWithFilterParams = (url: string, filters: any) => {
  let urlWithParams = url;
  const params = new URLSearchParams(filters);
  if (params.toString()) {
    urlWithParams += `?${params.toString()}`;
  }
  return urlWithParams;
};
