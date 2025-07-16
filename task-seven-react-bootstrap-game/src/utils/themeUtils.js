export const themeUtils = {
  getThemeClasses: (theme) => ({
    background: theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900',
    card: theme === 'dark' ? 'bg-gray-800' : 'bg-white',
    input: theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900',
    box: theme === 'dark' ? 'bg-gray-800' : 'bg-gray-600',
    tableHeader: theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100',
    tableRow: (isEven, theme) => isEven ? 
      (theme === 'dark' ? 'bg-gray-800' : 'bg-white') : 
      (theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'),
    progressBar: theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
  })
};