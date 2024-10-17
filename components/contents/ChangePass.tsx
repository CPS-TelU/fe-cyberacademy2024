"use client";
import React, { useState } from 'react';
import { Eye, EyeOff } from 'react-feather'; // Pastikan untuk menginstal react-feather jika belum

const ChangePasswordForm: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Tambahkan logika untuk mengubah kata sandi
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full sm:w-11/12 md:w-4/5 lg:w-2/3 xl:w-3/4 2xl:w-2/3 mx-auto mt-8">
      <h3 className="text-xl font-semibold text-[#BA2025]">Change Password</h3>
      <div className="mt-4 space-y-4 ">
        {/* Current Password */}
        <div className="relative">
          <input
            type={showCurrentPassword ? "text" : "password"}
            placeholder="Current password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BA2025]"
          />
          <button
            type="button"
            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
            className="absolute right-4 top-3 text-gray-500"
          >
            {showCurrentPassword ? <Eye /> : <EyeOff />}
          </button>
        </div>

        <div className="relative">
          <input
            type={showNewPassword ? "text" : "password"}
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BA2025]"
          />
          <button
            type="button"
            onClick={() => setShowNewPassword(!showNewPassword)}
            className="absolute right-4 top-3 text-gray-500"
          >
            {showNewPassword ? <Eye /> : <EyeOff />}
          </button>
        </div>

        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BA2025]"
            disabled={!newPassword} // Disable if newPassword is empty
          />
          <div className="mb-8">
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-4 top-3 text-gray-500"
            disabled={!newPassword} // Disable if newPassword is empty
          >
            {showConfirmPassword ? <Eye /> : <EyeOff />}
          </button>
          </div>
        </div>

        <button type="submit" className="w-full px-6 py-3 bg-[#BA2025] text-white font-semibold rounded-lg hover:bg-red-700">
          Save changes
        </button>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
