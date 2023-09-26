
const LITERAL_ENDPOINT = `https://literal.club/graphql/`;

export const getAccessToken = async () => {
    const response = await fetch(LITERAL_ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `
            mutation login($email: String!, $password: String!) {
                login(email: $email, password: $password) {
                    token
                }
            }
        `,
            variables: {
                email: "akiftsc41@gmail.com",
                password: "balkabagi",
            },
        }),
        cache: "force-cache",
        next: {
            revalidate: 60 * 60 * 24 * 14
        }
    }).then((res) => res.json());
    return response.data.login.token;
};


export const getCurrentlyReadingBooks = async () => {
    const access_token  = await getAccessToken();

    const res = await fetch(LITERAL_ENDPOINT, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `
          query myReadingStates {
            myReadingStates {
              ...ReadingStateParts # find fragments below
              book {
                ...BookParts # find fragments below
              }
            }
          }

          fragment ReadingStateParts on ReadingState {
            status
          }

          fragment BookParts on Book {
            title
            cover
            slug
          }
            `,
        }),
        cache: "force-cache",
        next: {
            revalidate: 60 * 60 * 12
        }
    });

    const shelves = await res.json();
    const currentlyReading = shelves.data.myReadingStates.filter((shelf: { status: string; }) => shelf.status === "IS_READING");
    console.log(
        currentlyReading
    )
    return currentlyReading;
};