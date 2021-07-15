/* globals hopscotch: false */
/* globals $: true */

// Define the tour!
var tour = {
  id: 'testspace-demo',
  steps: [
    {
      title: 'Live Dashboard',
      content: 'Testspace is a Dashboard for publishing results from test automation and a Manual Test Framework based on source code repositories. <a href=\"https://help.testspace.com" target=\"_blank\">Learn more</a>.',
      target: 'project-484',
      placement: 'top',
      arrowOffset: 'center',
      xOffset: 300,
      yOffset: -55,
      onShow: function() {
        $('.hopscotch-bubble-arrow-container').css('visibility', 'hidden');
      },
    },
    {
      title: 'View Project Readiness',
      content: 'Unified project-based quality metrics – generated from test results, code coverage, static analysis, logs, and source code changes.',
      target: 'project-484',
      placement: 'top',
      arrowOffset: 'center',
      multipage: true,
      onNext: function() {
        window.location = '/projects/s2technologies:testspace/spaces/main/metrics';
      }
    },
    {
      title: 'Detailed Charts and Metrics',
      target: document.querySelector(".metrics-header"),
      content: 'Built-in tracking of source code changes, test growth, regressions, and more.',
      placement: 'top',
      arrowOffset: 'center',
      yOffset: 34,
      xOffset: 300,
      multipage: true,
      onNext: function() {
        window.location = '/projects/testspace-com:demo/spaces/main/current';
      },
      onPrev: function() {
        window.location = '/';
      }
    },
    {
      title: 'Triage Test Failures',
      content: 'Improve your efficiency when addressing test failures. Check out our documentation on <a href=\"https://help.testspace.com/dashboard/space-results#test-failures" target=\"_blank\">Failure Tracking Management</a> for more details.',
      target: 'centered-overlay',
      placement: 'top',
      yOffset: 60,
      xOffset: -250,
      multipage: true,
      onShow: function() {
        $('.hopscotch-bubble-arrow-container').css('visibility', 'hidden');
      },
      onPrev: function() {
        window.location = '/projects/s2technologies:testspace/spaces/main/metrics';
      },
      onNext: function() {
        window.location = '/projects/testspace-com:demo/spaces/main/current/failures';
      },
    },
    {
      title: 'Single-click Failure Filtering',
      content: 'Complete failure context: call stack, timing information, and more.',
      target: 'centered-overlay',
      placement: 'top',
      yOffset: 20,
      xOffset: -250,
      multipage: true,
      onShow: function() {
        $('.hopscotch-bubble-arrow-container').css('visibility', 'hidden');
      },
      onPrev: function() {
        window.location = '/projects/testspace-com:demo/spaces/main/current';
      },
      onNext: function() {
        window.location = '/projects/testspace-com:demo/spaces/main/current/failures?group_by=failure_state;type=tracked';
      }
    },
    {
      title: 'Automatic Flaky Analysis',
      content: 'Triage failures based on state: New, Flaky, and Consistently failing.',
      target: 'centered-overlay',
      placement: 'top',
      yOffset: 60,
      xOffset: -250,
      multipage: true,
      onShow: function() {
        $('.hopscotch-bubble-arrow-container').css('visibility', 'hidden');
      },
      onPrev: function() {
        window.location = '/projects/testspace-com:demo/spaces/main/current/failures';
      },
      onNext: function() {
        window.location = '/projects/testspace-com:demo/spaces/main/current/failures?group_by=failure_cause;type=tracked';
      },
    },
    {
      title: 'Common Errors Grouping',
      content: 'Triage failures based on similar error messages.',
      target: 'centered-overlay',
      placement: 'top',
      yOffset: 20,
      xOffset: -250,
      multipage: true,
      onShow: function() {
        $('.hopscotch-bubble-arrow-container').css('visibility', 'hidden');
      },
      onPrev: function() {
        window.location = '/projects/testspace-com:demo/spaces/main/current/failures?group_by=failure_state;type=tracked';
      },
      onNext: function() {
        window.location = '/projects/s2technologies:testspace/insights';
      },
    },
    {
      title: 'Test Analytics',
      content: 'Insights - performance indicators that continuously assess your testing process. See <a href=\"https://help.testspace.com/dashboard/project-insights" target=\"_blank\">Testspace Insights</a> for details.',
      target: document.querySelector(".insights-header"),
      placement: 'top',
      arrowOffset: 'center',
      xOffset: 300,
      yOffset: 60,
      onShow: function() {
        $('.hopscotch-bubble-arrow-container').css('visibility', 'hidden');
      },
      onPrev: function() {
        window.location = '/projects/testspace-com:demo/spaces/main/current/failures?group_by=failure_cause;type=tracked';
      }
    },
    {
      title: 'Thanks for Reviewing!',
      content: 'Go ahead and navigate the Live Dashboard. To learn more about publishing results and manual testing, check out our <a href=\"https://help.testspace.com/tutorial/setup" target=\"_blank\">tutorial</a>.',
      target: document.querySelector(".insights-header"),
      placement: 'top',
      arrowOffset: 'center',
      xOffset: 300,
      yOffset: 90,
      onShow: function() {
        $('.hopscotch-bubble-arrow-container').css('visibility', 'hidden');
      },
    }, 
  ],
  onClose: function () {
    hopscotch.endTour();
    window.location = 'https://s2.stridespace.com';
  },
  
  onEnd: function () {
    hopscotch.endTour();
    window.location = 'https://s2.stridespace.com';
  },
  
  onError: function () {
    console.log("onError .."); 
    hopscotch.endTour();
  },
  
  skipIfNoElement: false,
  showPrevButton: true,
  scrollTopMargin: 100
};

var state = hopscotch.getState();
console.log(state);
hopscotch.startTour(tour);
