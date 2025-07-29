import { redirect } from "@tanstack/react-router";
import { getCurrentUser } from "../api/user.api.js";
import { login } from "../store/slices/authSlice.js";

// It receives a context containing shared resources like queryClient and Redux store.

export const checkAuth = async ({ context }) => {
    try {
        // Destructure queryClient and store from the context object
        const { queryClient, store } = context;

        // Use queryClient.ensureQueryData to fetch or retrieve cached user data.
        const user = await queryClient.ensureQueryData({
            queryKey: ["currentUser"], // Unique key for this query
            queryFn: getCurrentUser, // The asynchronous function that actually fetches the user data from an API
            retry: false
        });

        if (!user) return false;

        // This updates the Redux state to reflect that the user is logged in
        store.dispatch(login(user));
        const auth = store.getState().auth;
        if (!auth) return false;
        return true;
    } catch (error) {

        console.error("Authentication check failed:", error);
        return redirect({ to: "/auth" });
    }
};