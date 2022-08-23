import {utils} from '@react-native-firebase/app';
import {Linking} from 'react-native';
import dynamicLinks from '@react-native-firebase/dynamic-links';

const config = {
  screens: {
    Home: 'Home',
    Detail: {
      path: 'detail/:id',
      parse: {
        id: id => `${id}`,
      },
    },
    LinkingScreen: 'LinkingScreen',
  },
};
const linking = {
  prefixes: ['testlinking://app', 'https://www.google.com'],
  async getInitialURL() {
    // First, you would need to get the initial URL from your third-party integration
    // The exact usage depend on the third-party SDK you use
    // For example, to get to get the initial URL for Firebase Dynamic Links:
    const {isAvailable} = utils().playServicesAvailability;
    if (isAvailable) {
      const initialLink = await dynamicLinks().getInitialLink();
      if (initialLink) {
        return initialLink.url;
      }
    }

    // As a fallback, you may want to do the default deep link handling
    const url = await Linking.getInitialURL();

    return url;
  },

  // Custom function to subscribe to incoming links
  subscribe(listener) {
    // Listen to incoming links from Firebase Dynamic Links
    const unsubscribeFirebase = dynamicLinks().onLink(({url}) => {
      listener(url);
    });

    // Listen to incoming links from deep linking
    const linkingSubscription = Linking.addEventListener('url', ({url}) => {
      listener(url);
    });

    return () => {
      // Clean up the event listeners
      unsubscribeFirebase();
      linkingSubscription.remove();
    };
  },
  config,
};

export default linking;
