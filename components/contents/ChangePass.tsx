"use client";
import React, { useState } from 'react';

const ChangePasswordForm: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full sm:w-11/12 md:w-4/5 lg:w-2/3 xl:w-3/4 2xl:w-2/3 mx-auto mt-8">
      <h3 className="text-xl font-semibold text-[#BA2025]">Change Password</h3>
      <div className="mt-4 space-y-4">
        <input
          type="password"
          placeholder="Current password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BA2025]"
        />
        <input
          type="password"
          placeholder="New password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BA2025]"
        />
        <input
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BA2025]"
        />
        <button type="submit" className="w-flex px-6 py-3 bg-[#BA2025] text-white font-semibold rounded-lg hover:bg-red-700">
          Save changes
        </button>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
