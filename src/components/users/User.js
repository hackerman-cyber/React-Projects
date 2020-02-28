import React, { Fragment, useEffect } from "react";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import Repos from "../repos/Repos";
import { Link } from "react-router-dom";

const User = ({ getUser, user, loading, getUserRepos, repos, match }) => {
  useEffect(() => {
    // same as componenetDidMount
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    login,
    avatar_url,
    html_url,
    name,
    location,
    bio,
    public_repos,
    public_gists,
    followers,
    following
  } = user;

  if (loading) return <Spinner />;
  return (
    <Fragment>
      <Link
        to="/"
        type="button"
        className="btn btn-outline-primary waves-effect my-2"
      >
        Back to Search
      </Link>
      <div className="card-group">
        <div
          className="card-block my-2"
          style={{
            width: "25%",
            border: "0.5px solid black"
          }}
        >
          <img className="card-img-top" src={avatar_url} alt={`${login}`} />

          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{login}</h6>
            {bio && <p className="card-text">{bio}</p>}
            <ul className="list-group list-group-flush">
              {location && (
                <li className="list-group-item">Location: {location}</li>
              )}
              <li className="list-group-item">Followers: {followers}</li>
              <li className="list-group-item">Following: {following}</li>
              <li className="list-group-item">Repositories: {public_repos}</li>
              <li className="list-group-item">Gists: {public_gists}</li>
              <li className="list-group-item">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="card-block my-2 p-2"
          style={{
            width: "75%",
            border: "0.5px solid"
          }}
        >
          <div className="card-header">Featured Repos</div>
          <Repos key={repos.id} repos={repos} />
        </div>
      </div>
    </Fragment>
  );
};

User.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired
};

export default User;
