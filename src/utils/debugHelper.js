/**
 * Simple utility to debug render issues
 */

// Inject this into the document to verify script execution
console.log("Debug helper loaded");

// Add a global error handler
window.addEventListener('error', function(event) {
  console.error('Global error caught:', event.error);
  
  // Create an error display element
  const errorDisplay = document.createElement('div');
  errorDisplay.style.position = 'fixed';
  errorDisplay.style.top = '0';
  errorDisplay.style.left = '0';
  errorDisplay.style.right = '0';
  errorDisplay.style.backgroundColor = '#ffdddd';
  errorDisplay.style.color = '#ff0000';
  errorDisplay.style.padding = '10px';
  errorDisplay.style.zIndex = '9999';
  errorDisplay.innerHTML = `<strong>Error:</strong> ${event.error?.message || 'Unknown error'}`;
  
  document.body.appendChild(errorDisplay);
});

// Check for React rendering
export function checkReactRendering() {
  setTimeout(() => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
      console.log('Root element exists with content:', rootElement.innerHTML);
      if (rootElement.children.length === 0 || rootElement.innerHTML === '') {
        console.warn('Root element exists but appears to be empty!');
      }
    } else {
      console.error('Root element not found!');
    }
  }, 1000);
}

export default { checkReactRendering };
