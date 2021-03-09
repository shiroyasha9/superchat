import React from 'react';

function SignOut(props) {
  const { auth } = props;
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

export default SignOut;
