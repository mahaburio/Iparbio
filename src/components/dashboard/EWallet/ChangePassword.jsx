import React, { useState } from "react";

const ChangePassword = () => {
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  return (
    <div className="change-password activeEwallet">
      {/* Username section */}
      <div className="username-change d-flex align-items-center gap-3">
        <div className="username-details">
          <div className="username">
            <label>Username</label>
            <div className="d-flex align-items-center gap-3">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <div className="update d-flex gap-1">
                <i className="ri-pencil-fill"></i> Update
              </div>
            </div>
          </div>

          <div className="new-username mt-3">
            <label>New Username</label>
            <div className="d-flex align-items-center gap-3">
              <input
                type="text"
                placeholder="Enter New Username"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
              <button>Submit</button>
            </div>
          </div>
        </div>
        <div className="note">
          Username must contain one non-numeric character and be at least 5 characters.
        </div>
      </div>

      {/* Password section */}
      <div className="mt-4 username-change d-flex align-items-center gap-3">
        <div className="username-details">
          <div className="password">
            <label>Password</label>
            <div className="d-flex align-items-center gap-3">
              <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="update d-flex gap-1">
                <i className="ri-pencil-fill"></i> Update
              </div>
            </div>
          </div>

          <div className="new-password mt-3">
            <label>New Password</label>
            <div className="d-flex align-items-center gap-3">
              <input
                type="text"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="re-password mt-3">
            <label>Re-enter Password</label>
            <div className="d-flex align-items-center gap-3">
              <input
                type="text"
                placeholder="Re-enter Password"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
              />
              <button>Submit</button>
            </div>
          </div>
        </div>
        <div className="note">
          The password you entered does not meet the security requirements.
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
