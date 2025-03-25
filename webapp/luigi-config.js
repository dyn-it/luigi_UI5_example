//you can now use ES6 goodies here
Luigi.setConfig({
  navigation: {
    contextSwitcher: false,
    nodes: () => [
      {
        pathSegment: 'home',
        label: 'Home',
        icon: 'home',
        viewUrl: 'openui5.html#/home',
        children: [
          {
            category: { label: 'Samples' },
            pathSegment: 'sample1',
            label: 'First',
            icon: 'nutrition-activity',
            viewUrl: 'sample1/sample1.html'
          },
          {
            category: { label: 'Samples 2' },
            pathSegment: 'sample2',
            label: 'Second',
            icon: 'paper-plane',
            viewUrl: 'sample2/sample2.html'
          },
          {
            category: { label: 'Links', icon: 'cloud' },
            label: 'Luigi Project',
            externalLink: {
              url: 'https://luigi-project.io/'
            }
          },
          {
            category: { label: 'Links' },
            label: 'OpenUI5',
            externalLink: {
              url: 'https://openui5.hana.ondemand.com/'
            }
          }
        ]
      }
    ]
  },
  routing: {
    /**
     * Development:
     * For path routing, set to false
     * For hash routing, set to true
     */
    useHashRouting: true
  },
  settings: {
    header: {
      title: 'Luigi OpenUI5 Test App',
      logo: '/logo.png',
      favicon: '/favicon.ico'
    },
    responsiveNavigation: 'Fiori3',
    appLoadingIndicator: {
      hideAutomatically: true
    }
  }
});
