(function() {
  try {
    // Get the current day of the week (0 = Sunday, 1 = Monday, etc.)
    var today = new Date().getDay();
    
    // Map day number to theme name
    var dayThemeMap = {
      0: 'sunday',    // Sunday
      1: 'monday',    // Monday
      2: 'tuesday',   // Tuesday
      3: 'wednesday', // Wednesday
      4: 'thursday',  // Thursday
      5: 'friday',    // Friday
      6: 'saturday'   // Saturday
    };
    
    // Get saved theme or use today's theme
    var savedTheme = localStorage.getItem('colorTheme');
    var isUserSelected = localStorage.getItem('userSelectedTheme') === 'true';
    var lastVisitDay = localStorage.getItem('lastVisitDay');
    var todayStr = today.toString();
    
    // Determine which theme to use
    var themeToApply;
    if (savedTheme && (isUserSelected || lastVisitDay === todayStr)) {
      themeToApply = savedTheme;
      console.log('Using saved theme: ' + themeToApply);
    } else {
      themeToApply = dayThemeMap[today];
      localStorage.setItem('colorTheme', themeToApply);
      localStorage.setItem('lastVisitDay', todayStr);
      console.log('Applying daily theme for ' + Object.keys(dayThemeMap)[today] + ': ' + themeToApply);
    }
    
    // Wait for DOM to be ready before manipulating elements
    function applyThemeToBody() {
      if (document.body) {
        // Apply the theme class to body
        document.body.classList.add('pattern-' + themeToApply);
      } else {
        // If body isn't available yet, try again in a moment
        setTimeout(applyThemeToBody, 10);
      }
    }
    
    // Start the process of applying theme to body
    applyThemeToBody();
    
    // Apply theme colors
    var themeColors = {
      sunday: '#FF7F00',    // Orange
      monday: '#b8c6db',    // Light blue-gray (adjusted from white)
      tuesday: '#FF0000',   // Red
      wednesday: '#00A651', // Green
      thursday: '#FFDF00',  // Yellow
      friday: '#87CEEB',    // Sky Blue
      saturday: '#3a3a8c'   // Navy Blue (adjusted for visibility)
    };
    
    var primaryColor = themeColors[themeToApply];
    if (primaryColor) {
      var root = document.documentElement;
      if (root) {
        root.style.setProperty('--ifm-color-primary', primaryColor);
        
        // Set derived colors (simplified for reliability)
        var darken = function(hex, percent) {
          var num = parseInt(hex.slice(1), 16);
          var amt = Math.round(2.55 * percent);
          var R = Math.max(0, (num >> 16) - amt);
          var G = Math.max(0, (num >> 8 & 0x00FF) - amt);
          var B = Math.max(0, (num & 0x0000FF) - amt);
          return '#' + (0x1000000 + R*0x10000 + G*0x100 + B).toString(16).slice(1);
        };
        
        var lighten = function(hex, percent) {
          var num = parseInt(hex.slice(1), 16);
          var amt = Math.round(2.55 * percent);
          var R = Math.min(255, (num >> 16) + amt);
          var G = Math.min(255, (num >> 8 & 0x00FF) + amt);
          var B = Math.min(255, (num & 0x0000FF) + amt);
          return '#' + (0x1000000 + R*0x10000 + G*0x100 + B).toString(16).slice(1);
        };
        
        root.style.setProperty('--ifm-color-primary-dark', darken(primaryColor, 10));
        root.style.setProperty('--ifm-color-primary-darker', darken(primaryColor, 15));
        root.style.setProperty('--ifm-color-primary-darkest', darken(primaryColor, 25));
        root.style.setProperty('--ifm-color-primary-light', lighten(primaryColor, 10));
        root.style.setProperty('--ifm-color-primary-lighter', lighten(primaryColor, 15));
        root.style.setProperty('--ifm-color-primary-lightest', lighten(primaryColor, 25));
      }
    }
    
    console.log('Early theme application complete: ' + themeToApply);
  } catch (e) {
    console.error('Error in early theme application:', e);
  }
})();
