import React from 'react'

const CustomAlert = ({ message, onClose, onCancel }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="p-4 bg-white rounded-lg shadow-md">
        <p className="mb-4">{message}</p>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={onClose}
          >
            OK
          </button>
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default CustomAlert
