// store.js
import toast from 'react-hot-toast';
import { create } from 'zustand';

const useStore = create((set, get) => ({
  userData: null,
  isUserDataFetched: false,
  selectedQuote: "Inspiring the next generation",
  selectedTheme: "purple-blue",
  toggleBorder: false,
  fetchUserData: (username) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('https://gql.hashnode.com/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query User($username: String!) {
                user(username: $username) {
                  id
                  username
                  name
                  dateJoined
                  tagline
                  followersCount
                  followingsCount
                  profilePicture
                  posts(pageSize: 10, page: 1) {
                    totalDocuments
                  }
                  bio {
                    markdown
                    html
                    text
                  }
                  badges {
                    id
                    name
                    image
                  }
                }
              }
            `,
            variables: {
              username: username,
            },
          }),
        });
  
        const responseData = await response.json();
        if (!responseData.data.user) {
          throw new Error('User not found');
        }
        const userData = responseData.data.user;
        set({ userData: userData });
        resolve(userData);
        get().userData;
        set({ isUserDataFetched: true });
        toast.success('User data fetched successfully');
      } catch (error) {
        toast.error(`Error fetching user data: ${error.message}`);
        reject(error);
      }
    });
  },
  setSelectedQuote: (quote) => {
    set({ selectedQuote: quote });
  },
  setSelectedTheme: (theme) => {
    set({ selectedTheme: theme });
  },
  setToggleBorder: () => {
    set((state) => ({ toggleBorder: !state.toggleBorder }));
  },
}));

export default useStore;