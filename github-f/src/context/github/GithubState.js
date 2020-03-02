import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  SET_ALERT,
  SET_LOADING,
  GET_REPOS,
  GET_USER
} from "../types";

const GithubState = props => {
  let GCI;
  let GCS;

  if (process.env.NODE_ENV !== "production") {
    GCI = process.env.REACT_APP_GITHUB_CLIENT_ID;
    GCS = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
  } else {
    GCI = process.env.GITHUB_CLIENT_ID;
    GCS = process.env.GITHUB_CLIENT_SECRET;
  }
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // search users
  const searchUsers = async text => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${GCI}&client_secret=${GCS}`
    );

    // setUsers(res.data.items);
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
  };

  // get user

  // get repos

  // set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // clear users

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
