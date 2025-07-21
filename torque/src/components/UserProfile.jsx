import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={user.profilePicture}
            alt={`${user.name}'s profile`}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            User Profile
          </div>
          <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
            {user.name}
          </h1>
          <p className="mt-2 text-gray-500">{user.email}</p>
          <div className="mt-4">
            <h2 className="text-sm text-gray-600">Additional Details:</h2>
            <ul className="list-disc list-inside">
              <li>Role: {user.role}</li>
              <li>Joined: {new Date(user.joinedDate).toDateString()}</li>
              <li>Phone: {user.phone}</li>
              {/* Add more details as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
