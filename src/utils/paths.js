/**
 * Utility functions for handling paths in the application
 */

// Get the base URL for assets
export const getAssetPath = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `/portfolio/${cleanPath}`;
};

// Get image path
export const getImagePath = (imageName) => {
  return getAssetPath(`images/${imageName}`);
};
